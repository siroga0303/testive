import { useState } from 'react';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import Navigation from '../Navigation/Navigation';
import { useNavigation, Link } from 'react-router-dom';

import './Recommendation.scss';
import BoardGameList from '../BoardgameList/BoardGamesList';
import Filter from '../Filter/Filter';
import { SelectSearch } from '../SelectSearch/SelectSearch';

const Recommendation = (props) => {
    const [boards, setBoards] = useState([
        {
            "bgg_id": 224517,
            "name": "Brass: Birmingham",
            "year": 2018,
            "image_url": [
                "https://cf.geekdo-images.com/x3zxjr-Vw5iU4yDPg70Jgw__original/img/FpyxH41Y6_ROoePAilPNEhXnzO8=/0x0/filters:format(jpeg)/pic3490053.jpg",
                "https://cf.geekdo-images.com/x3zxjr-Vw5iU4yDPg70Jgw__thumb/img/o18rjEemoWaVru9Y2TyPwuIaRfE=/fit-in/200x150/filters:strip_icc()/pic3490053.jpg"
            ],
            "avg_rating": 8.60063,
            "bayes_rating": 8.41666,
            "min_players": 2,
            "max_players": 4,
            "min_players_rec": 2,
            "max_players_rec": 4,
            "min_players_best": 3,
            "max_players_best": 4,
            "min_time": 60,
            "max_time": 120,
            "min_age": 14,
            "complexity": 3.8865,
            "designer": [
                "Gavan Brown:32887",
                "Matt Tolman:32943",
                "Martin Wallace:6"
            ],
            "artist": [
                "Gavan Brown:32887",
                "Lina Cossette:70571",
                "David Forest:70568",
                "Damien Mammoliti:38179",
                "Matt Tolman:32943"
            ],
            "publisher": [
                "Roxley:21765",
                "Arclight Games:3475",
                "BoardM Factory:25074",
                "CMON Global Limited:21608",
                "Conclave Editora:11043",
                "CrowD Games:34522",
                "Dexker Games:31071",
                "Funforge:8832",
                "Gém Klub Kft.:8820",
                "Ghenos Games:4785",
                "Giant Roc:42147",
                "Lanlalen:36210",
                "Lord of Boards:46500",
                "Maldito Games:30677",
                "PHALANX:36186",
                "Rebel Sp. z o.o.:7466",
                "TLAMA games:41423",
                "White Goblin Games:4932",
                "盒拍工作室 Hepa Studio:54777"
            ],
            "game_type": [
                "Strategy Game:5497"
            ],
            "category": [
                "Age of Reason:2726",
                "Economic:1021",
                "Industry / Manufacturing:1088",
                "Post-Napoleonic:2710",
                "Trains:1034",
                "Transportation:1011"
            ],
            "mechanic": [
                "Hand Management:2040",
                "Income:2902",
                "Loans:2904",
                "Market:2900",
                "Network and Route Building:2081",
                "Tags:3100",
                "Tech Trees / Tech Tracks:2849",
                "Turn Order: Stat-Based:2826",
                "Variable Set-up:2897"
            ],
            "family": [
                "Cities: Birmingham (England):17519",
                "Components: Map (Regional scale):81601",
                "Components: Multi-Use Cards:65191",
                "Country: England:14759",
                "Crowdfunding: Kickstarter:8374",
                "Crowdfunding: Spieleschmiede:22135",
                "Digital Implementations: Steam:77349",
                "Digital Implementations: Tabletopia:70948",
                "Digital Implementations: VASSAL:81575",
                "Food & Drink: Beer:26397",
                "Game: Brass:57499",
                "History: Industrial Revolution:50152",
                "Misc: Watch It Played How To Videos:78198",
                "Occupation: Engineer:81586",
                "Organizations: The Game Artisans of Canada:4705",
                "Theme: Canals:66445"
            ],
            "description": "Brass: Birmingham is an economic strategy game sequel to Martin Wallace` 2007 masterpiece, Brass. Brass: Birmingham tells the story of competing entrepreneurs in Birmingham during the industrial revolution, between the years of 1770-1870.It offers a very different story arc and experience from its predecessor. As in its predecessor, you must develop, build, and establish your industries and network, in an effort to exploit low or high market demands. The game is played over two halves: the canal era (years 1770-1830) and the rail era (years 1830-1870). To win the game, score the most VPs. VPs are counted at the end of each half for the canals, rails and established (flipped) industry tiles.Each round, players take turns according to the turn order track, receiving two actions to perform any of the following actions (found in the original game):1) Build - Pay required resources and place an industry tile.2) Network - Add a rail / canal link, expanding your network.3) Develop - Increase the VP value of an industry.4) Sell - Sell your cotton, manufactured goods and pottery.5) Loan - Take a £30 loan and reduce your income.Brass: Birmingham also features a new sixth action:6) Scout - Discard three cards and take a wild location and wild industry card. (This action replaces Double Action Build in original Brass.)",
            "rank": 1
        },
        {
            "bgg_id": 161936,
            "name": "Pandemic Legacy: Season 1",
            "year": 2015,
            "image_url": [
                "https://cf.geekdo-images.com/-Qer2BBPG7qGGDu6KcVDIw__original/img/PlzAH7swN1nsFxOXbfUvE3TkE5w=/0x0/filters:format(png)/pic2452831.png",
                "https://cf.geekdo-images.com/-Qer2BBPG7qGGDu6KcVDIw__thumb/img/NQQcjS31TO0DE246N9rpt0hd9eo=/fit-in/200x150/filters:strip_icc()/pic2452831.png"
            ],
            "avg_rating": 8.53094,
            "bayes_rating": 8.38468,
            "min_players": 2,
            "max_players": 4,
            "min_players_rec": 2,
            "max_players_rec": 4,
            "min_players_best": 4,
            "max_players_best": 4,
            "min_time": 60,
            "max_time": 60,
            "min_age": 13,
            "complexity": 2.8328,
            "designer": [
                "Rob Daviau:442",
                "Matt Leacock:378"
            ],
            "artist": [
                "Chris Quilliams:14057"
            ],
            "publisher": [
                "Z-Man Games:538",
                "Asterion Press:15889",
                "Devir:2366",
                "Filosofia Éditions:5657",
                "Gém Klub Kft.:8820",
                "Hobby Japan:1391",
                "Jolly Thinkers:15983",
                "Korea Boardgames:8291",
                "Lacerta:5812",
                "Lifestyle Boardgames Ltd:9325",
                "MINDOK:7992",
                "Ігромаг:44209"
            ],
            "game_type": [
                "Thematic:5496",
                "Strategy Game:5497"
            ],
            "category": [
                "Environmental:1084",
                "Medical:2145"
            ],
            "mechanic": [
                "Action Points:2001",
                "Cooperative Game:2023",
                "Hand Management:2040",
                "Legacy Game:2824",
                "Point to Point Movement:2078",
                "Scenario / Mission / Campaign Game:2822",
                "Set Collection:2004",
                "Tags:3100",
                "Trading:2008",
                "Variable Player Powers:2015"
            ],
            "family": [
                "Components: Map (Global Scale):64952",
                "Components: Multi-Use Cards:65191",
                "Game: Pandemic:3430",
                "Mechanism: Campaign Games:24281",
                "Mechanism: Legacy:25404",
                "Medical: Diseases:61854",
                "Misc: Limited Replayability:72224",
                "Misc: Made by Panda:78680",
                "Occupation: Dispatcher:63526",
                "Occupation: Medic / Doctor / Nurses:63524",
                "Occupation: Researcher / Scientist:63525",
                "Region: The World:62881",
                "Theme: Science:66167",
                "Versions & Editions: Legacy Versions of Non-Legacy Games:62899"
            ],
            "description": "Pandemic Legacy is a co-operative campaign game, with an overarching story-arc played through 12-24 sessions, depending on how well your group does at the game. At the beginning, the game starts very similar to basic Pandemic, in which your team of disease-fighting specialists races against the clock to travel around the world, treating disease hotspots while researching cures for each of four plagues before they get out of hand.During a player`s turn, they have four actions available, with which they may travel around in the world in various ways (sometimes needing to discard a card), build structures like research stations, treat diseases (removing one cube from the board; if all cubes of a color have been removed, the disease has been eradicated), trade cards with other players, or find a cure for a disease (requiring five cards of the same color to be discarded while at a research station). Each player has a unique role with special abilities to help them at these actions.After a player has taken their actions, they draw two cards. These cards can include epidemic cards, which will place new disease cubes on the board, and can lead to an outbreak, spreading disease cubes even further. Outbreaks additionally increase the panic level of a city, making that city more expensive to travel to.Each month in the game, you have two chances to achieve that month`s objectives. If you succeed, you win and immediately move on to the next month. If you fail, you have a second chance, with more funding for beneficial event cards.During the campaign, new rules and components will be introduced. These will sometimes require you to permanently alter the components of the game; this includes writing on cards, ripping up cards, and placing permanent stickers on components. Your characters can gain new skills, or detrimental effects. A character can even be lost entirely, at which point it`s no longer available for play.Part of the Pandemic series",
            "rank": 2
        },
        {
            "bgg_id": 174430,
            "name": "Gloomhaven",
            "year": 2017,
            "image_url": [
                "https://cf.geekdo-images.com/sZYp_3BTDGjh2unaZfZmuA__original/img/7d-lj5Gd1e8PFnD97LYFah2c45M=/0x0/filters:format(jpeg)/pic2437871.jpg",
                "https://cf.geekdo-images.com/sZYp_3BTDGjh2unaZfZmuA__thumb/img/veqFeP4d_3zNhFc3GNBkV95rBEQ=/fit-in/200x150/filters:strip_icc()/pic2437871.jpg"
            ],
            "avg_rating": 8.60046,
            "bayes_rating": 8.36644,
            "min_players": 1,
            "max_players": 4,
            "min_players_rec": 1,
            "max_players_rec": 4,
            "min_players_best": 3,
            "max_players_best": 3,
            "min_time": 60,
            "max_time": 120,
            "min_age": 14,
            "complexity": 3.9047,
            "designer": [
                "Isaac Childres:69802"
            ],
            "artist": [
                "Alexandr Elichev:77084",
                "Josh T. McDowell:78961",
                "Alvaro Nebot:84269"
            ],
            "publisher": [
                "Cephalofair Games:27425",
                "Albi:4304",
                "Albi Polska:46179",
                "Arclight Games:3475",
                "Feuerland Spiele:22380",
                "Galápagos Jogos:15605",
                "Games Warehouse:40478",
                "Gém Klub Kft.:8820",
                "Hobby World:18852",
                "Korea Boardgames:8291",
                "MYBG Co.",
                "Ltd.:23756"
            ],
            "game_type": [
                "Thematic:5496",
                "Strategy Game:5497"
            ],
            "category": [
                "Adventure:1022",
                "Exploration:1020",
                "Fantasy:1010",
                "Fighting:1046",
                "Miniatures:1047"
            ],
            "mechanic": [
                "Action Queue:2689",
                "Action Retrieval:2839",
                "Campaign / Battle Card Driven:2018",
                "Card Play Conflict Resolution:2857",
                "Communication Limits:2893",
                "Cooperative Game:2023",
                "Critical Hits and Failures:2854",
                "Deck Construction:3004",
                "Grid Movement:2676",
                "Hand Management:2040",
                "Hexagon Grid:2026",
                "Legacy Game:2824",
                "Line of Sight:2975",
                "Modular Board:2011",
                "Multi-Use Cards:3099",
                "Once-Per-Game Abilities:2846",
                "Role Playing:2028",
                "Scenario / Mission / Campaign Game:2822",
                "Simultaneous Action Selection:2020",
                "Solo / Solitaire Game:2819",
                "Tags:3100",
                "Variable Player Powers:2015"
            ],
            "family": [
                "Category: Dungeon Crawler:59218",
                "Components: Map (City Scale):67953",
                "Components: Miniatures:25158",
                "Components: Multi-Use Cards:65191",
                "Components: Standees:66335",
                "Creatures: Demons:68438",
                "Creatures: Dragons:7005",
                "Creatures: Monsters:5615",
                "Crowdfunding: Kickstarter:8374",
                "Digital Implementations: Steam:77349",
                "Digital Implementations: TableTop Simulator Mod (TTS):73596",
                "Game: Gloomhaven:45610",
                "Mechanism: Campaign Games:24281",
                "Mechanism: Legacy:25404",
                "Misc: Forteller Audio Narration:75241",
                "Misc: Made by Panda:78680",
                "Players: Games with Solitaire Rules:5666"
            ],
            "description": "Gloomhaven is a game of Euro-inspired tactical combat in a persistent world of shifting motives. Players will take on the role of a wandering adventurer with their own special set of skills and their own reasons for traveling to this dark corner of the world. Players must work together out of necessity to clear out menacing dungeons and forgotten ruins. In the process, they will enhance their abilities with experience and loot, discover new locations to explore and plunder, and expand an ever-branching story fueled by the decisions they make.This is a game with a persistent and changing world that is ideally played over many game sessions. After a scenario, players will make decisions on what to do, which will determine how the story continues, kind of like a “Choose Your Own Adventure” book. Playing through a scenario is a cooperative affair where players will fight against automated monsters using an innovative card system to determine the order of play and what a player does on their turn.Each turn, a player chooses two cards to play out of their hand. The number on the top card determines their initiative for the round. Each card also has a top and bottom power, and when it is a player’s turn in the initiative order, they determine whether to use the top power of one card and the bottom power of the other, or vice-versa. Players must be careful, though, because over time they will permanently lose cards from their hands. If they take too long to clear a dungeon, they may end up exhausted and be forced to retreat.",
            "rank": 3
        },
        {
            "bgg_id": 342942,
            "name": "Ark Nova",
            "year": 2021,
            "image_url": [
                "https://cf.geekdo-images.com/SoU8p28Sk1s8MSvoM4N8pQ__original/img/g4S18szTdrXCdIwVKzMKrZrYAcM=/0x0/filters:format(jpeg)/pic6293412.jpg",
                "https://cf.geekdo-images.com/SoU8p28Sk1s8MSvoM4N8pQ__thumb/img/4KuHNTWSMPf8vTNDKSRMMI3oOv8=/fit-in/200x150/filters:strip_icc()/pic6293412.jpg"
            ],
            "avg_rating": 8.53756,
            "bayes_rating": 8.33012,
            "min_players": 1,
            "max_players": 4,
            "min_players_rec": 1,
            "max_players_rec": 3,
            "min_players_best": 2,
            "max_players_best": 2,
            "min_time": 90,
            "max_time": 150,
            "min_age": 14,
            "complexity": 3.7444,
            "designer": [
                "Mathias Wigge:138517"
            ],
            "artist": [
                "Steffen Bieker:138547",
                "Loïc Billiau:11462",
                "Dennis Lohausen:12484",
                "Christof Tisch:11797"
            ],
            "publisher": [
                "Feuerland Spiele:22380",
                "Capstone Games:30958",
                "CMON Global Limited:21608",
                "Cranio Creations:10768",
                "Game Harbor:12540",
                "Gém Klub Kft.:8820",
                "Grok Games:42325",
                "IGAMES:17179",
                "Korea Boardgames:8291",
                "Lautapelit.fi:3218",
                "Ludofy Creative:29242",
                "Maldito Games:30677",
                "MINDOK:7992",
                "MIPL:51614",
                "Portal Games:2726",
                "Regatul Jocurilor:44241",
                "Super Meeple:29409",
                "Tower Tactic Games:39774",
                "White Goblin Games:4932",
                "テンデイズゲームズ(TendaysGames):22609"
            ],
            "game_type": [
                "Strategy Game:5497"
            ],
            "category": [
                "Animals:1089",
                "Economic:1021",
                "Environmental:1084"
            ],
            "mechanic": [
                "End Game Bonuses:2875",
                "Hand Management:2040",
                "Hexagon Grid:2026",
                "Income:2902",
                "Increase Value of Unchosen Resources:2914",
                "Open Drafting:2041",
                "Set Collection:2004",
                "Solo / Solitaire Game:2819",
                "Tags:3100",
                "Tile Placement:2002",
                "Variable Player Powers:2015",
                "Variable Set-up:2897"
            ],
            "family": [
                "Components: Hexagonal Tiles:67874",
                "Digital Implementations: Board Game Arena:70360",
                "Digital Implementations: TableTop Simulator Mod (TTS):73596",
                "Game: Ark Nova:76649",
                "Players: Games with Solitaire Rules:5666",
                "Theme: Ecology:68335",
                "Theme: Science:66167",
                "Theme: Zoos",
                "Aquaria",
                "Safari Parks:76846"
            ],
            "description": "In Ark Nova, you will plan and design a modern, scientifically managed zoo. With the ultimate goal of owning the most successful zoological establishment, you will build enclosures, accommodate animals, and support conservation projects all over the world. Specialists and unique buildings will help you in achieving this goal.Each player has a set of five action cards to manage their gameplay, and the power of an action is determined by the slot the card currently occupies. The cards in question are:CARDS: Allows you to gain new zoo cards (animals, sponsors, and conservation project cards).BUILD: Allows you to build standard or special enclosures, kiosks, and pavilions.ANIMALS: Allows you to accommodate animals in your zoo.ASSOCIATION: Allows your association workers to carry out different tasks.SPONSORS: Allows you to play a sponsor card in your zoo or to raise money.255 cards featuring animals, specialists, special enclosures, and conservation projects, each with a special ability, are at the heart of Ark Nova. Use them to increase the appeal and scientific reputation of your zoo and collect conservation points.—description from the publisher",
            "rank": 4
        },
        {
            "bgg_id": 233078,
            "name": "Twilight Imperium: Fourth Edition",
            "year": 2017,
            "image_url": [
                "https://cf.geekdo-images.com/_Ppn5lssO5OaildSE-FgFA__original/img/kVpZ0Maa_LeQGWxOqsYKP3N4KUY=/0x0/filters:format(jpeg)/pic3727516.jpg",
                "https://cf.geekdo-images.com/_Ppn5lssO5OaildSE-FgFA__thumb/img/lfEukJE0JsoZZObaF9K9YnFp62E=/fit-in/200x150/filters:strip_icc()/pic3727516.jpg"
            ],
            "avg_rating": 8.60603,
            "bayes_rating": 8.24129,
            "min_players": 3,
            "max_players": 6,
            "min_players_rec": 3,
            "max_players_rec": 6,
            "min_players_best": 6,
            "max_players_best": 6,
            "min_time": 240,
            "max_time": 480,
            "min_age": 14,
            "complexity": 4.314,
            "designer": [
                "Dane Beltrami:96049",
                "Corey Konieczka:6651",
                "Christian T. Petersen:21"
            ],
            "artist": [
                "Scott Schomburg:11988"
            ],
            "publisher": [
                "Fantasy Flight Games:17",
                "ADC Blackfire Entertainment:23043",
                "Arclight Games:3475",
                "Asterion Press:15889",
                "Edge Entertainment:2973",
                "Galakta:4617",
                "Galápagos Jogos:15605",
                "Hobby World:18852",
                "Playfun Games:34744",
                "sternenschimmermeer:39249"
            ],
            "game_type": [
                "Thematic:5496",
                "Strategy Game:5497"
            ],
            "category": [
                "Civilization:1015",
                "Economic:1021",
                "Exploration:1020",
                "Negotiation:1026",
                "Political:1001",
                "Science Fiction:1016",
                "Space Exploration:1113",
                "Wargame:1019"
            ],
            "mechanic": [
                "Action Drafting:2838",
                "Area-Impulse:2021",
                "Dice Rolling:2072",
                "Follow:2843",
                "Grid Movement:2676",
                "Hexagon Grid:2026",
                "Increase Value of Unchosen Resources:2914",
                "King of the Hill:2886",
                "Modular Board:2011",
                "Race:2876",
                "Tech Trees / Tech Tracks:2849",
                "Trading:2008",
                "Variable Phase Order:2079",
                "Variable Player Powers:2015",
                "Variable Set-up:2897",
                "Voting:2017"
            ],
            "family": [
                "Components: Hexagonal Tiles:67874",
                "Components: Map (Interplanetary or Interstellar scale):64949",
                "Components: Miniatures:25158",
                "Game: Twilight Imperium:29",
                "Mechanism: 4X:12210",
                "Misc: Made by Panda:78680"
            ],
            "description": "Twilight Imperium (Fourth Edition) is a game of galactic conquest in which three to six players take on the role of one of seventeen factions vying for galactic domination through military might, political maneuvering, and economic bargaining. Every faction offers a completely different play experience, from the wormhole-hopping Ghosts of Creuss to the Emirates of Hacan, masters of trade and economics. These seventeen races are offered many paths to victory, but only one may sit upon the throne of Mecatol Rex as the new masters of the galaxy.No two games of Twilight Imperium are ever identical. At the start of each galactic age, the game board is uniquely and strategically constructed using 51 galaxy tiles that feature everything from lush new planets and supernovas to asteroid fields and gravity rifts. Players are dealt a hand of these tiles and take turns creating the galaxy around Mecatol Rex, the capital planet seated in the center of the board. An ion storm may block your race from progressing through the galaxy while a fortuitously placed gravity rift may protect you from your closest foes. The galaxy is yours to both craft and dominate.A round of Twilight Imperium begins with players selecting one of eight strategy cards that both determine player order and give their owner a unique strategic action for that round. These may do anything from providing additional command tokens to allowing a player to control trade throughout the galaxy. After these roles are selected, players take turns moving their fleets from system to system, claiming new planets for their empire, and engaging in warfare and trade with other factions. At the end of a turn, players gather in a grand council to pass new laws and agendas, shaking up the game in unpredictable ways.After every player has passed their turn, players move up the victory track by checking to see whether they have completed any objectives throughout the turn and scoring them. Objectives are determined by setting up ten public objective cards at the start of each game, then gradually revealing them with every round. Every player also chooses between two random secret objectives at the start of the game, providing victory points achievable only by the holder of that objective. These objectives can be anything from researching new technologies to taking your neighbor`s home system. At the end of every turn, a player can claim one public objective and one secret objective. As play continues, more of these objectives are revealed and more secret objectives are dealt out, giving players dynamically changing goals throughout the game. Play continues until a player reaches ten victory points.—description from the publisher",
            "rank": 5
        },
        {
            "bgg_id": 167791,
            "name": "Terraforming Mars",
            "year": 2016,
            "image_url": [
                "https://cf.geekdo-images.com/wg9oOLcsKvDesSUdZQ4rxw__original/img/thIqWDnH9utKuoKVEUqveDixprI=/0x0/filters:format(jpeg)/pic3536616.jpg",
                "https://cf.geekdo-images.com/wg9oOLcsKvDesSUdZQ4rxw__thumb/img/BTxqxgYay5tHJfVoJ2NF5g43_gA=/fit-in/200x150/filters:strip_icc()/pic3536616.jpg"
            ],
            "avg_rating": 8.36502,
            "bayes_rating": 8.21947,
            "min_players": 1,
            "max_players": 5,
            "min_players_rec": 1,
            "max_players_rec": 4,
            "min_players_best": 3,
            "max_players_best": 3,
            "min_time": 120,
            "max_time": 120,
            "min_age": 12,
            "complexity": 3.2588,
            "designer": [
                "Jacob Fryxelius:52075"
            ],
            "artist": [
                "Isaac Fryxelius:62819",
                "Daniel Fryxelius:52076"
            ],
            "publisher": [
                "FryxGames:18575",
                "Arclight Games:3475",
                "Brädspel.se:46980",
                "Fantasmagoria:22560",
                "Ghenos Games:4785",
                "Green Elephant Games:46884",
                "Intrafin Games:5380",
                "Kaissa Chess & Games:6214",
                "Kilogames:32866",
                "Korea Boardgames:8291",
                "Lautapelit.fi:3218",
                "Lavka Games:34801",
                "Lex Games:25203",
                "Maldito Games:30677",
                "MeepleBR:32591",
                "MINDOK:7992",
                "MIPL:51614",
                "MYBG Co.",
                "Ltd.:23756",
                "NeoTroy Games:32395",
                "Rebel Sp. z o.o.:7466",
                "Reflexshop:36563",
                "Schwerkraft-Verlag:24844",
                "Siam Board Games:33998",
                "Stronghold Games:11652",
                "SuperHeated Neurons:48279",
                "Surfin' Meeple China:36763"
            ],
            "game_type": [
                "Strategy Game:5497"
            ],
            "category": [
                "Economic:1021",
                "Environmental:1084",
                "Industry / Manufacturing:1088",
                "Science Fiction:1016",
                "Space Exploration:1113",
                "Territory Building:1086"
            ],
            "mechanic": [
                "Closed Drafting:2984",
                "Contracts:2912",
                "Enclosure:2043",
                "End Game Bonuses:2875",
                "Hand Management:2040",
                "Hexagon Grid:2026",
                "Income:2902",
                "Set Collection:2004",
                "Solo / Solitaire Game:2819",
                "Tags:3100",
                "Take That:2686",
                "Tech Trees / Tech Tracks:2849",
                "Tile Placement:2002",
                "Turn Order: Progressive:2828",
                "Variable Player Powers:2015",
                "Variable Set-up:2897",
                "Victory Points as a Resource:2874"
            ],
            "family": [
                "Category: Dized Tutorial:77906",
                "Components: Map (Global Scale):64952",
                "Components: Multi-Use Cards:65191",
                "Digital Implementations: Google Play:78432",
                "Digital Implementations: Steam:77349",
                "Game: Terraforming Mars:46915",
                "Mechanism: Tableau Building:27646",
                "Occupation: Engineer:81586",
                "Players: Games with Solitaire Rules:5666",
                "Setting: Future Timeline (Fryxgames):49694",
                "Space: Earth's Solar System:19298",
                "Space: Jupiter:43631",
                "Space: Mars:10169",
                "Theme: Science:66167"
            ],
            "description": "In the 2400s, mankind begins to terraform the planet Mars. Giant corporations, sponsored by the World Government on Earth, initiate huge projects to raise the temperature, the oxygen level, and the ocean coverage until the environment is habitable. In Terraforming Mars, you play one of those corporations and work together in the terraforming process, but compete for getting victory points that are awarded not only for your contribution to the terraforming, but also for advancing human infrastructure throughout the solar system, and doing other commendable things.The players acquire unique project cards (from over two hundred different ones) by buying them to their hand. The cards can give you immediate bonuses, as well as increasing your production of different resources. Many cards also have requirements and they become playable when the temperature, oxygen, or ocean coverage increases enough. Buying cards is costly, so there is a balance between buying cards and actually playing them. Standard Projects are always available to complement your cards. Your basic income, as well as your basic score, is based on your Terraform Rating. However, your income is complemented with your production, and you also get VPs from many other sources.Each player keeps track of their production and resources on their player boards, and the game uses six types of resources: MegaCredits, Steel, Titanium, Plants, Energy, and Heat. On the game board, you compete for the best places for your city tiles, ocean tiles, and greenery tiles. You also compete for different Milestones and Awards worth many VPs. Each round is called a generation and consists of the following phases:1) Player order shifts clockwise.2) Research phase: All players buy cards from four privately drawn.3) Action phase: Players take turns doing 1-2 actions from these options: Playing a card, claiming a Milestone, funding an Award, using a Standard project, converting plant into greenery tiles (and raising oxygen), converting heat into a temperature raise, and using the action of a card in play. The turn continues around the table (sometimes several laps) until all players have passed.4) Production phase: Players get resources according to their terraform rating and production parameters.When the three global parameters (temperature, oxygen, ocean) have all reached their goal, the terraforming is complete, and the game ends after that generation. Count your Terraform Rating and other VPs to determine the winning corporation!",
            "rank": 6
        },
        {
            "bgg_id": 316554,
            "name": "Dune: Imperium",
            "year": 2020,
            "image_url": [
                "https://cf.geekdo-images.com/PhjygpWSo-0labGrPBMyyg__original/img/mZzaBAEEJpMlHWWmC0R6Su0OibQ=/0x0/filters:format(jpeg)/pic5666597.jpg",
                "https://cf.geekdo-images.com/PhjygpWSo-0labGrPBMyyg__thumb/img/JGgY-nBmkyB8WRp8vcoBLlNMQ5U=/fit-in/200x150/filters:strip_icc()/pic5666597.jpg"
            ],
            "avg_rating": 8.42831,
            "bayes_rating": 8.21849,
            "min_players": 1,
            "max_players": 4,
            "min_players_rec": 1,
            "max_players_rec": 4,
            "min_players_best": 3,
            "max_players_best": 4,
            "min_time": 60,
            "max_time": 120,
            "min_age": 14,
            "complexity": 3.039,
            "designer": [
                "Paul Dennen:92370"
            ],
            "artist": [
                "Clay Brooks:119957",
                "Brett Nienburg:155730",
                "Raul Ramos:73773",
                "Nate Storm:31001"
            ],
            "publisher": [
                "Dire Wolf:33706",
                "Arclight Games:3475",
                "Galápagos Jogos:15605",
                "Geekach Games:45134",
                "Lavka Games:34801",
                "Lucky Duck Games:33626",
                "Reflexshop:36563",
                "REXhry:21053",
                "sternenschimmermeer:39249",
                "Tabletop KZ:55404",
                "YingDi (旅法师营地):48648"
            ],
            "game_type": [
                "Strategy Game:5497"
            ],
            "category": [
                "Movies / TV / Radio theme:1064",
                "Novel-based:1093",
                "Political:1001",
                "Science Fiction:1016"
            ],
            "mechanic": [
                "Card Play Conflict Resolution:2857",
                "Deck",
                "Bag",
                "and Pool Building:2664",
                "Delayed Purchase:2901",
                "Force Commitment:2864",
                "Increase Value of Unchosen Resources:2914",
                "Multi-Use Cards:3099",
                "Open Drafting:2041",
                "Race:2876",
                "Solo / Solitaire Game:2819",
                "Tags:3100",
                "Take That:2686",
                "Turn Order: Progressive:2828",
                "Variable Player Powers:2015",
                "Worker Placement:2082"
            ],
            "family": [
                "Books: Dune:5838",
                "Digital Implementations: Steam:77349",
                "Game: Dune: Imperium:79009",
                "Misc: LongPack Games:59705",
                "Misc: Watch It Played How To Videos:78198",
                "Players: Games with Solitaire Rules:5666"
            ],
            "description": "Dune: Imperium is a game that uses deck-building to add a hidden-information angle to traditional worker placement. It finds inspiration in elements and characters from the Dune legacy, both the new film from Legendary Pictures and the seminal literary series from Frank Herbert, Brian Herbert, and Kevin J. Anderson.As a leader of one of the Great Houses of the Landsraad, raise your banner and marshal your forces and spies. War is coming, and at the center of the conflict is Arrakis – Dune, the desert planet.You start with a unique leader card, as well as a deck identical to those of your opponents. As you acquire cards and build your deck, your choices will define your strengths and weaknesses. Cards allow you to send your Agents to certain spaces on the game board, so how your deck evolves affects your strategy. You might become more powerful militarily, able to deploy more troops than your opponents. Or you might acquire cards that give you an edge with the four political factions represented in the game: the Emperor, the Spacing Guild, the Bene Gesserit, and the Fremen.Unlike many deck-building games, you don’t play your entire hand in one turn. Instead, you draw a hand of cards at the start of every round and alternate with other players, taking one Agent turn at a time (playing one card to send one of your Agents to the game board). When it’s your turn and you have no more Agents to place, you’ll take a Reveal turn, revealing the rest of your cards, which will provide Persuasion and Swords. Persuasion is used to acquire more cards, and Swords help your troops fight for the current round’s rewards as shown on the revealed Conflict card.Defeat your rivals in combat, shrewdly navigate the political factions, and acquire precious cards. The Spice must flow to lead your House to victory!Some important links: The Official FAQ, the Unofficial FAQ, and an Automa (solo and 2p) Overview",
            "rank": 7
        },
        {
            "bgg_id": 115746,
            "name": "War of the Ring: Second Edition",
            "year": 2011,
            "image_url": [
                "https://cf.geekdo-images.com/ImPgGag98W6gpV1KV812aA__original/img/38jB7fN07DwlrGKYAf-J0vsNdgs=/0x0/filters:format(jpeg)/pic1215633.jpg",
                "https://cf.geekdo-images.com/ImPgGag98W6gpV1KV812aA__thumb/img/X-lBBdG4uO6LT0y1vXxCN4jdR4M=/fit-in/200x150/filters:strip_icc()/pic1215633.jpg"
            ],
            "avg_rating": 8.53664,
            "bayes_rating": 8.18089,
            "min_players": 2,
            "max_players": 4,
            "min_players_rec": 2,
            "max_players_rec": 2,
            "min_players_best": 2,
            "max_players_best": 2,
            "min_time": 150,
            "max_time": 180,
            "min_age": 13,
            "complexity": 4.2119,
            "designer": [
                "Roberto Di Meglio:3247",
                "Marco Maggi:934",
                "Francesco Nepitello:935"
            ],
            "artist": [
                "John Howe:11884",
                "Fabio Maiorana:20670"
            ],
            "publisher": [
                "Ares Games:17917",
                "Angry Lion Games:38809",
                "Devir:2366",
                "GaGa Games:29194",
                "Galakta:4617",
                "Geekach Games:45134",
                "Heidelberger Spieleverlag:264",
                "Nuts! Publishing:15906",
                "Planplay:14346",
                "Red Glove:6123",
                "REXhry:21053",
                "Schwerkraft-Verlag:24844",
                "Sophisticated Games:36",
                "Zhiyanjia:35809"
            ],
            "game_type": [
                "War Game:4664",
                "Thematic:5496"
            ],
            "category": [
                "Fantasy:1010",
                "Fighting:1046",
                "Miniatures:1047",
                "Novel-based:1093",
                "Territory Building:1086",
                "Wargame:1019"
            ],
            "mechanic": [
                "Action Drafting:2838",
                "Area Majority / Influence:2080",
                "Area Movement:2046",
                "Campaign / Battle Card Driven:2018",
                "Card Play Conflict Resolution:2857",
                "Dice Rolling:2072",
                "Events:2850",
                "Hand Management:2040",
                "Movement Points:2947",
                "Team-Based Game:2019",
                "Variable Set-up:2897"
            ],
            "family": [
                "Authors: J.R.R. Tolkien:4263",
                "Category: Dized Tutorial:77906",
                "Components: Map (Continental / National scale):64960",
                "Components: Miniatures:25158",
                "Creatures: Monsters:5615",
                "Series: War of the Ring (Nexus/Ares Games):5723"
            ],
            "description": "In War of the Ring, one player takes control of the Free Peoples (FP), the other player controls Shadow Armies (SA). Initially, the Free People Nations are reluctant to take arms against Sauron, so they must be attacked by Sauron or persuaded by Gandalf or other Companions, before they start to fight properly: this is represented by the Political Track, which shows if a Nation is ready to fight in the War of the Ring or not.The game can be won by a military victory, if Sauron conquers a certain number of Free People cities and strongholds or vice versa. But the true hope of the Free Peoples lies with the quest of the Ringbearer: while the armies clash across Middle Earth, the Fellowship of the Ring is trying to get secretly to Mount Doom to destroy the One Ring. Sauron is not aware of the real intention of his enemies but is looking across Middle Earth for the precious Ring, so that the Fellowship is going to face numerous dangers, represented by the rules of The Hunt for the Ring. But the Companions can spur the Free Peoples to the fight against Sauron, so the Free People player must balance the need to protect the Ringbearer from harm, against the attempt to raise a proper defense against the armies of the Shadow, so that they do not overrun Middle Earth before the Ringbearer completes his quest.Each game turn revolves around the roll of Action Dice: each die corresponds to an action that a player can do during a turn. Depending on the face rolled on each die, different actions are possible (moving armies, characters, recruiting troops, advancing a Political Track).Action Dice can also be used to draw or play Event Cards. Event Cards are played to represent specific events from the story (or events that could possibly have happened) that cannot be portrayed through normal game-play. Each Event Card can also create an unexpected turn in the game, allowing special actions or altering the course of a battle.",
            "rank": 8
        },
        {
            "bgg_id": 291457,
            "name": "Gloomhaven: Jaws of the Lion",
            "year": 2020,
            "image_url": [
                "https://cf.geekdo-images.com/_HhIdavYW-hid20Iq3hhmg__original/img/PBzsLRqNKQKJxGnzpb7o3qLWPQM=/0x0/filters:format(jpeg)/pic5055631.jpg",
                "https://cf.geekdo-images.com/_HhIdavYW-hid20Iq3hhmg__thumb/img/OMkN_E5eyWrkID_cHCnQEbIixGM=/fit-in/200x150/filters:strip_icc()/pic5055631.jpg"
            ],
            "avg_rating": 8.45829,
            "bayes_rating": 8.17844,
            "min_players": 1,
            "max_players": 4,
            "min_players_rec": 1,
            "max_players_rec": 4,
            "min_players_best": 2,
            "max_players_best": 2,
            "min_time": 30,
            "max_time": 120,
            "min_age": 14,
            "complexity": 3.6388,
            "designer": [
                "Isaac Childres:69802"
            ],
            "artist": [
                "Francesca Baerald:79079",
                "David Demaret:66266",
                "Alexandr Elichev:77084"
            ],
            "publisher": [
                "Cephalofair Games:27425",
                "Albi:4304",
                "Albi Polska:46179",
                "Arclight Games:3475",
                "CoolPlay:50696",
                "Feuerland Spiele:22380",
                "Galápagos Jogos:15605",
                "Gém Klub Kft.:8820",
                "Hobby World:18852",
                "Korea Boardgames:8291",
                "Lord of Boards:46500",
                "Meanbook Games:48269",
                "Siam Board Games:33998"
            ],
            "game_type": [
                "Thematic:5496",
                "Strategy Game:5497"
            ],
            "category": [
                "Adventure:1022",
                "Exploration:1020",
                "Fantasy:1010",
                "Fighting:1046",
                "Miniatures:1047"
            ],
            "mechanic": [
                "Action Queue:2689",
                "Action Retrieval:2839",
                "Campaign / Battle Card Driven:2018",
                "Communication Limits:2893",
                "Cooperative Game:2023",
                "Critical Hits and Failures:2854",
                "Deck Construction:3004",
                "Grid Movement:2676",
                "Hand Management:2040",
                "Hexagon Grid:2026",
                "Legacy Game:2824",
                "Line of Sight:2975",
                "Multi-Use Cards:3099",
                "Once-Per-Game Abilities:2846",
                "Scenario / Mission / Campaign Game:2822",
                "Simultaneous Action Selection:2020",
                "Solo / Solitaire Game:2819",
                "Variable Player Powers:2015"
            ],
            "family": [
                "Category: Dungeon Crawler:59218",
                "Components: Book as Board:62475",
                "Components: Miniatures:25158",
                "Components: Multi-Use Cards:65191",
                "Components: Standees:66335",
                "Digital Implementations: Steam:77349",
                "Digital Implementations: TableTop Simulator Mod (TTS):73596",
                "Game: Gloomhaven:45610",
                "Mechanism: Campaign Games:24281",
                "Mechanism: Legacy:25404",
                "Misc: Forteller Audio Narration:75241",
                "Misc: Limited Replayability:72224",
                "Misc: Watch It Played How To Videos:78198",
                "Players: Games with Solitaire Rules:5666"
            ],
            "description": "Gloomhaven: Jaws of the Lion is a standalone game that takes place before the events of Gloomhaven. The game includes four new characters — Valrath Red Guard (tank, crowd control), Inox Hatchet (ranged damage), Human Voidwarden (support, mind-control), and Quatryl Demolitionist (melee damage, obstacle manipulation) — that can also be used in the original Gloomhaven game.The game also includes 16 monster types (including seven new standard monsters and three new bosses) and a new campaign with 25 scenarios that invites the heroes to investigate a case of mysterious disappearances within the city. Is it the work of Vermlings, or is something far more sinister going on?Gloomhaven: Jaws of the Lion is aimed at a more casual audience to get people into the gameplay more quickly. All of the hard-to-organize cardboard map tiles have been removed, and instead players will play on the scenario book itself, which features new artwork unique to each scenario. The last barrier to entry — i.e., learning the game — has also been lowered through a simplified rule set and a five-scenario tutorial that will ease new players into the experience.",
            "rank": 9
        },
        {
            "bgg_id": 187645,
            "name": "Star Wars: Rebellion",
            "year": 2016,
            "image_url": [
                "https://cf.geekdo-images.com/7SrPNGBKg9IIsP4UQpOi8g__original/img/GKueTbkCk2Ramf6ai8mDj-BP6cI=/0x0/filters:format(jpeg)/pic4325841.jpg",
                "https://cf.geekdo-images.com/7SrPNGBKg9IIsP4UQpOi8g__thumb/img/gAxzddRVQiRdjZHYFUZ2xc5Jlbw=/fit-in/200x150/filters:strip_icc()/pic4325841.jpg"
            ],
            "avg_rating": 8.42027,
            "bayes_rating": 8.17172,
            "min_players": 2,
            "max_players": 4,
            "min_players_rec": 2,
            "max_players_rec": 2,
            "min_players_best": 2,
            "max_players_best": 2,
            "min_time": 180,
            "max_time": 240,
            "min_age": 14,
            "complexity": 3.7445,
            "designer": [
                "Corey Konieczka:6651"
            ],
            "artist": [
                "Matt Allsopp:34719",
                "David Ardila:32122",
                "Balaskas:20067",
                "Tiziano Baracchi:19822",
                "Ryan Barger:12438",
                "Jorge Barrero:81542",
                "Cassandre Bolan:86044",
                "Jon Bosco:63040",
                "Matt Bradbury:21426",
                "Adam Burn:46414",
                "Alexandre Dainche:29808",
                "Christina Davis:69244",
                "Anthony Devine:75483",
                "Allen Douglas:17275",
                "Jose Mikhail Elloso:90475",
                "Tony Foti:43532",
                "Michele Frigo:86045",
                "Mariusz Gandzel:18700",
                "Zach Graves:21095",
                "Richard Hanuschek:86222",
                "Andrew Johanson:17704",
                "Jeff Lee Johnson:38000",
                "Jason Juta:14590",
                "Adam Lane:46416",
                "Ignacio Bazán Lazcano:46353",
                "Ralph McQuarrie:13442",
                "Mark Molnar:44813",
                "Jake Murray:41638",
                "Ameen Naksewee:59149",
                "David Auden Nash:49382",
                "Mike Nash:19549",
                "Maciej Rebisz:48661",
                "Alexandru Sabo:49381",
                "Tony Shasteen:14318",
                "Stephen Somers:77085",
                "Matthew Starbuck:41678",
                "Nicholas Stohlman:41679",
                "Angela Sung:49393",
                "Darren Tan:69091",
                "Ryan Valle:68942",
                "Jose Vega:77254",
                "VIKO:90477",
                "Magali Villeneuve:29809",
                "Jacob Walker:12627",
                "Ben Zweifel:49280"
            ],
            "publisher": [
                "Fantasy Flight Games:17",
                "ADC Blackfire Entertainment:23043",
                "Asterion Press:15889",
                "Delta Vision Publishing:6194",
                "Edge Entertainment:2973",
                "Galakta:4617",
                "Galápagos Jogos:15605",
                "Heidelberger Spieleverlag:264",
                "Hobby World:18852",
                "Korea Boardgames:8291"
            ],
            "game_type": [
                "Thematic:5496"
            ],
            "category": [
                "Civil War:1102",
                "Miniatures:1047",
                "Movies / TV / Radio theme:1064",
                "Science Fiction:1016",
                "Space Exploration:1113",
                "Wargame:1019"
            ],
            "mechanic": [
                "Area Majority / Influence:2080",
                "Area Movement:2046",
                "Area-Impulse:2021",
                "Card Play Conflict Resolution:2857",
                "Contracts:2912",
                "Delayed Purchase:2901",
                "Dice Rolling:2072",
                "Die Icon Resolution:2856",
                "Events:2850",
                "Hand Management:2040",
                "Hidden Movement:2967",
                "Income:2902",
                "Once-Per-Game Abilities:2846",
                "Tags:3100",
                "Take That:2686",
                "Team-Based Game:2019",
                "Variable Player Powers:2015",
                "Variable Set-up:2897",
                "Worker Placement",
                "Different Worker Types:2933"
            ],
            "family": [
                "Category: Two Player Fighting Games:61206",
                "Components: Map (Interplanetary or Interstellar scale):64949",
                "Components: Miniatures:25158",
                "Components: Standees:66335",
                "Creatures: Aliens / Extraterrestrials:5679",
                "Movies: Star Wars:5602",
                "Players: Two-Player Only Games:61979",
                "Players: Wargames with Rules Supporting Only Two Players:72016"
            ],
            "description": "Star Wars: Rebellion is a board game of epic conflict between the Galactic Empire and Rebel Alliance for two to four players.Experience the Galactic Civil War like never before. In Rebellion, you control the entire Galactic Empire or the fledgling Rebel Alliance. You must command starships, account for troop movements, and rally systems to your cause. Given the differences between the Empire and Rebel Alliance, each side has different win conditions, and you`ll need to adjust your play style depending on who you represent:As the Imperial player, you can command legions of Stormtroopers, swarms of TIEs, Star Destroyers, and even the Death Star. You rule the galaxy by fear, relying on the power of your massive military to enforce your will. To win the game, you need to snuff out the budding Rebel Alliance by finding its base and obliterating it. Along the way, you can subjugate worlds or even destroy them.As the Rebel player, you can command dozens of troopers, T-47 airspeeders, Corellian corvettes, and fighter squadrons. However, these forces are no match for the Imperial military. In terms of raw strength, you`ll find yourself clearly overmatched from the very outset, so you`ll need to rally the planets to join your cause and execute targeted military strikes to sabotage Imperial build yards and steal valuable intelligence. To win the Galactic Civil War, you`ll need to sway the galaxy`s citizens to your cause. If you survive long enough and strengthen your reputation, you inspire the galaxy to a full-scale revolt, and you win.Featuring more than 150 plastic miniatures and two game boards that account for thirty-two of the Star Wars galaxy`s most notable systems, Rebellion features a scope that is as large and sweeping as any Star Wars game before it.Yet for all its grandiosity, Rebellion remains intensely personal, cinematic, and heroic. As much as your success depends upon the strength of your starships, vehicles, and troops, it depends upon the individual efforts of such notable characters as Leia Organa, Mon Mothma, Grand Moff Tarkin, and Emperor Palpatine. As civil war spreads throughout the galaxy, these leaders are invaluable to your efforts, and the secret missions they attempt will evoke many of the most inspiring moments from the classic trilogy. You might send Luke Skywalker to receive Jedi training on Dagobah or have Darth Vader spring a trap that freezes Han Solo in carbonite!",
            "rank": 10
        },
        {
            "bgg_id": 162886,
            "name": "Spirit Island",
            "year": 2017,
            "image_url": [
                "https://cf.geekdo-images.com/kjCm4ZvPjIZxS-mYgSPy1g__original/img/9uLd9C3XAvInLCLhAoXqKVk56zs=/0x0/filters:format(jpeg)/pic7013651.jpg",
                "https://cf.geekdo-images.com/kjCm4ZvPjIZxS-mYgSPy1g__thumb/img/aUlIih2_R7P8IYKeyNl2heLQbu8=/fit-in/200x150/filters:strip_icc()/pic7013651.jpg"
            ],
            "avg_rating": 8.34832,
            "bayes_rating": 8.1489,
            "min_players": 1,
            "max_players": 4,
            "min_players_rec": 1,
            "max_players_rec": 4,
            "min_players_best": 2,
            "max_players_best": 2,
            "min_time": 90,
            "max_time": 120,
            "min_age": 13,
            "complexity": 4.0645,
            "designer": [
                "R. Eric Reuss:16615"
            ],
            "artist": [
                "Jason Behnke:19565",
                "Loïc Berger:88873",
                "Loïc Billiau:11462",
                "Kat G Birmelin:86024",
                "Cari Corene:97260",
                "Lucas Durham:73895",
                "Rocky Hammer:85924",
                "Sydni Kruger:85925",
                "Nolan Nasser:60615",
                "Jorge Ramos:81097",
                "Adam Rebottaro:50243",
                "Moro Rogers:85926",
                "Graham Sternberg:58547",
                "Shane Tyree:47197",
                "Joshua Wright (I):74441"
            ],
            "publisher": [
                "Greater Than Games",
                "LLC:17543",
                "999 Games:267",
                "Ace Studios:28062",
                "Arrakis Games:36401",
                "BoardM Factory:25074",
                "Engames:39390",
                "Fabled Nexus:50454",
                "Fox in the Box:33710",
                "Gém Klub Kft.:8820",
                "Ghenos Games:4785",
                "Hobby World:18852",
                "Intrafin Games:5380",
                "Lacerta:5812",
                "One Moment Games:30552",
                "Pegasus Spiele:39",
                "REXhry:21053",
                "Siam Board Games:33998"
            ],
            "game_type": [
                "Strategy Game:5497"
            ],
            "category": [
                "Environmental:1084",
                "Fantasy:1010",
                "Fighting:1046",
                "Mythology:1082",
                "Territory Building:1086"
            ],
            "mechanic": [
                "Action Retrieval:2839",
                "Area Majority / Influence:2080",
                "Automatic Resource Growth:2903",
                "Campaign / Battle Card Driven:2018",
                "Cooperative Game:2023",
                "Hand Management:2040",
                "Modular Board:2011",
                "Set Collection:2004",
                "Simultaneous Action Selection:2020",
                "Solo / Solitaire Game:2819",
                "Tags:3100",
                "Variable Player Powers:2015",
                "Variable Set-up:2897"
            ],
            "family": [
                "Components: Control Boards:66553",
                "Components: Map (Continental / National scale):64960",
                "Components: Miniatures:25158",
                "Components: Wooden pieces & boards:68769",
                "Crowdfunding: Kickstarter:8374",
                "Digital Implementations: Google Play:78432",
                "Digital Implementations: Steam:77349",
                "Game: Spirit Island:46174",
                "Islands: Fictional:79690",
                "Misc: LongPack Games:59705",
                "Players: Games with Solitaire Rules:5666",
                "Theme: Colonial:21622"
            ],
            "description": "In the most distant reaches of the world, magic still exists, embodied by spirits of the land, of the sky, and of every natural thing. As the great powers of Europe stretch their colonial empires further and further, they will inevitably lay claim to a place where spirits still hold power - and when they do, the land itself will fight back alongside the islanders who live there.Spirit Island is a complex and thematic cooperative game about defending your island home from colonizing Invaders. Players are different spirits of the land, each with its own unique elemental powers. Every turn, players simultaneously choose which of their power cards to play, paying energy to do so. Using combinations of power cards that match a spirit`s elemental affinities can grant free bonus effects. Faster powers take effect immediately, before the Invaders spread and ravage, but other magics are slower, requiring forethought and planning to use effectively. In the Spirit phase, spirits gain energy, and choose how / whether to Grow: to reclaim used power cards, to seek for new power, or to spread presence into new areas of the island.The Invaders expand across the island map in a semi-predictable fashion. Each turn they explore into some lands (portions of the island); the next turn, they build in those lands, forming settlements and cities. The turn after that, they ravage there, bringing blight to the land and attacking any native islanders present. The islanders fight back against the Invaders when attacked, and lend the spirits some other aid, but may not always do so exactly as you`d hoped. Some Powers work through the islanders, helping them (eg) drive out the Invaders or clean the land of blight.The game escalates as it progresses: spirits spread their presence to new parts of the island and seek out new and more potent powers, while the Invaders step up their colonization efforts. Each turn represents 1-3 years of alternate-history. At game start, winning requires destroying every last settlement and city on the board - but as you frighten the Invaders more and more, victory becomes easier: they`ll run away even if some number of settlements or cities remain. Defeat comes if any spirit is destroyed, if the island is overrun by blight, or if the Invader deck is depleted before achieving victory.The game includes different adversaries to fight against (eg: a Swedish Mining Colony, or a Remote British Colony). Each changes play in different ways, and offers a different path of difficulty boosts to keep the game challenging as you gain skill.",
            "rank": 11
        },
        {
            "bgg_id": 220308,
            "name": "Gaia Project",
            "year": 2017,
            "image_url": [
                "https://cf.geekdo-images.com/hGWFm3hbMlCDsfCsauOQ4g__original/img/tjlflQtUPFiTpLpwk1NCVCS29Ic=/0x0/filters:format(png)/pic5375625.png",
                "https://cf.geekdo-images.com/hGWFm3hbMlCDsfCsauOQ4g__thumb/img/NNG7Ijyx4evp5gcVReis9i0koas=/fit-in/200x150/filters:strip_icc()/pic5375625.png"
            ],
            "avg_rating": 8.38747,
            "bayes_rating": 8.12244,
            "min_players": 1,
            "max_players": 4,
            "min_players_rec": 1,
            "max_players_rec": 4,
            "min_players_best": 3,
            "max_players_best": 4,
            "min_time": 60,
            "max_time": 150,
            "min_age": 12,
            "complexity": 4.3935,
            "designer": [
                "Jens Drögemüller:4300",
                "Helge Ostertag:4407"
            ],
            "artist": [
                "Dennis Lohausen:12484"
            ],
            "publisher": [
                "Feuerland Spiele:22380",
                "Capstone Games:30958",
                "Cranio Creations:10768",
                "DiceTree Games:23205",
                "Edge Entertainment:2973",
                "Game Harbor:12540",
                "Games Factory:35960",
                "Hobby World:18852",
                "Maldito Games:30677",
                "Mandala Jogos:35035",
                "Portal Games:2726",
                "Reflexshop:36563",
                "Rozum:53490",
                "Super Meeple:29409",
                "TLAMA games:41423",
                "White Goblin Games:4932",
                "Z-Man Games:538",
                "テンデイズゲームズ(TendaysGames):22609"
            ],
            "game_type": [
                "Strategy Game:5497"
            ],
            "category": [
                "Civilization:1015",
                "Economic:1021",
                "Miniatures:1047",
                "Science Fiction:1016",
                "Space Exploration:1113",
                "Territory Building:1086"
            ],
            "mechanic": [
                "End Game Bonuses:2875",
                "Hexagon Grid:2026",
                "Income:2902",
                "Modular Board:2011",
                "Network and Route Building:2081",
                "Solo / Solitaire Game:2819",
                "Tags:3100",
                "Tech Trees / Tech Tracks:2849",
                "Turn Order: Pass Order:2830",
                "Variable Player Powers:2015",
                "Variable Set-up:2897",
                "Victory Points as a Resource:2874"
            ],
            "family": [
                "Category: Combinatorial:26432",
                "Components: Control Boards:66553",
                "Components: Map (Interplanetary or Interstellar scale):64949",
                "Digital Implementations: Board Game Arena:70360",
                "Digital Implementations: Steam:77349",
                "Mechanism: Tableau Building:27646",
                "Misc: Made by Panda:78680",
                "Organizations: Automa Factory:72487",
                "Players: Games with Solitaire Rules:5666",
                "Series: Terra Mystica:26098"
            ],
            "description": "Gaia Project is a new game in the line of Terra Mystica. As in the original Terra Mystica, fourteen different factions live on seven different kinds of planets, and each faction is bound to their own home planets, so to develop and grow, they must terraform neighboring planets into their home environments in competition with the other groups. In addition, Gaia planets can be used by all factions for colonization, and Transdimensional planets can be changed into Gaia planets.All factions can improve their skills in six different areas of development — Terraforming, Navigation, Artificial Intelligence, Gaiaforming, Economy, Research — leading to advanced technology and special bonuses. To do all of that, each group has special skills and abilities.The playing area is made of ten sectors, allowing a variable set-up and thus an even bigger replay value than its predecessor Terra Mystica. A two-player game is hosted on seven sectors.—description from the publisher",
            "rank": 12
        },
        {
            "bgg_id": 12333,
            "name": "Twilight Struggle",
            "year": 2005,
            "image_url": [
                "https://cf.geekdo-images.com/pNCiUUphnoeWOYfsWq0kng__original/img/Iae47UtAd_RXVd5tJ3YzbDHOv4E=/0x0/filters:format(jpeg)/pic3530661.jpg",
                "https://cf.geekdo-images.com/pNCiUUphnoeWOYfsWq0kng__thumb/img/p7alNkNy8Avm8UISmhYHCiMz5bE=/fit-in/200x150/filters:strip_icc()/pic3530661.jpg"
            ],
            "avg_rating": 8.24828,
            "bayes_rating": 8.07243,
            "min_players": 2,
            "max_players": 2,
            "min_players_rec": 2,
            "max_players_rec": 2,
            "min_players_best": 2,
            "max_players_best": 2,
            "min_time": 120,
            "max_time": 180,
            "min_age": 13,
            "complexity": 3.6075,
            "designer": [
                "Ananda Gupta:3876",
                "Jason Matthews:3877"
            ],
            "artist": [
                "Viktor Csete:50825",
                "Rodger B. MacGowan:71",
                "Chechu Nieto:34490",
                "Guillaume Ries:13512",
                "Mark Simonitch:140"
            ],
            "publisher": [
                "GMT Games:52",
                "Asterion Press:15889",
                "Bard Centrum Gier:9074",
                "Chrononauts Games:27022",
                "Devir:2366",
                "DiceTree Games:23205",
                "GaGa Games:29194",
                "MINDOK:7992",
                "PHALANX:36186",
                "Pixie Games:30034",
                "Udo Grebe Gamedesign:570",
                "Wargames Club Publishing:8759"
            ],
            "game_type": [
                "War Game:4664",
                "Strategy Game:5497"
            ],
            "category": [
                "Modern Warfare:1069",
                "Political:1001",
                "Wargame:1019"
            ],
            "mechanic": [
                "Action/Event:2840",
                "Advantage Token:2847",
                "Area Majority / Influence:2080",
                "Campaign / Battle Card Driven:2018",
                "Dice Rolling:2072",
                "Events:2850",
                "Hand Management:2040",
                "Simulation:2070",
                "Simultaneous Action Selection:2020",
                "Sudden Death Ending:2884",
                "Tug of War:2888",
                "Variable Set-up:2897"
            ],
            "family": [
                "Components: Map (Global Scale):64952",
                "Components: Multi-Use Cards:65191",
                "Country: Soviet Union:18581",
                "Country: USA:14835",
                "Digital Implementations: Google Play:78432",
                "Digital Implementations: Steam:77349",
                "Game: Twilight Struggle:51380",
                "History: Cold War:46190",
                "Players: Two-Player Only Games:61979",
                "Players: Wargames with Rules Supporting Only Two Players:72016",
                "Region: The World:62881",
                "Series: Twilight Struggle:75947",
                "Theme: Nuclear option:68723"
            ],
            "description": "`Now the trumpet summons us again, not as a call to bear arms, though arms we need; not as a call to battle, though embattled we are – but a call to bear the burden of a long twilight struggle...`– John F. KennedyIn 1945, unlikely allies toppled Hitler`s war machine, while humanity`s most devastating weapons forced the Japanese Empire to its knees in a storm of fire. Where once there stood many great powers, there then stood only two. The world had scant months to sigh its collective relief before a new conflict threatened. Unlike the titanic struggles of the preceding decades, this conflict would be waged not primarily by soldiers and tanks, but by spies and politicians, scientists and intellectuals, artists and traitors. Twilight Struggle is a two-player game simulating the forty-five year dance of intrigue, prestige, and occasional flares of warfare between the Soviet Union and the United States. The entire world is the stage on which these two titans fight to make the world safe for their own ideologies and ways of life. The game begins amidst the ruins of Europe as the two new `superpowers` scramble over the wreckage of the Second World War, and ends in 1989, when only the United States remained standing.Twilight Struggle inherits its fundamental systems from the card-driven classics We the People and Hannibal: Rome vs. Carthage. It is a quick-playing, low-complexity game in that tradition. The game map is a world map of the period, whereon players move units and exert influence in attempts to gain allies and control for their superpower. As with GMT`s other card-driven games, decision-making is a challenge; how to best use one`s cards and units given consistently limited resources?Twilight Struggle`s Event cards add detail and flavor to the game. They cover a vast array of historical happenings, from the Arab-Israeli conflicts of 1948 and 1967, to Vietnam and the U.S. peace movement, to the Cuban Missile Crisis and other such incidents that brought the world to the brink of nuclear annihilation. Subsystems capture the prestige-laden Space Race as well as nuclear tensions, with the possibility of game-ending nuclear war.Components (original edition):228 full colour counters22`x34` full colour map103 event cards2 six-sided dice1 24-page rulebook2 full colour player aid cardsComponents (2009 Deluxe edition and after)260 full colour counters22`x34` mounted map with revised graphics110 event cards2 six-sided dice1 24-page rulebook2 full colour player aid cardsTIME SCALE: approx. 3-5 years per turnMAP SCALE: Point-to-point systemUNIT SCALE: Influence markersNUMBER OF PLAYERS: 2DESIGNER: Ananda Gupta & Jason MatthewsMAP, CARD, & COUNTER ART: Mark SimonitchA deluxe edition, published in 2009 includes the following changes from the basic game:Mounted map with revised graphicsTwo double-thick counter sheets with 260 countersDeck of 110 event cards (increased from 103)Revised rules and player aid cardsRevised at start setup and text change for card #98 Aldrich AmesUpgrade kit for the owners of the previous version includes the following:Mounted Map with revised graphicsNew card decksUpdated Rules & Charts",
            "rank": 13
        },
        {
            "bgg_id": 182028,
            "name": "Through the Ages: A New Story of Civilization",
            "year": 2015,
            "image_url": [
                "https://cf.geekdo-images.com/fVwPntkJKgaEo0rIC0RwpA__original/img/1jawNpljTXwnT4km_2CjGwoUPR8=/0x0/filters:format(jpeg)/pic2663291.jpg",
                "https://cf.geekdo-images.com/fVwPntkJKgaEo0rIC0RwpA__thumb/img/31usGlzlBReEFf60bcgbvDTjwCg=/fit-in/200x150/filters:strip_icc()/pic2663291.jpg"
            ],
            "avg_rating": 8.29724,
            "bayes_rating": 8.06833,
            "min_players": 2,
            "max_players": 4,
            "min_players_rec": 2,
            "max_players_rec": 4,
            "min_players_best": 3,
            "max_players_best": 3,
            "min_time": 120,
            "max_time": 120,
            "min_age": 14,
            "complexity": 4.436,
            "designer": [
                "Vlaada Chvátil:789"
            ],
            "artist": [
                "Filip Murmak:114458",
                "Radim Pech:11938",
                "Jakub Politzer:94497",
                "Milan Vavroň:11961"
            ],
            "publisher": [
                "Czech Games Edition:7345",
                "Cranio Creations:10768",
                "Devir:2366",
                "DiceTree Games:23205",
                "Eagle-Gryphon Games:597",
                "Feelindigo:36981",
                "GaGa Games:29194",
                "Gém Klub Kft.:8820",
                "HaKubia:23382",
                "HeidelBÄR Games:38505",
                "Heidelberger Spieleverlag:264",
                "IELLO:8923",
                "MINDOK:7992",
                "New Games Order",
                "LLC:9881",
                "One Moment Games:30552",
                "Rebel Sp. z o.o.:7466"
            ],
            "game_type": [
                "Strategy Game:5497"
            ],
            "category": [
                "Card Game:1002",
                "Civilization:1015",
                "Economic:1021"
            ],
            "mechanic": [
                "Action Points:2001",
                "Auction: Dutch:2924",
                "Auction/Bidding:2012",
                "Events:2850",
                "Income:2902",
                "Open Drafting:2041",
                "Tags:3100",
                "Take That:2686"
            ],
            "family": [
                "Digital Implementations: Board Game Arena:70360",
                "Digital Implementations: Google Play:78432",
                "Digital Implementations: Steam:77349",
                "Game: Through the Ages:57498",
                "Historical Figures: Various:76973",
                "Mechanism: Tableau Building:27646",
                "Theme: Colonial:21622"
            ],
            "description": "Through the Ages: A New Story of Civilization is the new edition of Through the Ages: A Story of Civilization, with many changes small and large to the game`s cards over its three ages and extensive changes to how military works.Through the Ages is a civilization building game. Each player attempts to build the best civilization through careful resource management, discovering new technologies, electing the right leaders, building wonders and maintaining a strong military. Weakness in any area can be exploited by your opponents. The game takes place throughout the ages beginning in the age of antiquity and ending in the modern age.One of the primary mechanisms in TTA is card drafting. Technologies, wonders, and leaders come into play and become easier to draft the longer they are in play. In order to use a technology you will need enough science to discover it, enough food to create a population to man it and enough resources (ore) to build the building to use it. While balancing the resources needed to advance your technology you also need to build a military. Military is built in the same way as civilian buildings. Players that have a weak military will be preyed upon by other players. There is no map in the game so you cannot lose territory, but players with higher military will steal resources, science, kill leaders, take population or culture. It is very difficult to win with a large military, but it is very easy to lose because of a weak one.Victory is achieved by the player whose nation has the most culture at the end of the modern age.",
            "rank": 14
        },
        {
            "bgg_id": 193738,
            "name": "Great Western Trail",
            "year": 2016,
            "image_url": [
                "https://cf.geekdo-images.com/u1l0gH7sb_vnvDvoO_QHqA__original/img/2zv_XMQoPFWk9Dn0oS4JY1IeFzw=/0x0/filters:format(jpeg)/pic4887376.jpg",
                "https://cf.geekdo-images.com/u1l0gH7sb_vnvDvoO_QHqA__thumb/img/9lxFidyDb8j6D1vobx4e3UwZ-FI=/fit-in/200x150/filters:strip_icc()/pic4887376.jpg"
            ],
            "avg_rating": 8.20638,
            "bayes_rating": 8.04036,
            "min_players": 2,
            "max_players": 4,
            "min_players_rec": 2,
            "max_players_rec": 4,
            "min_players_best": 3,
            "max_players_best": 3,
            "min_time": 75,
            "max_time": 150,
            "min_age": 12,
            "complexity": 3.7008,
            "designer": [
                "Alexander Pfister:11767"
            ],
            "artist": [
                "Andreas Resch:11898"
            ],
            "publisher": [
                "eggertspiele:1015",
                "999 Games:267",
                "Arclight Games:3475",
                "Broadway Toys LTD:9068",
                "Conclave Editora:11043",
                "Delta Vision Publishing:6194",
                "Ediciones MasQueOca:24883",
                "Gigamic:155",
                "Korea Boardgames:8291",
                "Lacerta:5812",
                "Ludicus:30399",
                "MINDOK:7992",
                "Pegasus Spiele:39",
                "Plan B Games:34188",
                "Stronghold Games:11652",
                "uplay.it edizioni:17786",
                "YOKA Games:8147",
                "Zvezda:1466"
            ],
            "game_type": [
                "Strategy Game:5497"
            ],
            "category": [
                "American West:1055",
                "Animals:1089",
                "Economic:1021"
            ],
            "mechanic": [
                "Deck",
                "Bag",
                "and Pool Building:2664",
                "Hand Management:2040",
                "Ownership:2911",
                "Set Collection:2004",
                "Track Movement:2939",
                "Variable Set-up:2897"
            ],
            "family": [
                "Animals: Cattle / Cows:7530",
                "Cities: Kansas City (Missouri",
                "USA):19132",
                "Components: Control Boards:66553",
                "Components: Map (Regional scale):81601",
                "Components: Wooden pieces & boards:68769",
                "Country: USA:14835",
                "Digital Implementations: Board Game Arena:70360",
                "Game: Great Western Trail:54030",
                "Mechanism: Tableau Building:27646",
                "Series: The Great Designers (Stronghold Games):37838",
                "States: Texas:43676"
            ],
            "description": "America in the 19th century: You are a rancher and repeatedly herd your cattle from Texas to Kansas City, where you send them off by train. This earns you money and victory points. Needless to say, each time you arrive in Kansas City, you want to have your most valuable cattle in tow. However, the `Great Western Trail` not only requires that you keep your herd in good shape, but also that you wisely use the various buildings along the trail. Also, it might be a good idea to hire capable staff: cowboys to improve your herd, craftsmen to build your very own buildings, or engineers for the important railroad line.If you cleverly manage your herd and navigate the opportunities and pitfalls of Great Western Trail, you surely will gain the most victory points and win the game.—description from the publisher",
            "rank": 15
        },
        {
            "bgg_id": 84876,
            "name": "The Castles of Burgundy",
            "year": 2011,
            "image_url": [
                "https://cf.geekdo-images.com/5CFwjd8zTcGYVUnkXh04hw__original/img/N8btACZrnEYK1amBNk26VBdcGwc=/0x0/filters:format(jpeg)/pic1176894.jpg",
                "https://cf.geekdo-images.com/5CFwjd8zTcGYVUnkXh04hw__thumb/img/0AG_6zsfYQjqlUHG0-_8lcjp8rc=/fit-in/200x150/filters:strip_icc()/pic1176894.jpg"
            ],
            "avg_rating": 8.13671,
            "bayes_rating": 8.01181,
            "min_players": 2,
            "max_players": 4,
            "min_players_rec": 2,
            "max_players_rec": 4,
            "min_players_best": 2,
            "max_players_best": 2,
            "min_time": 30,
            "max_time": 90,
            "min_age": 12,
            "complexity": 2.9855,
            "designer": [
                "Stefan Feld:4958"
            ],
            "artist": [
                "Julien Delval:11886",
                "Harald Lieske:4959"
            ],
            "publisher": [
                "alea:9",
                "Ravensburger:34",
                "Broadway Toys LTD:9068",
                "Giochi Uniti:5530",
                "Grow Jogos e Brinquedos:858",
                "Hobby World:18852",
                "Maldito Games:30677",
                "Rebel Sp. z o.o.:7466"
            ],
            "game_type": [
                "Strategy Game:5497"
            ],
            "category": [
                "Dice:1017",
                "Medieval:1035",
                "Territory Building:1086"
            ],
            "mechanic": [
                "Dice Rolling:2072",
                "End Game Bonuses:2875",
                "Grid Coverage:2978",
                "Hexagon Grid:2026",
                "Open Drafting:2041",
                "Pattern Building:2048",
                "Tile Placement:2002",
                "Turn Order: Stat-Based:2826",
                "Variable Set-up:2897"
            ],
            "family": [
                "Country: France:11006",
                "Digital Implementations: Board Game Arena:70360",
                "Digital Implementations: Boiteajeux:70361",
                "Digital Implementations: Steam:77349",
                "Digital Implementations: Yucata:70354",
                "Game: The Castles of Burgundy:57501",
                "Mechanism: Tableau Building:27646",
                "Players: Games with expansions that add solo play:65851",
                "Region: Burgundy (France):57997",
                "Series: Alea Big Box:58"
            ],
            "description": "The game is set in the Burgundy region of High Medieval France. Each player takes on the role of an aristocrat, originally controlling a small princedom. While playing they aim to build settlements and powerful castles, practice trade along the river, exploit silver mines, and use the knowledge of travelers.The game is about players taking settlement tiles from the game board and placing them into their princedom which is represented by the player board. Every tile has a function that starts when the tile is placed in the princedom. The princedom itself consists of several regions, each of which demands its own type of settlement tile.The game is played in five phases, each consisting of five rounds. Each phase begins with the game board stocked with settlement tiles and goods tiles. At the beginning of each round all players roll their two dice, and the player who is currently first in turn order rolls a goods placement die. A goods tile is made available on the game board according to the roll of the goods die. During each round players take their turns in the current turn order. During his turn, a player may perform any two of the four possible types of actions: 1) take a settlement tile from the numbered depot on the game board corresponding to one of his dice and place it in the staging area on his player board, 2) take a settlement tile from the staging area of his player board to a space on his player board with a number matching one of his dice in the corresponding region for the type of tile and adjacent to a previously placed settlement tile, 3) deliver goods with a number matching one of his dice, or 4) take worker tokens which allow the player to adjust the roll of his dice. In addition to these actions a player may buy a settlement tile from the central depot on the game board and place it in the staging area on his player board. If an action triggers the award of victory points, those points are immediately recorded. Each settlement tile offers a benefit, additional actions, additional money, advancement on the turn order track, more goods tiles, die roll adjustment or victory points. Bonus victory points are awarded for filling a region with settlement tiles.The game ends after the fifth phase is played to completion. Victory points are awarded for unused money and workers, and undelivered goods. Bonus victory points from certain settlement tiles are awarded at the end of the game.The player with the most victory points wins.The rules include basic and advanced versions.This game is #14 in the Alea big box series.There is a separate BGG entry for the 2019 edition: The Castles of Burgundy. The 2019 edition includes, alongside the base game, eight expansions, seven of which had already been released separately as promotional items and one new to the 2019 release.UPC 4005556812431",
            "rank": 16
        },
        {
            "bgg_id": 169786,
            "name": "Scythe",
            "year": 2016,
            "image_url": [
                "https://cf.geekdo-images.com/7k_nOxpO9OGIjhLq2BUZdA__original/img/HlDb9F365w0tSP8uD1vf1pfniQE=/0x0/filters:format(jpeg)/pic3163924.jpg",
                "https://cf.geekdo-images.com/7k_nOxpO9OGIjhLq2BUZdA__thumb/img/eQ69OEDdjYjfKg6q5Navee87skU=/fit-in/200x150/filters:strip_icc()/pic3163924.jpg"
            ],
            "avg_rating": 8.15208,
            "bayes_rating": 7.9998,
            "min_players": 1,
            "max_players": 5,
            "min_players_rec": 1,
            "max_players_rec": 5,
            "min_players_best": 4,
            "max_players_best": 4,
            "min_time": 90,
            "max_time": 115,
            "min_age": 14,
            "complexity": 3.4429,
            "designer": [
                "Jamey Stegmaier:62640"
            ],
            "artist": [
                "Jakub Rozalski:33148"
            ],
            "publisher": [
                "Stonemaier Games:23202",
                "Albi:4304",
                "Angry Lion Games:38809",
                "Arclight Games:3475",
                "CrowD Games:34522",
                "Delta Vision Publishing:6194",
                "Feuerland Spiele:22380",
                "Fire on Board Jogos:30213",
                "Galápagos Jogos:15605",
                "Geekach Games:45134",
                "Ghenos Games:4785",
                "Korea Boardgames:8291",
                "Ludofy Creative:29242",
                "Maldito Games:30677",
                "Matagot:5400",
                "Morning:28323",
                "PHALANX:36186",
                "Playfun Games:34744",
                "Surfin' Meeple China:36763"
            ],
            "game_type": [
                "Strategy Game:5497"
            ],
            "category": [
                "Economic:1021",
                "Fighting:1046",
                "Science Fiction:1016",
                "Territory Building:1086"
            ],
            "mechanic": [
                "Area Majority / Influence:2080",
                "Card Play Conflict Resolution:2857",
                "Contracts:2912",
                "End Game Bonuses:2875",
                "Force Commitment:2864",
                "Grid Movement:2676",
                "Hexagon Grid:2026",
                "King of the Hill:2886",
                "Movement Points:2947",
                "Solo / Solitaire Game:2819",
                "Take That:2686",
                "Tech Trees / Tech Tracks:2849",
                "Variable Player Powers:2015",
                "Variable Set-up:2897",
                "Victory Points as a Resource:2874",
                "Zone of Control:2974"
            ],
            "family": [
                "Category: Dized Tutorial:77906",
                "Components: Meeples:79006",
                "Components: Control Boards:66553",
                "Components: Map (Continental / National scale):64960",
                "Components: Miniatures:25158",
                "Components: Wooden pieces & boards:68769",
                "Continents: Europe:50153",
                "Crowdfunding: Kickstarter:8374",
                "Decades: The 1920's:73776",
                "Digital Implementations: Google Play:78432",
                "Digital Implementations: Steam:77349",
                "Digital Implementations: TableTop Simulator Mod (TTS):73596",
                "Digital Implementations: Tabletopia:70948",
                "Game: Scythe:38432",
                "Mechanism: Tableau Building:27646",
                "Misc: Made by Panda:78680",
                "Misc: Watch It Played How To Videos:78198",
                "Organizations: Automa Factory:72487",
                "Players: Games with Solitaire Rules:5666",
                "Theme: Alternate History:26464",
                "Theme: Dieselpunk:37870",
                "Theme: Mech Warfare:63004"
            ],
            "description": "It is a time of unrest in 1920s Europa. The ashes from the first great war still darken the snow. The capitalistic city-state known simply as “The Factory”, which fueled the war with heavily armored mechs, has closed its doors, drawing the attention of several nearby countries.Scythe is an engine-building game set in an alternate-history 1920s period. It is a time of farming and war, broken hearts and rusted gears, innovation and valor. In Scythe, each player represents a character from one of five factions of Eastern Europe who are attempting to earn their fortune and claim their faction`s stake in the land around the mysterious Factory. Players conquer territory, enlist new recruits, reap resources, gain villagers, build structures, and activate monstrous mechs.Each player begins the game with different resources (power, coins, combat acumen, and popularity), a different starting location, and a hidden goal. Starting positions are specially calibrated to contribute to each faction’s uniqueness and the asymmetrical nature of the game (each faction always starts in the same place). Scythe uses a streamlined action-selection mechanism (no rounds or phases) to keep gameplay moving at a brisk pace and reduce downtime between turns. While there is plenty of direct conflict for players who seek it, there is no player elimination.Scythe gives players almost complete control over their fate. Other than each player’s individual hidden objective card, the only elements of luck or variability are “encounter” cards that players will draw as they interact with the citizens of newly explored lands. Each encounter card provides the player with several options, allowing them to mitigate the luck of the draw through their selection. Combat is also driven by choices, not luck or randomness. Every part of Scythe has an aspect of engine-building to it. Players can upgrade actions to become more efficient, build structures that improve their position on the map, enlist new recruits to enhance character abilities, activate mechs to deter opponents from invading, and expand their borders to reap greater types and quantities of resources. These engine-building aspects create a sense of momentum and progress throughout the game. The order in which players improve their engine adds to the unique feel of each game, even when playing one faction multiple times.",
            "rank": 17
        },
        {
            "bgg_id": 173346,
            "name": "7 Wonders Duel",
            "year": 2015,
            "image_url": [
                "https://cf.geekdo-images.com/zdagMskTF7wJBPjX74XsRw__original/img/Ju836WNSaW7Mab9Vjq2TJ_FqhWQ=/0x0/filters:format(jpeg)/pic2576399.jpg",
                "https://cf.geekdo-images.com/zdagMskTF7wJBPjX74XsRw__thumb/img/gV1-ckZSIC-dCxxpq1Y7GmPITzQ=/fit-in/200x150/filters:strip_icc()/pic2576399.jpg"
            ],
            "avg_rating": 8.09563,
            "bayes_rating": 7.972,
            "min_players": 2,
            "max_players": 2,
            "min_players_rec": 2,
            "max_players_rec": 2,
            "min_players_best": 2,
            "max_players_best": 2,
            "min_time": 30,
            "max_time": 30,
            "min_age": 10,
            "complexity": 2.2276,
            "designer": [
                "Antoine Bauza:9714",
                "Bruno Cathala:1727"
            ],
            "artist": [
                "Miguel Coimbra:12016"
            ],
            "publisher": [
                "Repos Production:4384",
                "ADC Blackfire Entertainment:23043",
                "Asterion Press:15889",
                "Boardgame Space:34501",
                "CoolPlay:50696",
                "Galápagos Jogos:15605",
                "Gém Klub Kft.:8820",
                "Hobby Japan:1391",
                "KADABRA:9634",
                "Kaissa Chess & Games:6214",
                "Korea Boardgames:8291",
                "Lautapelit.fi:3218",
                "Lifestyle Boardgames Ltd:9325",
                "Ludicus:30399",
                "Ponva d.o.o.:31904",
                "Pridemage Games:36366",
                "Rebel Sp. z o.o.:7466",
                "Siam Board Games:33998",
                "Sombreros Production:32645",
                "Ігромаг:44209"
            ],
            "game_type": [
                "Strategy Game:5497"
            ],
            "category": [
                "Ancient:1050",
                "Card Game:1002",
                "City Building:1029",
                "Civilization:1015",
                "Economic:1021"
            ],
            "mechanic": [
                "End Game Bonuses:2875",
                "Income:2902",
                "Layering:3001",
                "Market:2900",
                "Modular Board:2011",
                "Multi-Use Cards:3099",
                "Once-Per-Game Abilities:2846",
                "Open Drafting:2041",
                "Set Collection:2004",
                "Sudden Death Ending:2884",
                "Tags:3100",
                "Tech Trees / Tech Tracks:2849",
                "Tug of War:2888",
                "Variable Player Powers:2015",
                "Variable Set-up:2897",
                "Victory Points as a Resource:2874"
            ],
            "family": [
                "Ancient: Babylon:27524",
                "Ancient: Egypt:72535",
                "Ancient: Greece:52373",
                "Constructions: Pyramids:77012",
                "Digital Implementations: Board Game Arena:70360",
                "Digital Implementations: Google Play:78432",
                "Game: 7 Wonders:17552",
                "Game: 7 Wonders Duel:39540",
                "Mechanism: Tableau Building:27646",
                "Players: Games with expansions that add solo play:65851",
                "Players: Two-Player Only Games:61979",
                "Versions & Editions: Two-Player Versions of More-Player Games:62276"
            ],
            "description": "In many ways 7 Wonders Duel resembles its parent game 7 Wonders. Over three ages, players acquire cards that provide resources or advance their military or scientific development in order to develop a civilization and complete wonders. What`s different about 7 Wonders Duel is that, as the title suggests, the game is solely for two players.Players do not draft cards simultaneously from decks of cards, but from a display of face-down and face-up cards arranged at the start of a round. A player can take a card only if it`s not covered by any others, so timing comes into play, as it can with bonus moves that allow the player to take a second card immediately. As in the original game, each acquired card can be built, discarded for coins, or used to construct a wonder. Each player also starts with four wonder cards, and the construction of a wonder provides its owner with a special ability. Only seven wonders can be built, though, so one player will end up short.Players can purchase resources at any time from the bank, or they can gain cards during the game that provide them with resources for future building; as they are acquired, the cost for those resources increases for the opponent, representing the owner`s dominance in this area.You can win 7 Wonders Duel in one of three ways: each time you acquire a military card, you advance the military marker toward your opponent`s capital (also giving you a bonus at certain positions). If you reach the opponent`s capital, you win the game immediately. Or if you acquire six of seven different scientific symbols, you achieve scientific dominance and win immediately. If none of these situations occurs, then the player with the most points at the end of the game wins.",
            "rank": 18
        },
        {
            "bgg_id": 246900,
            "name": "Eclipse: Second Dawn for the Galaxy",
            "year": 2020,
            "image_url": [
                "https://cf.geekdo-images.com/Oh3kHw6lweg6ru71Q16h2Q__original/img/yW7d4RNfU1ndISCaPlfGYUyxnRU=/0x0/filters:format(jpeg)/pic5235277.jpg",
                "https://cf.geekdo-images.com/Oh3kHw6lweg6ru71Q16h2Q__thumb/img/e9XZdQe1ZcPpaq4Gy31OoWBB_V0=/fit-in/200x150/filters:strip_icc()/pic5235277.jpg"
            ],
            "avg_rating": 8.46952,
            "bayes_rating": 7.96916,
            "min_players": 2,
            "max_players": 6,
            "min_players_rec": 2,
            "max_players_rec": 6,
            "min_players_best": 4,
            "max_players_best": 6,
            "min_time": 60,
            "max_time": 200,
            "min_age": 14,
            "complexity": 3.6713,
            "designer": [
                "Touko Tahkokallio:13000"
            ],
            "artist": [
                "Noah Adelman:95103",
                "Jere Kasanen:66790",
                "Jukka Rajaniemi:61020",
                "Sampo Sikiö:32143"
            ],
            "publisher": [
                "Lautapelit.fi:3218",
                "Arclight Games:3475",
                "CrowD Games:34522",
                "Maldito Games:30677",
                "Matagot:5400",
                "MeepleBR:32591",
                "Pegasus Spiele:39",
                "sternenschimmermeer:39249",
                "Surfin' Meeple China:36763",
                "TLAMA games:41423",
                "uplay.it edizioni:17786"
            ],
            "game_type": [
                "Strategy Game:5497"
            ],
            "category": [
                "Civilization:1015",
                "Exploration:1020",
                "Science Fiction:1016",
                "Space Exploration:1113",
                "Wargame:1019"
            ],
            "mechanic": [
                "Alliances:2916",
                "Area Majority / Influence:2080",
                "Area-Impulse:2021",
                "Dice Rolling:2072",
                "Grid Movement:2676",
                "Hexagon Grid:2026",
                "Income:2902",
                "Modular Board:2011",
                "Passed Action Token:2835",
                "Tech Trees / Tech Tracks:2849",
                "Variable Player Powers:2015"
            ],
            "family": [
                "Components: Control Boards:66553",
                "Components: Game Trayz Inside:48877",
                "Components: Map (Interplanetary or Interstellar scale):64949",
                "Components: Miniatures:25158",
                "Crowdfunding: Kickstarter:8374",
                "Game: Eclipse (Lautapelit.fi):21459",
                "Mechanism: 4X:12210",
                "Misc: Made by Panda:78680"
            ],
            "description": "A game of Eclipse places you in control of a vast interstellar civilization, competing for success with its rivals. You explore new star systems, research technologies, and build spaceships with which to wage war. There are many potential paths to victory, so you need to plan your strategy according to the strengths and weaknesses of your species, while paying attention to the other civilizations` endeavors.Eclipse: Second Dawn for the Galaxy is a revised and upgraded version of the Eclipse base game that debuted in 2011 that features:New graphic design, while maintaining the acclaimed symbology of the first editionA full line of Ship Pack 1 miniaturesNew miniatures for ancients, GCDS, orbitals, and moreCustom plastic inlaysCustom combat diceFine-tuned gameplay",
            "rank": 19
        },
        {
            "bgg_id": 28720,
            "name": "Brass: Lancashire",
            "year": 2007,
            "image_url": [
                "https://cf.geekdo-images.com/tHVtPzu82mBpeQbbZkV6EA__original/img/3ffdJj5Pz6HQrg09Kh8ecTen-TY=/0x0/filters:format(jpeg)/pic3469216.jpg",
                "https://cf.geekdo-images.com/tHVtPzu82mBpeQbbZkV6EA__thumb/img/AghH1bAEhqzvyRcP3cy5G-rz0So=/fit-in/200x150/filters:strip_icc()/pic3469216.jpg"
            ],
            "avg_rating": 8.19114,
            "bayes_rating": 7.96174,
            "min_players": 2,
            "max_players": 4,
            "min_players_rec": 2,
            "max_players_rec": 4,
            "min_players_best": 4,
            "max_players_best": 4,
            "min_time": 60,
            "max_time": 120,
            "min_age": 14,
            "complexity": 3.8583,
            "designer": [
                "Martin Wallace:6"
            ],
            "artist": [
                "Gavan Brown:32887",
                "Lina Cossette:70571",
                "Peter Dennis:11802",
                "David Forest:70568",
                "Eckhard Freytag:12011",
                "Damien Mammoliti:38179"
            ],
            "publisher": [
                "Roxley:21765",
                "Warfrog Games:7",
                "Arclight Games:3475",
                "BoardM Factory:25074",
                "Conclave Editora:11043",
                "CrowD Games:34522",
                "Dexker Games:31071",
                "Eagle-Gryphon Games:597",
                "FRED Distribution",
                "Inc.:7097",
                "Funforge:8832",
                "Ghenos Games:4785",
                "Giant Roc:42147",
                "Maldito Games:30677",
                "Pegasus Spiele:39",
                "PHALANX:36186",
                "Rebel Sp. z o.o.:7466",
                "Wargames Club Publishing:8759",
                "White Goblin Games:4932"
            ],
            "game_type": [
                "Strategy Game:5497"
            ],
            "category": [
                "Economic:1021",
                "Industry / Manufacturing:1088",
                "Post-Napoleonic:2710",
                "Transportation:1011"
            ],
            "mechanic": [
                "Hand Management:2040",
                "Income:2902",
                "Loans:2904",
                "Market:2900",
                "Network and Route Building:2081",
                "Tech Trees / Tech Tracks:2849",
                "Turn Order: Stat-Based:2826"
            ],
            "family": [
                "Cities: Manchester (England",
                "UK):18587",
                "Components: Map (Continental / National scale):64960",
                "Components: Map (Regional scale):81601",
                "Country: England:14759",
                "Crowdfunding: Spieleschmiede:22135",
                "Digital Implementations: Steam:77349",
                "Game: Brass:57499",
                "History: Industrial Revolution:50152",
                "Theme: Canals:66445"
            ],
            "description": "Brass: Lancashire — first published as Brass — is an economic strategy game that tells the story of competing cotton entrepreneurs in Lancashire during the industrial revolution. You must develop, build, and establish your industries and network so that you can capitalize demand for iron, coal and cotton. The game is played over two halves: the canal phase and the rail phase. To win the game, score the most victory points (VPs), which are counted at the end of each half. VPs are gained from your canals, rails, and established (flipped) industry tiles. Each round, players take turns according to the turn order track, receiving two actions to perform any of the following:Build an industry tileBuild a rail or canalDevelop an industrySell cottonTake a loanAt the end of a player`s turn, they replace the two cards they played with two more from the deck. Turn order is determined by how much money a player spent on the previous turn, from lowest spent first to highest spent. This turn order mechanism opens some strategic options for players going later in the turn order, allowing for the possibility of back-to-back turns.After all the cards have been played the first time (with the deck size being adjusted for the number of players), the canal phase ends and a scoring round commences. After scoring, all canals and all of the lowest level industries are removed for the game, after which new cards are dealt and the rail phase begins. During this phase, players may now occupy more than one location in a city and a double-connection build (though expensive) is possible. At the end of the rail phase, another scoring round takes place, then a winner is crowned.The cards limit where you can build your industries, but any card can be used for the develop, sell cotton or build connections actions. This leads to a strategic timing/storing of cards. Resources are common so that if one player builds a rail line (which requires coal) they have to use the coal from the nearest source, which may be an opponent`s coal mine, which in turn gets that coal mine closer to scoring (i.e., being utilized).Brass: Lancashire, the 2018 edition from Roxley Games, reboots the original Warfrog Games edition of Brass with new artwork and components, as well as a few rules changes:The virtual link rules between Birkenhead have been made optional.The three-player experience has been brought closer to the ideal experience of four players by shortening each half of the game by one round and tuning the deck and distant market tiles slightly to ensure a consistent experience.Two-player rules have been created and are playable without the need for an alternate board.The level 1 cotton mill is now worth 5 VP to make it slightly less terrible.",
            "rank": 20
        }
    ]);
    const [isLoading, setisLoading] = useState(false);
    const [names, setNames] = useState(null);

    const { state } = useNavigation();
    return (
        <>
            <Navigation
                isAuth={props.isAuth}
                onLogOut={props.onLogOut}
            />
            <main className="recommendation">
                <SelectSearch />
                <Filter />

                <div className="boardgames">
                    <h1>RECCOMENDATION</h1>
                    <BoardGameList
                        boardgames={boards}
                        token={props.token}
                        isAuth={props.isAuth}
                    />
                </div>
            </main>
        </>
    );
};

export default Recommendation;
