// Testing deploybot

(function() {
  // hard-coded RL used for ajax call
  var url = "https://www.usaspending.gov/fpds/fpds.php?detail=c&fiscal_year=2015&maj_agency_cat=1600&sortby=f&max_records=100";

  // Create the connector object
  var myConnector = tableau.makeConnector();

  // Define the schema
  myConnector.getSchema = function(schemaCallback) {
    var cols = [{
      id: "A76Action",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "vendorname",
      alias: "vendorname",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "dollarsobligated",
      alias: "dollarsobligated",
      dataType: tableau.dataTypeEnum.float
    }, {
      id: "baseandexercisedoptionsvalue",
      alias: "baseandexercisedoptionsvalue",
      dataType: tableau.dataTypeEnum.float
    }, {
      id: "baseandalloptionsvalue",
      alias: "baseandalloptionsvalue",
      dataType: tableau.dataTypeEnum.float
    }, {
      id: "maj_agency_cat",
      alias: "maj_agency_cat",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "mod_agency",
      alias: "mod_agency",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "maj_fund_agency_cat",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "contractingofficeagencyid",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "contractingofficeid",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "fundingrequestingagencyid",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "fundingrequestingofficeid",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "fundedbyforeignentity",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "signeddate",
      dataType: tableau.dataTypeEnum.date
    }, {
      id: "effectivedate",
      dataType: tableau.dataTypeEnum.date
    }, {
      id: "currentcompletiondate",
      dataType: tableau.dataTypeEnum.date
    }, {
      id: "ultimatecompletiondate",
      dataType: tableau.dataTypeEnum.date
    }, {
      id: "lastdatetoorder",
      dataType: tableau.dataTypeEnum.date
    }, {
      id: "contractactiontype",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "reasonformodification",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "typeofcontractpricing",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "priceevaluationpercentdifference",
      dataType: tableau.dataTypeEnum.float
    }, {
      id: "subcontractplan",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "lettercontract",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "multiyearcontract",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "performancebasedservicecontract",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "majorprogramcode",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "contingencyhumanitarianpeacekeepingoperation",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "contractfinancing",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "costorpricingdata",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "costaccountingstandardsclause",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "descriptionofcontractrequirement",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "purchasecardaspaymentmethod",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "numberofactions",
      dataType: tableau.dataTypeEnum.float
    }, {
      id: "nationalinterestactioncode",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "progsourceagency",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "progsourceaccount",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "progsourcesubacct",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "vendoralternatename",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "vendorlegalorganizationname",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "streetaddress",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "city",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "state",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "zipcode",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "vendorcountrycode",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "vendor_state_code",
      dataType: tableau.dataTypeEnum.string
    },
    // {
    //   id: "vendor_cd",
    //   dataType: tableau.dataTypeEnum.string
    // },
    {
      id: "congressionaldistrict",
      dataType: tableau.dataTypeEnum.string
    },
    {
      id: "vendorsitecode",
      dataType: tableau.dataTypeEnum.string
    },
    {
      id: "vendoralternatesitecode",
      dataType: tableau.dataTypeEnum.string
    },
    {
      id: "dunsnumber",
      dataType: tableau.dataTypeEnum.string
    },
    {
      id: "parentdunsnumber",
      dataType: tableau.dataTypeEnum.string
    },
    {
      id: "registrationdate",
      dataType: tableau.dataTypeEnum.date
    },
    {
      id: "renewaldate",
      dataType: tableau.dataTypeEnum.date
    },
    {
      id: "mod_parent",
      dataType: tableau.dataTypeEnum.string
    },
    {
      id: "statecode",
      dataType: tableau.dataTypeEnum.string
    },
    {
      id: "placeofperformancecity",
      dataType: tableau.dataTypeEnum.string
    },
    {
      id: "pop_state_code",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "placeofperformancecountrycode",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "placeofperformancezipcode",
      alias: "(20) PoP Zip",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "pop_cd",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "psc_cat",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "productorservicecode",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "principalnaicscode",
      dataType: tableau.dataTypeEnum.string
    },
    {
      id: "gfe_gfp",
      dataType: tableau.dataTypeEnum.string
    },
    {
      id: "agencyid",
      alias: "Agencyid",
      dataType: tableau.dataTypeEnum.string
    },
    {
      id: "fiscal_year",
      alias: "Fiscal Year",
      dataType: tableau.dataTypeEnum.string
    },
    {
      id: "extentcompeted",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "typeofsetaside",
      alias: "Typeofsetaside",
      dataType: tableau.dataTypeEnum.string
    }
  ];

    var tableSchema = {
      id: "DOLContracts",
      alias: "Some DOL contracts",
      columns: cols
    };

    schemaCallback([tableSchema]);
  };

  // Download the data
  myConnector.getData = function(table, doneCallback) {
    $.ajax({
    	url: "xmlproxy.php?url=" + escape(url),
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus, errorThrown);
      },
    	success: function(resp) {
        var data = JSON.parse(resp)
        // console.log(data);
        var docs;
        // console.log(docs);
        var tableData = [];

        if ( data.result.doc.length ) {
          docs = data.result.doc;

          for (var i = 0, len = docs.length; i < len; i += 1) {
            // console.log(docs[i]);
            tableData.push({
              "A76Action": docs[i].A76Action,
              "vendorname": docs[i].vendorName,
              "dollarsobligated": docs[i].obligatedAmount,
              "baseandexercisedoptionsvalue": docs[i].baseAndExercisedOptionsValue,
              "baseandalloptionsvalue": docs[i].baseAndAllOptionsValue,
              "maj_agency_cat": docs[i].maj_agency_cat,
              "mod_agency": docs[i].mod_agency,
              "maj_fund_agency_cat": docs[i].maj_fund_agency_cat,
              "contractingofficeagencyid": docs[i].contractingOfficeAgencyID,
              "contractingofficeid": docs[i].contractingOfficeID,
              "fundingrequestingagencyid": docs[i].fundingRequestingAgencyID,
              "fundingrequestingofficeid": docs[i].fundingRequestingOfficeID,
              "fundedbyforeignentity": docs[i].fundedByForeignEntity,
              "signeddate": docs[i].signedDate,
              "effectivedate": docs[i].effectiveDate,
              "currentcompletiondate": docs[i].currentCompletionDate,
              "ultimatecompletiondate": docs[i].ultimateCompletionDate,
              "lastdatetoorder": docs[i].LastDateToOrder,
              "contractactiontype": docs[i].contractActionType,
              "reasonformodification": docs[i].reasonForModification,
              "typeofcontractpricing": docs[i].typeOfContractPricing,
              "priceevaluationpercentdifference": docs[i].priceEvaluationPercentDifference,
              "subcontractplan": docs[i].subcontractPlan,
              "lettercontract": docs[i].letterContract,
              "multiyearcontract": docs[i].multiYearContract,
              "performancebasedservicecontract": docs[i].performanceBasedServiceContract,
              "majorprogramcode": docs[i].majorProgramCode,
              "contingencyhumanitarianpeacekeepingoperation": docs[i].contingencyHumanitarianPeaceKeepingOperation,
              "contractfinancing": docs[i].contractFinancing,
              "costorpricingdata": docs[i].costOrPricingData,
              "costaccountingstandardsclause": docs[i].costAccountingStandardsClause,
              "descriptionofcontractrequirement": docs[i].descriptionOfContractRequirement,
              "purchasecardaspaymentmethod": docs[i].purchaseCardAsPaymentMethod,
              "numberofactions": docs[i].numberOfActions,
              "nationalinterestactioncode": docs[i].nationalInterestActionCode,
              "progsourceagency": docs[i].ProgSourceAgency,
              "progsourceaccount": docs[i].ProgSourceAccount,
              "progsourcesubacct": docs[i].ProgSourceSubacct,
              "vendoralternatename": docs[i].vendorAlternateName,
              "vendorlegalorganizationname": docs[i].vendorLegalOrganizationName,
              "streetaddress": docs[i].streetAddress,
              "city": docs[i].city,
              "state": docs[i].state,
              "zipcode": docs[i].ZIPCode,
              "vendorcountrycode": docs[i].vendorCountryCode,
              "vendor_state_code": docs[i].vendorStateCode,
              // "vendor_cd": docs[i].
              "congressionaldistrict": docs[i].congressionalDistrict,
              "vendorsitecode": docs[i].vendorSiteCode,
              "vendoralternatesitecode": docs[i].vendorAlternateSiteCode,
              "dunsnumber": docs[i].DUNSNumber,
              "parentdunsnumber": docs[i].parentDUNSNumber,
              "registrationdate": docs[i].registrationDate,
              "renewaldate": docs[i].renewalDate,
              "mod_parent": docs[i].mod_parent,
              "statecode": docs[i].stateCode,
              "placeofperformancecity": docs[i].placeOfPerformanceCity,
              "pop_state_code": docs[i].popStateCode,
              "placeofperformancecountrycode": docs[i].placeOfPerformanceCountryCode,
              "placeofperformancezipcode": docs[i].placeOfPerformanceZIPCode,
              "pop_cd": docs[i].pop_cd,
              "psc_cat": docs[i].psc_cat,
              "productorservicecode": docs[i].productOrServiceCode,
              "principalnaicscode": docs[i].principalNAICSCode,
              "gfe_gfp": docs[i].GFE_GFP,
              "agencyid": docs[i].agencyID,
              "fiscal_year": docs[i].fiscal_year,
              "extentcompeted": docs[i].extentCompeted,
              "typeofsetaside": docs[i].typeOfSetAside
            })
          }
        } else {
          console.log(resp);
        }



        table.appendRows(tableData);
        doneCallback();
    	}
    });
  };

  tableau.registerConnector(myConnector);

  // Create event listeners for when the user submits the form
  $(document).ready(function() {
      $("#submitButton").click(function() {
          tableau.connectionName = "Some DOL contracts"; // This will be the data source name in Tableau
          tableau.submit(); // This sends the connector object to Tableau
      });
  });
})();
