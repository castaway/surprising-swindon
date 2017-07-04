import { Entry } from "./entry.model";

export class EntryService {
  entries = [
    {
      "id": 1,
      "name": "Swindon Station",
      "latitude": 51.5656555,
      "longitude": -1.7852779,
      "description": "Brunel's GWR Swindon Station (north building only; south lost to 1970's office-block); splendid panorama from the end of platform.",
      "image": "http://www.geowanderers.com/image_of?card_id=137892",
        "map_link": "https://www.mapquestapi.com/staticmap/v5/map?key=Mr3HXpMeo6xqwshvyGCYr2MJ6iZ7hYZb&center=51.5656555,-1.7852779&type=light&zoom=17&locations=51.5656555,-1.7852779|marker-417505-1||51.564939,-1.7857396|marker-sm-2||51.5651482,-1.7844754|marker-sm-3||51.56576,-1.78403|marker-sm-4||51.56528,-1.78378|marker-sm-5||51.5651482,-1.7844754|marker-sm-6||51.56144,-1.79000|marker-sm-33||51.56189,-1.79043|marker-sm-32||51.56267,-1.79107|marker-sm-7&size=300,300@2x",
        "mapimg": "assets/img/map_001.jpg"
    },
    {
      "id": 2,
      "name": "The Queen's Tap",
      "latitude": 51.564939,
      "longitude": -1.7847396,
      "description": "The Queen's Tap (Georgian-style, 1843); originally hostel for builders of Station, Village and 'Works'.",
        "map_link": "https://www.mapquestapi.com/staticmap/v5/map?key=Mr3HXpMeo6xqwshvyGCYr2MJ6iZ7hYZb&center=51.564939,-1.7847396&type=light&zoom=17&locations=51.5656555,-1.7852779|marker-1||51.564939,-1.7857396|marker-sm-417505-2||51.5651482,-1.7844754|marker-sm-3||51.56576,-1.78403|marker-sm-4||51.56528,-1.78378|marker-sm-5||51.5651482,-1.7844754|marker-sm-6||51.56144,-1.79000|marker-sm-33||51.56189,-1.79043|marker-sm-32||51.56267,-1.79107|marker-sm-7&size=300,300@2x",
        "mapimg": "assets/img/map_002.jpg"
    },
    {
      "id": 3,
      "name": "Great Western Hotel",
      "latitude": 51.5651482,
      "longitude": -1.7844754,
      "description": "Great Western Hotel (Victorian, 1870).",
        "map_link": "https://www.mapquestapi.com/staticmap/v5/map?key=Mr3HXpMeo6xqwshvyGCYr2MJ6iZ7hYZb&center=51.5651482,-1.7844754&type=light&zoom=17&locations=51.5656555,-1.7852779|marker-1||51.564939,-1.7857396|marker-sm-2||51.5651482,-1.7844754|marker-sm-417505-3||51.56576,-1.78403|marker-sm-4||51.56528,-1.78378|marker-sm-5||51.56112,-1.79056|marker-sm-30||51.56144,-1.79000|marker-sm-33||51.56189,-1.79043|marker-sm-32||51.56267,-1.79107|marker-sm-7&size=300,300@2x",
        "mapimg": "assets/img/map_003.jpg"
    },
    {
      "id": 4,
      "name": "Milk Bank",
      "latitude": 51.56576,
      "longitude": -1.78403,
      "description": "The `Milk Bank` - so-called due to milk trains unloading nearby; favourite train-spotting location, as trains slowing for Station made  `nogging` (ticking off as `seen`) easier.",
        "map_link": "https://www.mapquestapi.com/staticmap/v5/map?key=Mr3HXpMeo6xqwshvyGCYr2MJ6iZ7hYZb&center=51.56576,-1.78403&type=light&zoom=17&locations=51.5656555,-1.7852779|marker-1||51.564939,-1.7857396|marker-sm-2||51.5651482,-1.7844754|marker-sm-3||51.56576,-1.78403|marker-sm-417505-4||51.56528,-1.78378|marker-sm-5||51.5651482,-1.7844754|marker-sm-6||51.56144,-1.79000|marker-sm-33||51.56189,-1.79043|marker-sm-32||51.56267,-1.79107|marker-sm-7&size=300,300@2x",
        "mapimg": "assets/img/map_004.jpg"
    },
    {
      "id": 5,
      "name": "Steam Laundry",
      "latitude": 51.56528,
      "longitude": -1.78378,
      "description": "Steam Laundry; originally a Dairy, across from Milk Bank.",
        "map_link": "https://www.mapquestapi.com/staticmap/v5/map?key=Mr3HXpMeo6xqwshvyGCYr2MJ6iZ7hYZb&center=51.56528,-1.78378&type=light&zoom=17&locations=51.5656555,-1.7852779|marker-1||51.564939,-1.7857396|marker-sm-2||51.5651482,-1.7844754|marker-sm-3||51.56576,-1.78403|marker-sm-4||51.56528,-1.78378|marker-sm-417505-5||51.5651482,-1.7844754|marker-sm-6||51.56144,-1.79000|marker-sm-33||51.56189,-1.79043|marker-sm-32||51.56267,-1.79107|marker-sm-7&size=300,300@2x",
        "mapimg": "assets/img/map_005.jpg"
    },
    {
      "id": 6,
      "name": "Great Western Hotel",
      "latitude": 51.5651482,
      "longitude": -1.7844754,
      "description": "Great Western Hotel (Victorian, 1870).",
        "map_link": "https://www.mapquestapi.com/staticmap/v5/map?key=Mr3HXpMeo6xqwshvyGCYr2MJ6iZ7hYZb&center=51.5651482,-1.7844754&type=light&zoom=17&locations=51.5656555,-1.7852779|marker-1||51.564939,-1.7857396|marker-sm-2||51.5651482,-1.7844754|marker-sm-3||51.56576,-1.78403|marker-sm-4||51.56528,-1.78378|marker-sm-5||51.5651482,-1.7844754|marker-sm-417505-6||51.56144,-1.79000|marker-sm-33||51.56189,-1.79043|marker-sm-32||51.56267,-1.79107|marker-sm-7&size=300,300@2x",
        "mapimg": "assets/img/map_006.jpg"
    },
    {
      "id": 7,
      "name": "Carriage Works",
      "latitude": 51.56267,
      "longitude": -1.79107,
      "description": "Carriage Works 1868 (replaced earlier Manager's Villas, re-built elsewhere).",
        "map_link": "https://www.mapquestapi.com/staticmap/v5/map?key=Mr3HXpMeo6xqwshvyGCYr2MJ6iZ7hYZb&center=51.56267,-1.79107&type=light&zoom=17&locations=51.56267,-1.79107|marker-417505-7||51.564939,-1.7857396|marker-sm-2||51.5651482,-1.7844754|marker-sm-3||51.56576,-1.78403|marker-sm-4||51.56528,-1.78378|marker-sm-5||51.5651482,-1.7844754|marker-sm-6||51.56221,-1.79167|marker-sm-10||51.56189,-1.79043|marker-sm-32||51.5618774,-1.7912128|marker-sm-9||51.56186,-1.79262|marker-sm-11&size=300,300@2x",
        "mapimg": "assets/img/map_007.jpg"
    },
    {
      "id": 8,
      "name": "Drawing Offices",
      "latitude": 51.56341,
      "longitude": -1.79262,
      "description": "Former GWR Drawing Offices, former English Heritage, now Historic England.",
        "map_link":"https://www.mapquestapi.com/staticmap/v5/map?key=Mr3HXpMeo6xqwshvyGCYr2MJ6iZ7hYZb&center=51.56341,-1.79262&type=light&zoom=17&locations=51.56341,-1.79262|marker-417505-8||51.564939,-1.7857396|marker-sm-2||51.5651482,-1.7844754|marker-sm-3||51.56576,-1.78403|marker-sm-4||51.56528,-1.78378|marker-sm-5||51.56112,-1.79056|marker-sm-30||51.56144,-1.79000|marker-sm-33||51.56189,-1.79043|marker-sm-32||51.56267,-1.79107|marker-sm--7||51.5618774,-1.7912128|marker-9||51.56221,-1.79167|marker-sm-10||51.56186,-1.79262|marker-sm-11&size=300,300@2x",
        "mapimg": "assets/img/map_008.jpg"
    },
    {
      "id": 9,
      "name": "Mechanic's Institution",
      "latitude": 51.5618774,
      "longitude": -1.7912128,
      "description": "New Swindon Mechanic's Institution 1854, 1892, 1912, 1930 (all extensions reflect growing social life of New Swindon); 27 years derelict; focus of community campaign for restoration.",
      "image": "http://www.geowanderers.com/image_of?card_id=107026",
      "map_link": "https://www.mapquestapi.com/staticmap/v5/map?key=Mr3HXpMeo6xqwshvyGCYr2MJ6iZ7hYZb&center=51.5618774,-1.7912128&type=light&zoom=17&locations=51.5618774,-1.7912128|marker-417505-9||51.56221,-1.79167|marker-sm-10||51.56186,-1.79262|marker-sm-11||51.56157,-1.79103|marker-sm-29||51.56128,-1.79069|marker-sm-31||51.56112,-1.79056|marker-sm-30||51.56144,-1.79000|marker-sm-33||51.56189,-1.79043|marker-sm-32&size=300,300@2x",
      "mapimg": "assets/img/map_009.jpg"
    },
    {
      "id": 10,
      "name": "Tunnel Entrance",
      "latitude": 51.56221,
      "longitude": -1.79167,
      "description": "The `Tunnel Entrance`; one of 5 entrances to the walled Works (referred to as `Inside` by Swindonians), until forced closure in 1986.",
      "image": "http://www.geowanderers.com/image_of?card_id=107026",
      "map_link": "https://www.mapquestapi.com/staticmap/v5/map?key=Mr3HXpMeo6xqwshvyGCYr2MJ6iZ7hYZb&center=51.56221,-1.79167&type=light&zoom=17&locations=51.5618774,-1.7912128|marker-9||51.56221,-1.79167|marker-sm-417505-10||51.56186,-1.79262|marker-sm-11||51.56157,-1.79103|marker-sm-29||51.56128,-1.79069|marker-sm-31||51.56112,-1.79056|marker-sm-30||51.56144,-1.79000|marker-sm-33||51.56189,-1.79043|marker-sm-32||51.56267,-1.79107|marker-sm-7&size=300,300@2x",
      "mapimg": "assets/img/map_010.jpg"
    },
    {
      "id": 11,
      "name": "Sawmills",
      "latitude": 51.56186,
      "longitude": -1.79262,
      "description": "Wall remains of the former 1869 Sawmills; now car park, with view of Mainline and Works.",
      "image": "http://www.geowanderers.com/image_of?card_id=107026",
      "map_link": "https://www.mapquestapi.com/staticmap/v5/map?key=Mr3HXpMeo6xqwshvyGCYr2MJ6iZ7hYZb&center=51.56186,-1.79262&type=light&zoom=17&locations=51.5618774,-1.7912128|marker-9||51.56221,-1.79167|marker-sm-10||51.56186,-1.79262|marker-sm-417505-11||51.56157,-1.79103|marker-sm-29||51.56128,-1.79069|marker-sm-31||51.56112,-1.79056|marker-sm-30||51.56144,-1.79000|marker-sm-33||51.56189,-1.79043|marker-sm-32||51.56128,-1.79373|marker-sm-12||51.56157,-1.79335|marker-sm-13||51.56267,-1.79107|marker-sm-7&size=300,300@2x",
      "mapimg": "assets/img/map_011.jpg"
    },
    {
      "id": 12,
      "name": "GWR Schoolhouse",
      "latitude": 51.56128,
      "longitude": -1.79373,
      "description": "GWR Schoolhouse 1844; originally built near mainline; moved to this location to accomodate Fire Station.",
        "map_link":"https://www.mapquestapi.com/staticmap/v5/map?key=Mr3HXpMeo6xqwshvyGCYr2MJ6iZ7hYZb&center=51.56128,-1.79373&type=light&zoom=17&locations=51.56112,-1.79459|marker-14||51.56128,-1.79373|marker-sm-417505-12||51.56157,-1.79335|marker-sm-13||51.56154,-1.79476|marker-sm-15||51.56528,-1.78378|marker-sm-5||51.5651482,-1.7844754|marker-sm-6||51.56221,-1.79167|marker-sm-10||51.56189,-1.79043|marker-sm-32||51.5618774,-1.7912128|marker-sm-9||51.56186,-1.79262|marker-sm-11&size=300,300@2x",
        "mapimg": "assets/img/map_012.jpg"
    },
    {
      "id": 13,
      "name": "Water Tower",
      "latitude": 51.56157,
      "longitude": -1.79335,
      "description": "Fire Station and Water Tower (for hose pressure) 1872; now site of University Technical College for ages 14 to 19 practical tutition, as originally provided by GWR & Mechanic's Institution.",
        "map_link":"https://www.mapquestapi.com/staticmap/v5/map?key=Mr3HXpMeo6xqwshvyGCYr2MJ6iZ7hYZb&center=51.56157,-1.79335&type=light&zoom=17&locations=51.56112,-1.79459|marker-14||51.56128,-1.79373|marker-sm-12||51.56157,-1.79335|marker-sm-417505-13||51.56154,-1.79476|marker-sm-15||51.56528,-1.78378|marker-sm-5||51.5651482,-1.7844754|marker-sm-6||51.56221,-1.79167|marker-sm-10||51.56189,-1.79043|marker-sm-32||51.5618774,-1.7912128|marker-sm-9||51.56186,-1.79262|marker-sm-11&size=300,300@2x",
        "mapimg": "assets/img/map_013.jpg"
    },
    {
      "id": 14,
      "name": "St. Mark's Church",
      "latitude": 51.56112,
      "longitude": -1.79459,
      "description": "St. Mark's Church 1845 by Gilbert Scott, funded by GWR Director's legacy; Vicarage sold 1999, now children's nursery.",
        "map_link":"https://www.mapquestapi.com/staticmap/v5/map?key=Mr3HXpMeo6xqwshvyGCYr2MJ6iZ7hYZb&center=51.56112,-1.79459&type=light&zoom=17&locations=51.56112,-1.79459|marker-417505-14||51.56128,-1.79373|marker-sm-12||51.56157,-1.79335|marker-sm-13||51.56154,-1.79476|marker-sm-15||51.56528,-1.78378|marker-sm-5||51.5651482,-1.7844754|marker-sm-6||51.56221,-1.79167|marker-sm-10||51.56189,-1.79043|marker-sm-32||51.5618774,-1.7912128|marker-sm-9||51.56186,-1.79262|marker-sm-11&size=300,300@2x",
        "mapimg": "assets/img/map_014.jpg"
    },
    {
      "id": 15,
      "name": "Minard Christian Rea",
      "latitude": 51.56154,
      "longitude": -1.79476,
      "description": "Family Grace (North of Church) of Minard Christian Rea 1857, Works Manager & Founder of Mechanic's Institution.",
        "map_link":"https://www.mapquestapi.com/staticmap/v5/map?key=Mr3HXpMeo6xqwshvyGCYr2MJ6iZ7hYZb&center=51.56154,-1.79476&type=light&zoom=17&locations=51.56112,-1.79459|marker-14||51.56128,-1.79373|marker-sm-12||51.56157,-1.79335|marker-sm-13||51.56154,-1.79476|marker-sm-417505-15||51.56528,-1.78378|marker-sm-5||51.5651482,-1.7844754|marker-sm-6||51.56221,-1.79167|marker-sm-10||51.56189,-1.79043|marker-sm-32||51.5618774,-1.7912128|marker-sm-9||51.56186,-1.79262|marker-sm-11&size=300,300@2x",
        "mapimg": "assets/img/map_015.jpg"
    },
    {
      "id": 16,
      "name": "Rodbourne Road",
      "latitude": 51.56037,
      "longitude": -1.79699,
      "description": "Rodbourne Road, lowered for trams in 1904, hence elevated pavement.",
        "map_link":"https://www.mapquestapi.com/staticmap/v5/map?key=Mr3HXpMeo6xqwshvyGCYr2MJ6iZ7hYZb&center=51.56037,-1.79699&type=light&zoom=17&locations=51.56037,-1.79699|marker-417505-16||51.56101,-1.79780|marker-sm-17||51.56002,-1.79626|marker-sm-21||51.56154,-1.79476|marker-sm-15||51.56528,-1.78378|marker-sm-5||51.5651482,-1.7844754|marker-sm-6||51.56221,-1.79167|marker-sm-10||51.56189,-1.79043|marker-sm-32||51.5618774,-1.7912128|marker-sm-9||51.56186,-1.79262|marker-sm-11&size=300,300@2x",
        "mapimg": "assets/img/map_016.jpg"
    },
    {
      "id": 17,
      "name": "Pattern Store",
      "latitude": 51.56101,
      "longitude": -1.79780,
      "description": "Pattern Store 1892, now Restaurant (wooden `patterns` used for casting metalwork, now stored at Science Museum, Wroughton.",
        "map_link":"https://www.mapquestapi.com/staticmap/v5/map?key=Mr3HXpMeo6xqwshvyGCYr2MJ6iZ7hYZb&center=51.56101,-1.79780&type=light&zoom=17&locations=51.56037,-1.79699|marker-16||51.56101,-1.79780|marker-sm-417505-17||51.56002,-1.79626|marker-sm-21||51.56154,-1.79476|marker-sm-15||51.56528,-1.78378|marker-sm-5||51.5651482,-1.7844754|marker-sm-6||51.56221,-1.79167|marker-sm-10||51.56189,-1.79043|marker-sm-32||51.5618774,-1.7912128|marker-sm-9||51.56186,-1.79262|marker-sm-11&size=300,300@2x",
        "mapimg": "assets/img/map_017.jpg"
    },
    {
      "id": 18,
      "name": "Designer Outlet",
      "latitude": 51.56195,
      "longitude": -1.79734,
      "description": "McArthur Glen Designer Outlet, opened in 1997, in 1874 workshops, closed by rail privatisation of 1986 (from `Shops` to `Shopping` in 100 years).",
        "map_link":"https://www.mapquestapi.com/staticmap/v5/map?key=Mr3HXpMeo6xqwshvyGCYr2MJ6iZ7hYZb&center=51.56195,-1.79734&type=light&zoom=17&locations=51.56195,-1.79734|marker-417505-18||51.56101,-1.79780|marker-sm-17||51.56219,-1.79622|marker-sm-19||51.56259,-1.79468|marker-sm-20||51.56528,-1.78378|marker-sm-5||51.5651482,-1.7844754|marker-sm-6||51.56221,-1.79167|marker-sm-10||51.56189,-1.79043|marker-sm-32||51.5618774,-1.7912128|marker-sm-9||51.56186,-1.79262|marker-sm-11&size=300,300@2x",
        "mapimg": "assets/img/map_018.jpg"
    },
    {
      "id": 19,
      "name": "Hooter House",
      "latitude": 51.56219,
      "longitude": -1.79622,
      "description": "Hooter House (above the cashpoints); steam hooter called workers from afar until March 1986. Replicas installed in March 2016.",
        "map_link":"https://www.mapquestapi.com/staticmap/v5/map?key=Mr3HXpMeo6xqwshvyGCYr2MJ6iZ7hYZb&center=51.56219,-1.79622&type=light&zoom=17&locations=51.56195,-1.79734|marker-18||51.56101,-1.79780|marker-sm-17||51.56219,-1.79622|marker-sm-417505-19||51.56259,-1.79468|marker-sm-20||51.56528,-1.78378|marker-sm-5||51.5651482,-1.7844754|marker-sm-6||51.56221,-1.79167|marker-sm-10||51.56189,-1.79043|marker-sm-32||51.5618774,-1.7912128|marker-sm-9||51.56186,-1.79262|marker-sm-11&size=300,300@2x",
        "mapimg": "assets/img/map_019.jpg"
    },
    {
      "id": 20,
      "name": "STEAM Museum",
      "latitude": 51.56259,
      "longitude": -1.79468,
      "description": "`STEAM` Museum of the Great Western Railway, opened 2000; upstairs was venue for lectures, meetings and social events until Mechanic's Institution opened in 1855.",
        "map_link":"https://www.mapquestapi.com/staticmap/v5/map?key=Mr3HXpMeo6xqwshvyGCYr2MJ6iZ7hYZb&center=51.56259,-1.79468&type=light&zoom=17&locations=51.56195,-1.79734|marker-18||51.56101,-1.79780|marker-sm-17||51.56219,-1.79622|marker-sm-19||51.56259,-1.79468|marker-sm-417505-20||51.56528,-1.78378|marker-sm-5||51.5651482,-1.7844754|marker-sm-6||51.56221,-1.79167|marker-sm-10||51.56189,-1.79043|marker-sm-32||51.5618774,-1.7912128|marker-sm-9||51.56186,-1.79262|marker-sm-11&size=300,300@2x",
        "mapimg": "assets/img/map_020.jpg"
    },
    {
      "id": 21,
      "name": "TA Drill Hall",
      "latitude": 51.56002,
      "longitude": -1.79626,
      "description": "Territorial Army Drill Hall (originally in Emlyn Square until newly built here in 1862l re-built this century using some original materials; site of cake-cutting and dances for annual Mechanic's Institution Children's Fete); museum collection accessible on request.",
        "map_link":"https://www.mapquestapi.com/staticmap/v5/map?key=Mr3HXpMeo6xqwshvyGCYr2MJ6iZ7hYZb&center=51.56002,-1.79626&type=light&zoom=17&locations=51.56037,-1.79699|marker-16||51.56101,-1.79780|marker-sm-17||51.56002,-1.79626|marker-sm-417505-21||51.56154,-1.79476|marker-sm-15||51.56528,-1.78378|marker-sm-5||51.5651482,-1.7844754|marker-sm-6||51.56221,-1.79167|marker-sm-10||51.56189,-1.79043|marker-sm-32||51.5618774,-1.7912128|marker-sm-9||51.56186,-1.79262|marker-sm-11&size=300,300@2x",
        "mapimg": "assets/img/map_021.jpg"
    },
    {
      "id": 22,
      "name": "GWR Park",
      "latitude": 51.55970,
      "longitude": -1.79451,
        "description": "GWR Park; earliest recreation field, provided by GWR; Cricket Ground with Pavilion until 1897; then walled for promenade, gardens and bandstand with funds raised from `Penny Readings` at Mechanic's Institution; venue for Institution's annual Children's Fete from 1866; `Holidays at Home` and Defence used during the Second World War; railings only recently replace; revent community efforts to establish amenities here.",
        "map_link":"https://www.mapquestapi.com/staticmap/v5/map?key=Mr3HXpMeo6xqwshvyGCYr2MJ6iZ7hYZb&center=51.55970,-1.79451&type=light&zoom=17&locations=51.55970,-1.79451|marker-417505-22||51.55829,-1.79489|marker-sm-24||51.55816,-1.79236|marker-sm-26||51.55848,-1.79455|marker-sm-25||51.56528,-1.78378|marker-sm-5||51.5651482,-1.7844754|marker-sm-6||51.56221,-1.79167|marker-sm-10||51.56189,-1.79043|marker-sm-32||51.5618774,-1.7912128|marker-sm-9||51.56186,-1.79262|marker-sm-11||51.56013,-1.79245|marker-27&size=300,300@2x",
        "mapimg": "assets/img/map_022.jpg"
    },
    {
      "id": 23,
      "name": "Ship Hotel",
      "latitude": 51.55824,
      "longitude": -1.79562,
        "description": "The Ship Hotel (prominent of many pubs lining railworker's routes home around the town); planned conversion to flats.",
        "map_link":"https://www.mapquestapi.com/staticmap/v5/map?key=Mr3HXpMeo6xqwshvyGCYr2MJ6iZ7hYZb&center=51.55824,-1.79562&type=light&zoom=17&locations=51.55824,-1.79562|marker-417505-23||51.55829,-1.79489|marker-sm-24||51.55816,-1.79236|marker-sm-26||51.55848,-1.79455|marker-sm-25||51.56528,-1.78378|marker-sm-5||51.5651482,-1.7844754|marker-sm-6||51.56221,-1.79167|marker-sm-10||51.56189,-1.79043|marker-sm-32||51.5618774,-1.7912128|marker-sm-9||51.56186,-1.79262|marker-sm-11&size=300,300@2x",
        "mapimg": "assets/img/map_023.jpg"
    },
    {
      "id": 24,
      "name": "Greyhound",
      "latitude": 51.55829,
      "longitude": -1.79489,
      "description": "The Greyhound Public House.",
        "map_link":"https://www.mapquestapi.com/staticmap/v5/map?key=Mr3HXpMeo6xqwshvyGCYr2MJ6iZ7hYZb&center=51.55829,-1.79489&type=light&zoom=17&locations=51.55824,-1.79562|marker-23||51.55829,-1.79489|marker-sm-417505-24||51.55816,-1.79236|marker-sm-26||51.55848,-1.79455|marker-sm-25||51.56528,-1.78378|marker-sm-5||51.5651482,-1.7844754|marker-sm-6||51.56221,-1.79167|marker-sm-10||51.56189,-1.79043|marker-sm-32||51.5618774,-1.7912128|marker-sm-9||51.56186,-1.79262|marker-sm-11&size=300,300@2x",
        "mapimg": "assets/img/map_024.jpg"
    },
    {
      "id": 25,
      "name": "The Grapes",
      "latitude": 51.55848,
      "longitude": -1.79455,
      "description": "The Grapes (local tale tells of WG Grace breaking a window here in 1890's, with a ball batted from the Cricket Ground, as a left-handed batsman); recently converted to flats.",
        "map_link":"https://www.mapquestapi.com/staticmap/v5/map?key=Mr3HXpMeo6xqwshvyGCYr2MJ6iZ7hYZb&center=51.55848,-1.79455&type=light&zoom=17&locations=51.55824,-1.79562|marker-23||51.55829,-1.79489|marker-sm-24||51.55816,-1.79236|marker-sm-26||51.55848,-1.79455|marker-sm-417505-25||51.56528,-1.78378|marker-sm-5||51.5651482,-1.7844754|marker-sm-6||51.56221,-1.79167|marker-sm-10||51.56189,-1.79043|marker-sm-32||51.5618774,-1.7912128|marker-sm-9||51.56186,-1.79262|marker-sm-11&size=300,300@2x",
        "mapimg": "assets/img/map_025.jpg"
    },
    {
      "id": 26,
      "name": "Cambria Bridge",
      "latitude": 51.55816,
      "longitude": -1.79236,
      "description": "Cambria Bridge Houses and Chapel 1864-66; built for Rolling Mill steelworkers recruited from South Wales.",
        "map_link":"https://www.mapquestapi.com/staticmap/v5/map?key=Mr3HXpMeo6xqwshvyGCYr2MJ6iZ7hYZb&center=51.55816,-1.79236&type=light&zoom=17&locations=51.55824,-1.79562|marker-23||51.55829,-1.79489|marker-sm-24||51.55816,-1.79236|marker-sm-417505-26||51.55848,-1.79455|marker-sm-25||51.56528,-1.78378|marker-sm-5||51.5651482,-1.7844754|marker-sm-6||51.56221,-1.79167|marker-sm-10||51.56189,-1.79043|marker-sm-32||51.5618774,-1.7912128|marker-sm-9||51.56186,-1.79262|marker-sm-11&size=300,300@2x",
         "mapimg": "assets/img/map_026.jpg"
    },
    {
      "id": 27,
      "name": "Park House",
      "latitude": 51.56013,
      "longitude": -1.79245,
        "description": "Park House built 1876 for Surgery and Doctor's Residence by workers Medical Fund Society.",
        "map_link":"https://www.mapquestapi.com/staticmap/v5/map?key=Mr3HXpMeo6xqwshvyGCYr2MJ6iZ7hYZb&center=51.56013,-1.79245&type=light&zoom=17&locations=51.56013,-1.79245|marker-417505-27||51.55829,-1.79489|marker-sm-24||51.55816,-1.79236|marker-sm-26||51.55848,-1.79455|marker-sm-25||51.56528,-1.78378|marker-sm-5||51.5651482,-1.7844754|marker-sm-6||51.56221,-1.79167|marker-sm-10||51.56189,-1.79043|marker-sm-32||51.5618774,-1.7912128|marker-sm-9||51.55970,-1.79451|marker-22||51.56186,-1.79262|marker-sm-11&size=300,300@2x",
         "mapimg": "assets/img/map_027.jpg"
    },
    {
      "id": 28,
      "name": "Sculpture and Clock",
      "latitude": 51.56088,
      "longitude": -1.79094,
        "description": "Proposed site of `Dinner Hour` sculpture and Memorial Clock.",
        "map_link":"https://www.mapquestapi.com/staticmap/v5/map?key=Mr3HXpMeo6xqwshvyGCYr2MJ6iZ7hYZb&center=51.56088,-1.79094&type=light&zoom=17&locations=51.56088,-1.79094|marker-417505-28||51.56013,-1.79245|marker-27||51.55829,-1.79489|marker-sm-24||51.55816,-1.79236|marker-sm-26||51.56157,-1.79103|marker-sm-29||51.56128,-1.79069|marker-sm-31||51.56112,-1.79056|marker-sm-30||51.55848,-1.79455|marker-sm-25||51.56528,-1.78378|marker-sm-5||51.5651482,-1.7844754|marker-sm-6||51.56144,-1.79000|marker-sm-33||51.56189,-1.79043|marker-sm-32||51.5618774,-1.7912128|marker-sm-9||51.56042,-1.79103|marker-sm-34&size=300,300@2x",
         "mapimg": "assets/img/map_028.jpg"
    },
    {
      "id": 29,
      "name": "Extension of Mechanic's Institution",
      "latitude": 51.56157,
      "longitude": -1.79103,
      "description": "1892 Extension of Mechanic's Institution, by Brightwen Binyon on site of covered market; fly tower built after 1930 stage fire, with huge wings to satisfy demand for theatrical performances with large casts and scenery, including an elephant once!",
      "image": "http://www.geowanderers.com/image_of?card_id=107026",
      "map_link": "https://www.mapquestapi.com/staticmap/v5/map?key=Mr3HXpMeo6xqwshvyGCYr2MJ6iZ7hYZb&center=51.56157,-1.79103&type=light&zoom=17&locations=51.5618774,-1.7912128|marker-9||51.56221,-1.79167|marker-sm-10||51.56186,-1.79262|marker-sm-11||51.56157,-1.79103|marker-sm-417505-29||51.56128,-1.79069|marker-sm-31||51.56112,-1.79056|marker-sm-30||51.56144,-1.79000|marker-sm-33||51.56189,-1.79043|marker-sm-32||51.56267,-1.79107|marker-sm-7&size=300,300@2x",
      "mapimg": "assets/img/map_029.jpg"    
    },
    {
      "id": 30,
      "name": "Medical Fund Society Hospital",
      "latitude": 51.56112,
      "longitude": -1.79056,
      "description": "Medical Fund Society Hospital (A&E) opened 1872 in former Armoury of 1862; handed to NHS in 1948; restored 1975 as Central Community Centre.",
      "image": "http://www.geowanderers.com/image_of?card_id=107026",
        "map_link": "https://www.mapquestapi.com/staticmap/v5/map?key=Mr3HXpMeo6xqwshvyGCYr2MJ6iZ7hYZb&center=51.56112,-1.79056&type=light&zoom=17&locations=51.5618774,-1.7912128|marker-9||51.56221,-1.79167|marker-sm-10||51.56186,-1.79262|marker-sm-11||51.56157,-1.79103|marker-sm-29||51.56128,-1.79069|marker-sm-31||51.56112,-1.79056|marker-sm-417505-30||51.56144,-1.79000|marker-sm-33||51.56189,-1.79043|marker-sm-32||51.56267,-1.79107|marker-sm-7&size=300,300@2x",
        "mapimg": "assets/img/map_030.jpg"
    },
    {
      "id": 31,
      "name": "Emlyn Square Redevelopment",
      "latitude": 51.56128,
      "longitude": -1.79069,
      "description": "Redevelopment of Emlyn Square proposed by New Mechanic's Institution Preservation Trust (community owned), seeking to restore historic character and modern uses to Institution premises and surroundings; linking the town centre and Works area to benefit of Swindon community and visitors.",
      "image": "http://www.geowanderers.com/image_of?card_id=107026",
      "map_link": "https://www.mapquestapi.com/staticmap/v5/map?key=Mr3HXpMeo6xqwshvyGCYr2MJ6iZ7hYZb&center=51.56128,-1.79069&type=light&zoom=17&locations=51.5618774,-1.7912128|marker-9||51.56221,-1.79167|marker-sm-10||51.56186,-1.79262|marker-sm-11||51.56157,-1.79103|marker-sm-29||51.56128,-1.79069|marker-sm-417505-31||51.56112,-1.79056|marker-sm-30||51.56144,-1.79000|marker-sm-33||51.56189,-1.79043|marker-sm-32||51.56267,-1.79107|marker-sm-7&size=300,300@2x",
      "mapimg": "assets/img/map_031.jpg"
    },
    {
      "id": 32,
      "name": "Emlyn Square Corner Blocks",
      "latitude": 51.56189,
      "longitude": -1.79043,
      "description": "No. 4 Emlyn Square formerly used for `Mutual Improvement` classes by Engine Drivers, who trained their Firemen to move up the ranks; No. 2 was once a Temperance Coffee House (among 3 pubs); all corner blocks had ground floor shops or pubs prior to renovation in 1970s.",
      "image": "http://www.geowanderers.com/image_of?card_id=107026",
      "map_link": "https://www.mapquestapi.com/staticmap/v5/map?key=Mr3HXpMeo6xqwshvyGCYr2MJ6iZ7hYZb&center=51.56189,-1.79043&type=light&zoom=17&locations=51.5618774,-1.7912128|marker-9||51.56221,-1.79167|marker-sm-10||51.56186,-1.79262|marker-sm-11||51.56157,-1.79103|marker-sm-29||51.56128,-1.79069|marker-sm-31||51.56112,-1.79056|marker-sm-30||51.56144,-1.79000|marker-sm-33||51.56189,-1.79043|marker-sm-417505-32||51.56267,-1.79107|marker-sm-7&size=300,300@2x",
      "mapimg": "assets/img/map_032.jpg"
    },
    {
      "id": 33,
      "name": "Barracks",
      "latitude": 51.56144,
      "longitude": -1.79000,
      "description": "1855 `Barracks` for single working men; substantial conversion in 1869 for Weslyan Methodists; Railway Museum from 1962; now Council-renovated facility.",
      "image": "http://www.geowanderers.com/image_of?card_id=107026",
      "map_link": "https://www.mapquestapi.com/staticmap/v5/map?key=Mr3HXpMeo6xqwshvyGCYr2MJ6iZ7hYZb&center=51.56144,-1.79000&type=light&zoom=17&locations=51.5618774,-1.7912128|marker-9||51.56221,-1.79167|marker-sm-10||51.56186,-1.79262|marker-sm-11||51.56157,-1.79103|marker-sm-29||51.56128,-1.79069|marker-sm-31||51.56112,-1.79056|marker-sm-30||51.56144,-1.79000|marker-sm-417505-33||51.56189,-1.79043|marker-sm-32||51.56267,-1.79107|marker-sm-7&size=300,300@2x",
      "mapimg": "assets/img/map_033.jpg"    
    },
    {
      "id": 34,
      "name": "Health Hydro",
      "latitude": 51.56042,
      "longitude": -1.79103,
      "description": "Workforce-owned and managed Medical Fund Society's Dispensery 1892 and range of Baths 1904 (swimming, bathing, Turkish, Russian); plaque high up on corner, under empty lantern plinth; former crossing point for thousands of men, 4 times daily; artwork proposed here as memorial; potential for restored pedestrian route via Tunnel Entrance between `Works` and town centre shopping.",
        "map_link":"https://www.mapquestapi.com/staticmap/v5/map?key=Mr3HXpMeo6xqwshvyGCYr2MJ6iZ7hYZb&center=51.56042,-1.79103&type=light&zoom=17&locations=51.56088,-1.79094|marker-28||51.5618774,-1.7912128|marker-9||51.55829,-1.79489|marker-sm-24||51.55816,-1.79236|marker-sm-26||51.56157,-1.79103|marker-sm-29||51.56128,-1.79069|marker-sm-31||51.56112,-1.79056|marker-sm-30||51.55848,-1.79455|marker-sm-25||51.56528,-1.78378|marker-sm-5||51.5651482,-1.7844754|marker-sm-6||51.56144,-1.79000|marker-sm-33||51.56189,-1.79043|marker-sm-32||51.5618774,-1.7912128|marker-sm-9||51.56013,-1.79245|marker-27||51.56042,-1.79103|marker-sm-417505-34&size=300,300@2x",
         "mapimg": "assets/img/map_034.jpg"
    },
    {
      "id": 35,
      "name": "Convent",
      "latitude": 51.55973,
      "longitude": -1.78961,
      "description": "Convent 1895 for nearby St. Mark's School teachers; then Maternity Home; now offices.",
        "map_link":"https://www.mapquestapi.com/staticmap/v5/map?key=Mr3HXpMeo6xqwshvyGCYr2MJ6iZ7hYZb&center=51.55973,-1.78961&type=light&zoom=17&locations=51.55973,-1.78961|marker-417505-35||51.55933,-1.79197|marker-36||51.55866,-1.79197|marker-sm-37||51.55949,-1.78940|marker-sm-38||51.55946,-1.78880|marker-sm-39||51.55960,-1.78824|marker-sm-40||51.56112,-1.79056|marker-sm-30||51.55848,-1.79455|marker-sm-25||51.56528,-1.78378|marker-sm-5||51.5651482,-1.7844754|marker-sm-6||51.56144,-1.79000|marker-sm-33||51.56189,-1.79043|marker-sm-32||51.5618774,-1.7912128|marker-sm-9||51.56013,-1.79245|marker-27||51.56042,-1.79103|marker-sm-34&size=300,300@2x",
        "mapimg": "assets/img/map_035.jpg"
    },
    {
      "id": 36,
      "name": "School and Hall",
      "latitude": 51.55933,
      "longitude": -1.79197,
      "description": "Former St. Mark's School and Hall; British Restaurant during the Second World War.",
        "map_link":"https://www.mapquestapi.com/staticmap/v5/map?key=Mr3HXpMeo6xqwshvyGCYr2MJ6iZ7hYZb&center=51.55933,-1.79197&type=light&zoom=17&locations=51.55973,-1.78961|marker-35||51.55933,-1.79197|marker-417505-36||51.55866,-1.79197|marker-sm-37||51.55949,-1.78940|marker-sm-38||51.55946,-1.78880|marker-sm-39||51.55960,-1.78824|marker-sm-40||51.56112,-1.79056|marker-sm-30||51.55848,-1.79455|marker-sm-25||51.56528,-1.78378|marker-sm-5||51.5651482,-1.7844754|marker-sm-6||51.56144,-1.79000|marker-sm-33||51.56189,-1.79043|marker-sm-32||51.5618774,-1.7912128|marker-sm-9||51.56013,-1.79245|marker-27||51.56042,-1.79103|marker-sm-34&size=300,300@2x",
        "mapimg": "assets/img/map_036.jpg"
    },
    {
      "id": 37,
      "name": "School Playground",
      "latitude": 51.55866,
      "longitude": -1.79197,
      "description": "Former school playground, beside former Wilts & Berks Canal; hedgerow trees along canal path.",
        "map_link":"https://www.mapquestapi.com/staticmap/v5/map?key=Mr3HXpMeo6xqwshvyGCYr2MJ6iZ7hYZb&center=51.55866,-1.79197&type=light&zoom=17&locations=51.55973,-1.78961|marker-35||51.55933,-1.79197|marker-36||51.55866,-1.79197|marker-417505-sm-37||51.55949,-1.78940|marker-sm-38||51.55946,-1.78880|marker-sm-39||51.55960,-1.78824|marker-sm-40||51.56112,-1.79056|marker-sm-30||51.55848,-1.79455|marker-sm-25||51.56528,-1.78378|marker-sm-5||51.5651482,-1.7844754|marker-sm-6||51.56144,-1.79000|marker-sm-33||51.56189,-1.79043|marker-sm-32||51.5618774,-1.7912128|marker-sm-9||51.56013,-1.79245|marker-27||51.56042,-1.79103|marker-sm-34&size=300,300@2x",
        "mapimg": "assets/img/map_037.jpg"
    },
    {
      "id": 38,
      "name": "Milton Road Club",
      "latitude": 51.55949,
      "longitude": -1.78940,
      "description": "Milton Road Club (CIU - Clubs and Intitutes Union).",
        "map_link":"https://www.mapquestapi.com/staticmap/v5/map?key=Mr3HXpMeo6xqwshvyGCYr2MJ6iZ7hYZb&center=51.55949,-1.78940&type=light&zoom=17&locations=51.55973,-1.78961|marker-35||51.55933,-1.79197|marker-36||51.55866,-1.79197|marker-sm-37||51.55949,-1.78940|marker-sm-417505-38||51.55946,-1.78880|marker-sm-39||51.55960,-1.78824|marker-sm-40||51.56112,-1.79056|marker-sm-30||51.55848,-1.79455|marker-sm-25||51.56528,-1.78378|marker-sm-5||51.5651482,-1.7844754|marker-sm-6||51.56144,-1.79000|marker-sm-33||51.56189,-1.79043|marker-sm-32||51.5618774,-1.7912128|marker-sm-9||51.56013,-1.79245|marker-27||51.56042,-1.79103|marker-sm-34&size=300,300@2x",
        "mapimg": "assets/img/map_038.jpg"
    },
    {
      "id": 39,
      "name": "Canal Bridge",
      "latitude": 51.55946,
      "longitude": -1.78880,
      "description": "Bridge over former Wilts & Berks Canal, 1810; Swindon 175th anniversary community mural.",
        "map_link":"https://www.mapquestapi.com/staticmap/v5/map?key=Mr3HXpMeo6xqwshvyGCYr2MJ6iZ7hYZb&center=51.55946,-1.78880&type=light&zoom=17&locations=51.55973,-1.78961|marker-35||51.55933,-1.79197|marker-36||51.55866,-1.79197|marker-sm-37||51.55949,-1.78940|marker-sm-38||51.55946,-1.78880|marker-sm-417505-39||51.55960,-1.78824|marker-sm-40||51.56112,-1.79056|marker-sm-30||51.55848,-1.79455|marker-sm-25||51.56528,-1.78378|marker-sm-5||51.5651482,-1.7844754|marker-sm-6||51.56144,-1.79000|marker-sm-33||51.56189,-1.79043|marker-sm-32||51.5618774,-1.7912128|marker-sm-9||51.56013,-1.79245|marker-27||51.56042,-1.79103|marker-sm-34&size=300,300@2x",
        "mapimg": "assets/img/map_039.jpg"
    },
    {
      "id": 40,
      "name": "Central Club",
      "latitude": 51.55960,
      "longitude": -1.78824,
      "description": "Huge `Central Club and Intitute` replaced by office block.",
        "map_link":"https://www.mapquestapi.com/staticmap/v5/map?key=Mr3HXpMeo6xqwshvyGCYr2MJ6iZ7hYZb&center=51.55960,-1.78824&type=light&zoom=17&locations=51.55973,-1.78961|marker-35||51.55933,-1.79197|marker-36||51.55866,-1.79197|marker-sm-37||51.55949,-1.78940|marker-sm-38||51.55946,-1.78880|marker-sm-39||51.55960,-1.78824|marker-sm-417505-40||51.56112,-1.79056|marker-sm-30||51.55848,-1.79455|marker-sm-25||51.56528,-1.78378|marker-sm-5||51.5651482,-1.7844754|marker-sm-6||51.56144,-1.79000|marker-sm-33||51.56189,-1.79043|marker-sm-32||51.5618774,-1.7912128|marker-sm-9||51.56013,-1.79245|marker-27||51.56042,-1.79103|marker-sm-34&size=300,300@2x",
        "mapimg": "assets/img/map_040.jpg"
    }
  ];

  getEntry(entryId: number): Entry {
    return this.entries.find(it => it.id === entryId);
  }
}
