const blankBallotJSON = `{
    "active_ggos": [
        ".",
        "GGOs/states/Massachusetts",
        "GGOs/states/Massachusetts/GGOs/counties/Middlesex",
        "GGOs/states/Massachusetts/GGOs/towns/Concord"
    ],
    "ballot_filename": "000,001,002,003,ballot.json",
    "ballot_node": "GGOs/states/Massachusetts/GGOs/towns/Concord",
    "ballot_subdir": "GGOs/states/Massachusetts/GGOs/towns/Concord",
    "contests": {
        "GGOs/states/Massachusetts": [
            {
                "U.S. President": {
                    "choices": [
                        {
                            "name": "Circle Party Ticket",
                            "ticket_names": [
                                "Rey Skywalker",
                                "Obi-Wan Kenobi"
                            ]
                        },
                        {
                            "name": "Square Party Ticket",
                            "ticket_names": [
                                "Atticus Finch",
                                "Hermione Granger"
                            ]
                        },
                        {
                            "name": "Triangle Party Ticket",
                            "ticket_names": [
                                "Evelyn Quan Wang",
                                "Waymond Wang"
                            ]
                        }
                    ],
                    "contest_type": "ticket",
                    "max": 1,
                    "selection": [
                        "0: Circle Party Ticket"
                    ],
                    "tally": "plurality",
                    "ticket_offices": [
                        "President",
                        "Vice President"
                    ],
                    "uid": "0000"
                }
            },
            {
                "U.S. Senate": {
                    "choices": [
                        {
                            "name": "Anthony Alpha",
                            "party": "Circle Party"
                        },
                        {
                            "name": "Betty Beta",
                            "party": "Dyad Party"
                        },
                        {
                            "name": "Gloria Gamma",
                            "party": "Triangle Party"
                        },
                        {
                            "name": "David Delta",
                            "party": "Square Party"
                        },
                        {
                            "name": "Emily Echo",
                            "party": "Pentagon Party"
                        },
                        {
                            "name": "Francis Foxtrot",
                            "party": "Hexagon Party"
                        }
                    ],
                    "selection": [
                        "5: Francis Foxtrot",
                        "4: Emily Echo",
                        "3: David Delta"
                    ],
                    "tally": "rcv",
                    "uid": "0001"
                }
            },
            {
                "Governor": {
                    "choices": [
                        {
                            "name": "Spencer Cogswell",
                            "party": "Circle Party"
                        },
                        {
                            "name": "Cosmo Spacely",
                            "party": "Triangle Party"
                        }
                    ],
                    "max": 1,
                    "selection": [
                        "1: Cosmo Spacely"
                    ],
                    "tally": "plurality",
                    "uid": "0002"
                }
            }
        ],
        "GGOs/states/Massachusetts/GGOs/counties/Middlesex": [
            {
                "County Clerk": {
                    "choices": [
                        "Jean-Luc Picard",
                        "Katniss Everdeen",
                        "James T. Kirk"
                    ],
                    "max": 1,
                    "selection": [
                        "0: Jean-Luc Picard"
                    ],
                    "tally": "plurality",
                    "uid": "0003"
                }
            }
        ],
        "GGOs/states/Massachusetts/GGOs/towns/Concord": [
            {
                "Question 1 - should the starting time of the annual town meeting be moved to 6:30 PM?": {
                    "choices": [
                        "yes",
                        "no"
                    ],
                    "description": "Should the Town of Concord start the annual Town Meeting at 6:30 PM instead of 7:00 PM?",
                    "max": 1,
                    "selection": [
                        "0: yes"
                    ],
                    "tally": "plurality",
                    "uid": "0004"
                }
            }
        ]
    }
}`;
