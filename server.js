const express = require('express')
const app = express()
const PORT = 8001
const cors = require('cors')

app.use(cors())

let nbaTeams = {
    "boston celtics": {
        'city': 'Boston',
        'nbaChampionships': 17,
        'currentNotablePlayers': 'Jayson Tatum, Jaylen Brown, Al Horford, Marcus Smart',
        'coach': 'Ime Udoka',
        'generalManager': 'Brad Stevens',
        'ceo': 'Wyc Grousbeck',

    },
    "brooklyn nets": {
        'city': 'Brooklyn',
        'nbaChampionships': 2,
        'currentNotablePlayers': 'Kevin Durant, Kyrie Irving, Ben Simmons, LaMarcus Aldridge',
        'coach': 'Steve Nash',
        'generalManager': 'Sean Marks',
        'ceo': 'John Abbamondi',
    },
    "new york knicks": {
        'city': 'New York City',
        'nbaChampionships': 2,
        'currentNotablePlayers': 'Julius Randle,Derrick Rose, Kemba Walker',
        'coach': 'Tom Thibodeau',
        'generalManager': 'Scott Perry',
        'ceo': 'Leon Rose',
    },
    "philadelphia 76ers": {
        'city': 'Philadelphia',
        'nbaChampionships': 3,
        'currentNotablePlayers': 'Joel Embiid, James Harden',
        'coach': 'Doc Rivers',
        'generalManager': 'Elton Brand',
        'ceo': 'Tad Brown',
    },
    "toronto raptors": {
        'city': 'Toronto',
        'nbaChampionships': 1,
        'currentNotablePlayers': 'Pascal Siakam, Fred VanVleet',
        'coach': 'Nick Nurse',
        'generalManager': 'Bobby Webster',
        'ceo': 'Masai Ujiri',
    },
    "chicago bulls": {
        'city': 'Chicago',
        'nbaChampionships': 6,
        'currentNotablePlayers': 'DeMar DeRozan, Zach LaVine, Nikola Vucevic',
        'coach': 'Billy Donovan',
        'generalManager': 'Marc Eversley',
        'ceo': 'Michael Reinsdorf',
    },
    "cleveland cavaliers": {
        'city': 'Cleveland',
        'nbaChampionships': 1,
        'currentNotablePlayers': 'Kevin Love, Jarrett Allen, Rajon Rondo',
        'coach': 'J.B. Bickerstaff',
        'generalManager': 'Mike Gansey',
        'ceo': 'Nic Barlage',
    },
    "detroit pistons": {
        'city': 'Detroit',
        'nbaChampionships': 3,
        'currentNotablePlayers': 'Jerami Grant',
        'coach': 'Dwane Casey',
        'generalManager': 'Troy Weaver',
        'ceo': 'Ed Stefanski',
    },
    "indiana pacers": {
        'city': 'Indiana',
        'nbaChampionships': 3,
        'currentNotablePlayers': 'Malcolm Brogdon, Ricky Rubio, Myles Turner, Tyrese Haliburton',
        'coach': 'Rick Carlisle',
        'generalManager': 'Chad Buchanan',
        'ceo': 'Kevin Pritchard',
    },
    "milwaukee bucks": {
        'city': 'Milwaukee',
        'nbaChampionships': 2,
        'currentNotablePlayers': 'Giannis Antetokounmpo, Khris Middleton, Brook Lopez, Jrue Holiday',
        'coach': 'Mike Budenholzer',
        'generalManager': 'Jon Horst',
        'ceo': 'Peter Feigin',
    },
    "atlanta hawks": {
        'city': 'Atlanta',
        'nbaChampionships': 1,
        'currentNotablePlayers': 'Clint Capela, John Collins, Trae Young',
        'coach': 'Nate McMillan',
        'generalManager': 'Travis Schlenk',
        'ceo': 'Travis Schlenk',
    },
    "charlotte hornets": {
        'city': 'Charlotte',
        'nbaChampionships': 0,
        'currentNotablePlayers': 'Gordon Hayward, Miles Bridges, Terry Rozier, LaMelo Ball',
        'coach': 'None',
        'generalManager': 'Mitch Kupchak',
        'ceo': 'Fred Whitfield',
    },
    "miami heat": {
        'city': 'Miami',
        'nbaChampionships': 3,
        'currentNotablePlayers': 'Bam Adebayo, Jimmy Butler, Kyle Lowry',
        'coach': 'Erik Spoelstra',
        'generalManager': 'Andy Elisburg',
        'ceo': 'Pat Riley',
    },
    "orlando magic": {
        'city': 'Orlando',
        'nbaChampionships': 0,
        'currentNotablePlayers': 'None',
        'coach': 'Jamahl Mosley',
        'generalManager': 'John Hammond',
        'ceo': 'Alex Martins',
    },
    "washington wizards": {
        'city': 'Washington',
        'nbaChampionships': 1,
        'currentNotablePlayers': 'Bradley Beal, Kyle Kuzma, Kristaps Porzingis',
        'coach': 'Wes Unseld Jr.',
        'generalManager': 'Tommy Sheppard',
        'ceo': 'None',
    },
    "denver nuggets": {
        'city': 'Denver',
        'nbaChampionships': 0,
        'currentNotablePlayers': 'Nikola Jokic, Jamal Murray',
        'coach': 'Michael Malone',
        'generalManager': 'Calvin Booth',
        'ceo': 'Josh Kroenke',
    },
    "minnesota timberwolves": {
        'city': 'Minnesota',
        'nbaChampionships': 0,
        'currentNotablePlayers': `Karl-Anthony Towns, D'Angelo Russell, Anthony Edwards`,
        'coach': 'Chris Finch',
        'generalManager': 'Tim Connelly',
        'ceo': 'Tim Connelly',
    },
    "oklahoma city thunder": {
        'city': 'Oklahoma City',
        'nbaChampionships': 1,
        'currentNotablePlayers': 'Shai Gilgeous-Alexander',
        'coach': 'Mark Diagneault',
        'generalManager': 'Sam Presti',
        'ceo': 'None',
    },
    "portland trailblazers": {
        'city': 'Portland',
        'nbaChampionships': 1,
        'currentNotablePlayers': 'Damian Lillard',
        'coach': 'Chauncey Billups',
        'generalManager': 'Joe Cronin',
        'ceo': 'None',
    },
    "utah jazz": {
        'city': 'Salt Lake City',
        'nbaChampionships': 0,
        'currentNotablePlayers': 'Rudy Gobert, Donovan Mitchell',
        'coach': 'None',
        'generalManager': 'Justin Zanik',
        'ceo': 'Jim Olsen',
    },
    "golden state warriors": {
        'city': 'San Francisco',
        'nbaChampionships': 6,
        'currentNotablePlayers': 'Stephen Curry, Draymond Green, Klay Thompson, Andrew Wiggins',
        'coach': 'Steve Kerr',
        'generalManager': 'Bob Myers',
        'ceo': 'Rick Welts',
    },
    "la clippers": {
        'city': 'Los Angelos',
        'nbaChampionships': 0,
        'currentNotablePlayers': 'Kawhi Leonard, Paul George',
        'coach': 'Tyronn Lue',
        'generalManager': 'Michael Winger',
        'ceo': 'Lawrence Frank',
    },
    "los angelos lakers": {
        'city': 'Los Angelos',
        'nbaChampionships': 17,
        'currentNotablePlayers': 'LeBron James, Anthony Davis, Carmelo Anthony, Dwight Howard, Russell Westbrook',
        'coach': 'Darvin Ham',
        'generalManager': 'Rob Pelinka',
        'ceo': 'Jeanie Buss',
    },
    "phoenix suns": {
        'city': 'Phoenix',
        'nbaChampionships': 0,
        'currentNotablePlayers': 'Chris Paul, Devin Booker',
        'coach': 'Monty Williams',
        'generalManager': 'James Jones',
        'ceo': 'Jason Rowley',
    },
    "sacramento kings": {
        'city': 'Sacramento',
        'nbaChampionships': 1,
        'currentNotablePlayers': `De'Aaron Fox, Domantas Sabonis`,
        'coach': 'None',
        'generalManager': 'Monte McNair',
        'ceo': 'John Rinehart',
    },
    "dallas mavericks": {
        'city': 'Dallas',
        'nbaChampionships': 1,
        'currentNotablePlayers': 'Luka Doncic',
        'coach': 'Jason Kidd',
        'generalManager': 'Nico Harrison',
        'ceo': 'None',
    },
    "houston rockets": {
        'city': 'Houston',
        'nbaChampionships': 2,
        'currentNotablePlayers': 'John Wall',
        'coach': 'Stephen Silas',
        'generalManager': 'Rafael Stone',
        'ceo': 'Gretchen Sheirr',
    },
    "memphis grizzlies": {
        'city': 'Memphis',
        'nbaChampionships': 0,
        'currentNotablePlayers': 'Steven Adams, Ja Morant',
        'coach': 'Taylor Jenkins',
        'generalManager': 'Zachary Kleiman',
        'ceo': 'Jason Wexler',
    },
    "new orleans pelicans": {
        'city': 'New Orleans',
        'nbaChampionships': 0,
        'currentNotablePlayers': 'Brandon Ingram, Zion Williamson',
        'coach': 'Willie Green',
        'generalManager': 'Trajan Langdon',
        'ceo': 'Dennis Lauscha',
    },
    "san antonio spurs": {
        'city': 'San Antonio',
        'nbaChampionships': 5,
        'currentNotablePlayers': 'None',
        'coach': 'Gregg Popovich',
        'generalManager': 'Brian Wright',
        'ceo': 'Gregg Popovich',
    },
    'unknown': {
        'city': 'unknown',
        'nbaChampionships': 'unknown',
        'currentNotablePlayers': 'unknown',
        'coach': 'unknown',
        'generalManager': 'unknown',
        'ceo': 'unknown',
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:nbaTeamName', (req, res) => {
    const fullTeamName = req.params.nbaTeamName.toLowerCase()
    console.log(req.params.nbaTeamName)
    if (nbaTeams[fullTeamName]) {
        res.json(nbaTeams[fullTeamName])
    } else {
        res.json(nbaTeams['unknown'])
    }
    // res.json(nbaTeams)
})



app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})