# Tableau web data connector for USASpending.gov
This is a first-draft at creating a web data connector for using the USASpending.gov API to deliver contract data to Tableau.

## Overview
The web data connector is basically a small javascript application that makes an AJAX call to the API, establishes the scheme for Tableau and then populates a table with the data from the API. This is done almost entirely in the `wdc.js` file.

Because the USASpending API only returns XML, the `xmlproxy.php` script acts as a both a server-side proxy and converter. It allows us to get around the cross-domain limitations and it converts the API return into more useful JSON.

## Understanding the API return and testing the proxy
The `proxy.html` file is a test for the php proxy and API call. It pulls 10 records and logs the entire return to the browser console. The contractor names and obligated dollars are also added to the HTML page as visual evidence that the request was completed.

The return is a single object containing two objects. `search_criteria` provides details of the API call. The actual data is found in the `result` object. Examining the `result` object is a convenient way of looking at all the fields and data types the API returns.

## How the web data collector works
The web data collector is basically a two-step process. First, the schema for the Tableau table is created. This happens around line 13 in `wdc.js` with the line that begins

```myConnector.getSchema = function(schemaCallback) {
  var cols = [{
    id: "piid",
    alias: "Piid",
    dataType: tableau.dataTypeEnum.string
  },

  ...
```

For every item in the API JSON return you want imported into Tableau an object describing the field is added to the `cols` array.

The `alias` property is not required, but is handy to make the field name match what the Tableau app is expecting. If the incoming name differs from what's in the Tableau document, the app will break until you fix the broken table reference.

The `dataType` property tells Tableau the data type. There are several instances where the API provides numbers, but Tableau is expecting strings. Properly setting the `dataType` keeps you from having to change it in Tableau.

After the schema is set, the web data connector actually fetches the data. This happens around line 307 with the line that begins

```myConnector.getData = function(table, doneCallback) {
  var url = "https://www.usaspending.gov/fpds/fpds.php?detail=c&fiscal_year=" + fiscalYear + "&maj_agency_cat="+ majAgencyCat + "&max_records=" + maxRecords + "&sortby=f";

  ...
```

After the JSON is returned from the API+proxy, there is a long `for` loop that cycles through the return and applies the data values to the ids set in the `getSchema` step. The code inside the loop looks like this:

`"piid": docs[i].PIID,`

Here the first `piid` is the id set in the schema, and `.PIID` is the name of the API's property.
