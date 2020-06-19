export const survey = {
  "id": 1,
  "title": "Default survey",
  "questions": [{
      "id": 1,
      "type": "supervisor",
      "name": "supervisor",
      "title": "Who should receive this survey response?",
      "required": true,
      "values": null
    },
    {
      "id": 2,
      "type": "temperature",
      "name": "temperature",
      "title": "What's your body temperature?",
      "required": false,
      "values": null
    },
    {
      "id": 3,
      "type": "radio",
      "name": "covid_tested",
      "title": "Have you been tested for the coronavirus (awaiting results)?",
      "required": true,
      "values": [{
          "title": "Yes",
          "value": true,
          "helperText": "Please contact your healthcare provider for recommendations and your supervisor before reporting to work."
        },
        {
          "title": "No",
          "value": false,
          "helperText": null
        }
      ]
    },
    {
      "id": 4,
      "type": "radio",
      "name": "covid_positive",
      "title": "Have you tested POSITIVE for the coronavirus?",
      "required": true,
      "values": [{
          "title": "Yes",
          "value": true,
          "helperText": "Please contact your healthcare provider for recommendations and your supervisor before reporting to work."
        },
        {
          "title": "No",
          "value": false,
          "helperText": null
        }
      ]
    },
    {
      "id": 5,
      "type": "radio",
      "name": "contact_positive",
      "title": "Have you had prolonged close contact with someone who tested positive for the coronavirus?",
      "required": true,
      "values": [{
          "title": "Yes",
          "value": true,
          "helperText": "Please contact your healthcare provider for recommendations and your supervisor before reporting to work."
        },
        {
          "title": "No",
          "value": false,
          "helperText": null
        }
      ]
    },
    {
      "id": 6,
      "type": "radio",
      "name": "household_tested",
      "title": "Has a member of your household been tested for the coronavirus (awaiting results)?",
      "required": true,
      "values": [{
          "title": "Yes",
          "value": true,
          "helperText": "Please contact your healthcare provider for recommendations and your supervisor before reporting to work."
        },
        {
          "title": "No",
          "value": false,
          "helperText": null
        }
      ]
    },
    {
      "id": 7,
      "type": "radio",
      "name": "household_isolate",
      "title": "Has a member of your household been asked by a medical professional to isolate for potential coronavirus?",
      "required": true,
      "values": [{
          "title": "Yes",
          "value": true,
          "helperText": "Please contact your healthcare provider for recommendations and your supervisor before reporting to work."
        },
        {
          "title": "No",
          "value": false,
          "helperText": null
        }
      ]
    },
    {
      "id": 8,
      "type": "radio",
      "name": "household_contact_positive",
      "title": "Has a household member had prolonged close contact with someone who tested positive for the coronavirus?",
      "required": true,
      "values": [{
          "title": "Yes",
          "value": true,
          "helperText": "Please contact your healthcare provider for recommendations and your supervisor before reporting to work."
        },
        {
          "title": "No",
          "value": false,
          "helperText": null
        }
      ]
    },
    {
      "id": 9,
      "type": "radio",
      "name": "travel_out_of_country",
      "title": "Have you traveled out of the country within the last 14 days?",
      "required": true,
      "values": [{
          "title": "Yes",
          "value": true,
          "helperText": "Please contact your healthcare provider for recommendations and your supervisor before reporting to work."
        },
        {
          "title": "No",
          "value": false,
          "helperText": null
        }
      ]
    },
    {
      "id": 10,
      "type": "radio",
      "name": "travel_cruise",
      "title": "Have you taken a cruise within the last 14 days?",
      "required": true,
      "values": [{
          "title": "Yes",
          "value": true,
          "helperText": "Please contact your healthcare provider for recommendations and your supervisor before reporting to work."
        },
        {
          "title": "No",
          "value": false,
          "helperText": null
        }
      ]
    },
    {
      "id": 11,
      "type": "checkbox",
      "name": "symptoms",
      "title": "Are you experiencing or have you experienced any of the following symptoms in the past 14 days?",
      "required": false,
      "values": [{
          "title": "Cough (not related to allergies)",
          "value": 1,
          "helperText": "Please contact your healthcare provider for recommendations and your supervisor before reporting to work."
        },
        {
          "title": "Shortness of breath",
          "value": 2,
          "helperText": "Please contact your healthcare provider for recommendations and your supervisor before reporting to work."
        },
        {
          "title": "Difficulty breathing",
          "value": 3,
          "helperText": "Please contact your healthcare provider for recommendations and your supervisor before reporting to work."
        },
        {
          "title": "Fever",
          "value": 4,
          "helperText": "Please contact your healthcare provider for recommendations and your supervisor before reporting to work."
        },
        {
          "title": "Chills",
          "value": 5,
          "helperText": "Please contact your healthcare provider for recommendations and your supervisor before reporting to work."
        },
        {
          "title": "Repeated shaking with chills",
          "value": 6,
          "helperText": "Please contact your healthcare provider for recommendations and your supervisor before reporting to work."
        },
        {
          "title": "Muscle Pain",
          "value": 7,
          "helperText": "Please contact your healthcare provider for recommendations and your supervisor before reporting to work."
        },
        {
          "title": "New Loss of Taste or Smell",
          "value": 8,
          "helperText": "Please contact your healthcare provider for recommendations and your supervisor before reporting to work."
        },
        {
          "title": "Sore Throat or Headache",
          "value": 9,
          "helperText": "Please contact your healthcare provider for recommendations and your supervisor before reporting to work."
        }
      ]
    }
  ]
}

export const user = {
  "id": 7,
  "role": "regular",
  "email": "ckf782@mocs.utc.edu",
  "name": "Jesus Patino",
  "mocsId": "ckf782",
  "avatar": null
}

export const supervisors = [{
    id: "supervisor.id1",
    name: "TestName1",
    email: "Test1@mocs.utc.edu"
  },
  {
    id: "supervisor.id2",
    name: "TestName2",
    email: "Test2@mocs.utc.edu"
  }
]

export const licenses = [{
    name: "Name 1",
    publisher: "Publisher 1",
    repository: "RepositoryURL1"
  }

]

export const responses = [
  {
    id: "0",
    surveyId: "1",
    createdAt: "2019-12-12" /* IsoDate */,
  },
  {
    id: "1",
    surveyId: "1",
    createdAt: "2019-12-12" /* IsoDate */,
  },
  {
    id: "2",
    surveyId: "1",
    createdAt: "2019-12-12" /* IsoDate */,
  },
  {
    id: "3",
    surveyId: "1",
    createdAt: "2019-12-12" /* IsoDate */,
  },
  {
    id: "4",
    surveyId: "1",
    createdAt: "2019-12-12" /* IsoDate */,
  },
  {
    id: "5",
    surveyId: "1",
    createdAt: "2019-12-12" /* IsoDate */,
  },
  {
    id: "6",
    surveyId: "1",
    createdAt: "2019-12-12" /* IsoDate */,
  },
  {
    id: "7",
    surveyId: "1",
    createdAt: "2019-12-12" /* IsoDate */,
  },
  {
    id: "8",
    surveyId: "1",
    createdAt: "2019-12-12" /* IsoDate */,
  },
  {
    id: "9",
    surveyId: "1",
    createdAt: "2019-12-12" /* IsoDate */,
  },
  {
    id: "10",
    surveyId: "1",
    createdAt: "2019-12-12" /* IsoDate */,
  },
  {
    id: "11",
    surveyId: "1",
    createdAt: "2019-12-12" /* IsoDate */,
  },
  {
    id: "12",
    surveyId: "1",
    createdAt: "2019-12-12" /* IsoDate */,
  },
  {
    id: "13",
    surveyId: "1",
    createdAt: "2019-12-12" /* IsoDate */,
  },
  {
    id: "14",
    surveyId: "1",
    createdAt: "2019-12-12" /* IsoDate */,
  }
]