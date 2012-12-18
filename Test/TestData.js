
TestData = {

    vcard1Str:'BEGIN:VCARD\nN:Lovelace;Ada\nFN:Ada;Lovelace\nORG:Babbage\nEMAIL;type=INTERNET;type=Work:ada.lovelace@babbage.org\nEMAIL;type=INTERNET,Personal;LANGUAGE=En:ada@gmail.com\nTEL;type=Home:932435434\nTEL;type=Work:645324315\nADR;type=Home:;;32 Leicester Square, London;;;;\nADR;type=Work:;;12 Halsmere Road, London;;;;\nURL;type=Blog:lovelace.org\nURL;type=Twitter:twitter.com/ada\nNOTE:Countess of Lovelace.\nCATEGORIES:Developers,Mathematicians\nUID:352D8E36-ECCF-4966-9060-15625008A10C\nREV:20120720T014035Z\nEND:VCARD',

    vcard1Obj: {
        'N': 'Lovelace;Ada',
        'FN': 'Ada;Lovelace',
        'ORG': 'Babbage',
        'EMAIL': [
            {
                'params': [
                    {
                        'type': 'type',
                        'value': ['INTERNET']
                    },
                    {
                        'type': 'type',
                        'value': ['Work']
                    }
                ],
                'value': ['ada.lovelace@babbage.org']
            },
            {
                'params': [
                    {
                        'type': 'type',
                        'value': ['INTERNET','Personal']
                    },
                    {
                        'type': 'LANGUAGE',
                        'value': ['En']
                    }
                ],
                'value': ['ada@gmail.com']
            }
        ],
        'TEL': [
            {
                'params': [
                    {
                        'type': 'type',
                        'value': ['Home']
                    }
                ],
                'value': ['932435434']
            },
            {
                'params': [
                    {
                        'type': 'type',
                        'value': ['Work']
                    }
                ],
                'value': ['645324315']
            }
        ],
        'ADR': [
            {
                'params': [
                    {
                        'type': 'type',
                        'value': ['Home']
                    }
                ],
                'value': ['','','32 Leicester Square, London','','','','']
            },
            {
                'params': [
                    {
                        'type': 'type',
                        'value': ['Work']
                    }
                ],
                'value': ['','','12 Halsmere Road, London','','','','']
            }
        ],
        'URL': [
            {
                'params': [
                    {
                        'type': 'type',
                        'value': ['Blog']
                    }
                ],
                'value': ['lovelace.org']
            },
            {
                'params': [
                    {
                        'type': 'type',
                        'value': ['Twitter']
                    }
                ],
                'value': ['twitter.com/ada']
            }
        ],
        'NOTE': 'Countess of Lovelace.',
        'CATEGORIES': 'Developers,Mathematicians',
        'UID': '352D8E36-ECCF-4966-9060-15625008A10C',
        'REV': '20120720T014035Z',
        'NOTPARSED': []
    },

    vcardAppleStr: 'BEGIN:VCARD\nVERSION:3.0\nPRODID:-//Apple Inc.//Address Book 6.1//EN\nN:Watson;Adam;;;\nFN:Adam Watson\nORG:Fast Forward Ventures;\nEMAIL;type=INTERNET;type=HOME;type=pref:adam.watson@me.com\nTEL;type=CELL;type=VOICE;type=pref:(415) 555-4550\nitem1.ADR;type=HOME;type=pref:;;3625 20th Street;San Francisco;CA;94110;\nitem1.X-ABADR:us\nX-ABUID:8C647B67-5E06-4F67-9FE8-9CA5F5000936:ABPerson\nEND:VCARD',

    vcardAppleObj: {
        'VERSION': '3.0',
        'PRODID': '-//Apple Inc.//Address Book 6.1//EN',
        'N': 'Watson;Adam;;;',
        'FN': 'Adam Watson',
        'ORG': 'Fast Forward Ventures;',
        'EMAIL': [
            {
                'params': [
                    {
                        'type': 'type',
                        'value': ['INTERNET']
                    },
                    {
                        'type': 'type',
                        'value': ['HOME']
                    },
                    {
                        'type': 'type',
                        'value': ['pref']
                    }

                ],
                'value': ['adam.watson@me.com']
            }
        ],
        'TEL': [
            {
                'params': [
                    {
                        'type': 'type',
                        'value': ['CELL']
                    },
                    {
                        'type': 'type',
                        'value': ['VOICE']
                    },
                    {
                        'type': 'type',
                        'value': ['pref']
                    }

                ],
                'value': ['(415) 555-4550']
            }
        ],


        'NOTPARSED':['item1.ADR;type=HOME;type=pref:;;3625 20th Street;San Francisco;CA;94110;', 'item1.X-ABADR:us', 'X-ABUID:8C647B67-5E06-4F67-9FE8-9CA5F5000936:ABPerson']


    }
};