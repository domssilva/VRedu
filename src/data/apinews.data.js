const newsDummyData = [
    {
       author: "news",
       category: [
          "regional"
       ],
       description: "MEGHAN MARKLE fans have turned on Prince Charles following claims he does not support the Duchess of Sussex's legal action against a British newspaper....",
       id: "4917ecdc-d30d-4624-936a-de5f86aca729",
       image: "None",
       language: "en",
       published: "2020-08-19 16:08:00 +0000",
       title: "Meghan Markle fans turn on Prince Charles over claims he does not support Duchess' lawsuit",
       url: "http://feedproxy.google.com/~r/daily-express-royal-news/~3/UZTYHq8fgiY/meghan-markle-news-legal-action-prince-charles-omid-scobie-finding-freedom"
    },
    {
       author: "news",
       category: [
          "regional"
       ],
       description: "PRINCE HARRY has revealed a major clue over his and Meghan Markle's plans for their new home in the US....",
       id: "6a0e841d-2af6-4ac5-94ed-0282a4f698ec",
       image: "None",
       language: "en",
       published: "2020-08-19 17:40:43 +0000",
       title: "Prince Harry gives huge hint at plans for his and Meghan Markle's £11m new home",
       url: "http://feedproxy.google.com/~r/daily-express-royal-news/~3/7n8Trh6DSW4/prince-harry-meghan-markle-new-home-santa-barbara-royal-news"
    },
    {
       author: "news",
       category: [
          "regional"
       ],
       description: "MEGHAN MARKLE and Prince Harry could be set to separate as an expert reflected on the possibility of Harry returning to the UK....",
       id: "9abc1573-b75a-4f7d-85ff-b193627b9752",
       image: "None",
       language: "en",
       published: "2020-08-19 16:17:00 +0000",
       title: "Meghan Markle and Prince Harry split: Duke may be forced to return to UK over visa",
       url: "http://feedproxy.google.com/~r/daily-express-royal-news/~3/hJCPdVyx-jA/Meghan-Markle-Prince-Harry-Duke-Duchess-of-Sussex-UK-return-visa-Royal-Family-latest"
    },
    {
       author: "@japantimes",
       category: [
          "opinion"
       ],
       description: "Renewables will most likely surpass the fossil fuel in electricity generation this year despite Trump's best efforts....",
       id: "b1923391-8fd1-4316-9a43-7055b5401a26",
       image: "https://cdn.japantimes.2xx.jp/wp-content/uploads/2020/08/np_file_31605-870x489.jpeg",
       language: "en",
       published: "2020-08-19 18:00:06 +0000",
       title: "Coal’s days may be over in the U.S.",
       url: "https://www.japantimes.co.jp/opinion/2020/08/19/commentary/coal-us/"
    },
    {
       author: "@japantimes",
       category: [
          "opinion"
       ],
       description: "Only by working in solidarity can we end the COVID-19 pandemic and effectively tackle its consequences....",
       id: "247b52db-8402-46b7-a2cf-7deef0ac27d2",
       image: "https://cdn.japantimes.2xx.jp/wp-content/uploads/2020/08/np_file_31264-870x489.jpeg",
       language: "en",
       published: "2020-08-19 18:05:14 +0000",
       title: "Taiwan can help the world recover better together",
       url: "https://www.japantimes.co.jp/opinion/2020/08/19/commentary/world-commentary/taiwan-coronavirus-health/"
    },
    {
       author: "@japantimes",
       category: [
          "opinion"
       ],
       description: "This could be the first step toward a strategic coalition to check aggression from Iran....",
       id: "9bb08a34-9711-4499-b26c-ce3fd8f341b6",
       image: "https://cdn.japantimes.2xx.jp/wp-content/uploads/2020/08/np_file_31713-870x489.jpeg",
       language: "en",
       published: "2020-08-19 18:10:26 +0000",
       title: "Military reasons to celebrate the Israel-UAE deal",
       url: "https://www.japantimes.co.jp/opinion/2020/08/19/commentary/world-commentary/military-israel-uae/"
    },
    {
       author: "@japantimes",
       category: [
          "opinion"
       ],
       description: "Key economic actors are rife with deep interconnections....",
       id: "b909dedc-3c64-4746-9435-7cefc8d5082f",
       image: "https://cdn.japantimes.2xx.jp/wp-content/uploads/2020/08/np_file_31768-870x489.jpeg",
       language: "en",
       published: "2020-08-19 18:20:33 +0000",
       title: "‘Too big to fail’ isn’t just a financial problem",
       url: "https://www.japantimes.co.jp/opinion/2020/08/19/commentary/japan-commentary/japan-china-supply-chain-coronavirus/"
    },
    {
       author: "Nick O'Malley",
       category: [
          "environment"
       ],
       description: "The animal is also at risk in NSW, Queensland and Tasmania....",
       id: "659a9ba9-4ce9-4c82-a219-bc6c2e2e790a",
       image: "https://static.ffx.io/images/$zoom_0.3531%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_53/t_crop_custom/q_86%2Cf_auto/t_theage_no_age_social_wm/ad5adcebc6bf920515178db09d72d76fe2de974a",
       language: "en",
       published: "2020-08-19 14:00:00 +0000",
       title: "Platypus should be listed vulnerable in Victoria, says scientific panel",
       url: "https://www.theage.com.au/environment/conservation/platypus-should-be-listed-vulnerable-in-victoria-says-scientific-panel-20200819-p55nbt.html?ref=rss"
    },
    {
       author: "Nick O'Malley",
       category: [
          "environment"
       ],
       description: "The federal government will further fund research projects seeking to commercialise Australia's mountain of waste....",
       id: "c1417d30-f858-4cbd-b043-e1af7c26a4c7",
       image: "https://static.ffx.io/images/$zoom_0.1902%2C$multiply_0.7554%2C$ratio_1.776846%2C$width_1059%2C$x_0%2C$y_60/t_crop_custom/q_86%2Cf_auto/t_theage_no_age_social_wm/80519fad6c8ad3a44bb80a48eccb34d0119d53bb",
       language: "en",
       published: "2020-08-19 14:00:00 +0000",
       title: "Research funded to find ways to turn our waste into dollars",
       url: "https://www.theage.com.au/environment/sustainability/research-funded-to-find-ways-to-turn-our-waste-into-dollars-20200819-p55ncl.html?ref=rss"
    },
    {
       author: "David Matthews",
       category: [
          "technology"
       ],
       description: "Starting this October, new Oculus VR owners will require a Facebook account to use their shiny new devices. Facebook announced the changes in a blog post along with what to do if you already have an Oculus account....",
       id: "339e46da-e955-4c53-ba0a-8d511593aaa5",
       image: "None",
       language: "en",
       published: "2020-08-19 11:17:00 +0000",
       title: "New Oculus headset owners will need a Facebook account",
       url: "https://www.techspot.com/news/86425-oculus-vr-headsets-soon-require-facebook-account.html"
    },
    {
       author: "Rob Thubron",
       category: [
          "technology"
       ],
       description: "Carnival boasts over 100 vessels operating under its ten different brands, including the popular Carnival Cruise Line, Princess Cruises, Costa Cruises, P&O, and Cunard Line. It has notified the US Securities and Exchange Commission (SEC) of the attack, revealing that hackers accessed a portion of on...",
       id: "3535ab91-12c2-401b-8c70-7d9d77099343",
       image: "None",
       language: "en",
       published: "2020-08-19 12:05:00 +0000",
       title: "Cruise line giant Carnival Corp. suffers ransomware attack, customer data accessed",
       url: "https://www.techspot.com/news/86428-cruise-line-giant-carnival-corp-hit-ransomware-customer.html"
    },
    {
       author: "Shawn Knight",
       category: [
          "technology"
       ],
       description: "The iconic BlackBerry brand is getting yet another lease on life. OnwardMobility, a startup created to deliver comprehensive, secure mobile device solutions to government, enterprise and business clients has licensed the rights to develop, engineer and bring a new BlackBerry mobile device to market ...",
       id: "7777d2cb-7ce8-434d-973c-8de5d9dd47f4",
       image: "None",
       language: "en",
       published: "2020-08-19 14:42:00 +0000",
       title: "Android-powered 5G BlackBerry phone with physical keyboard is coming in 2021",
       url: "https://www.techspot.com/news/86431-android-powered-5g-blackberry-phone-physical-keyboard-coming.html"
    },
    {
       author: "Shawn Knight",
       category: [
          "technology"
       ],
       description: "Panasonic on Wednesday confirmed that the upcoming Lumix S5 will be the newest camera to join its popular S-series line....",
       id: "03635b02-7d6e-486e-9285-1e7f5acbfe57",
       image: "None",
       language: "en",
       published: "2020-08-19 16:50:00 +0000",
       title: "Panasonic confirms full-frame S5 camera reveal scheduled for September 2",
       url: "https://www.techspot.com/news/86433-panasonic-confirms-full-frame-s5-camera-reveal-scheduled.html"
    },
    {
       author: "@nypost",
       category: [
          "business"
       ],
       description: "President Trump said he would support Oracle acquiring TikTok in the US as the popular video-sharing app continues its search for a buyer. Speaking to reporters Tuesday, Trump called Oracle a ̶…...",
       id: "719cdb7e-b94d-47c0-b20f-0978346e4bb3",
       image: "https://nypost.com/wp-content/uploads/sites/2/2020/08/trump-tiktok-1.jpg?quality=90&strip=all&w=680&h=356&crop=1",
       language: "en",
       published: "2020-08-19 14:05:40 +0000",
       title: "Trump backs Oracle as potential buyer for TikTok",
       url: "https://nypost.com/2020/08/19/trump-backs-oracle-as-potential-buyer-for-tiktok/"
    },
    {
       author: "@nypost",
       category: [
          "business"
       ],
       description: "Amazon is cracking down on sellers who don't live up to its two-day shipping promise — and it means they'll have to work weekends. The e-tail juggernaut this week told third-party selle…...",
       id: "d5af5e18-7d43-4946-91ea-29e294ab5b1e",
       image: "https://nypost.com/wp-content/uploads/sites/2/2020/08/Amazon-Warehouse-1.jpg?quality=90&strip=all&w=680&h=356&crop=1",
       language: "en",
       published: "2020-08-19 14:06:09 +0000",
       title: "Amazon tells third-party Prime sellers to start working weekends",
       url: "https://nypost.com/2020/08/19/amazon-tells-third-party-prime-sellers-to-start-working-weekends/"
    },
    {
       author: "@nypost",
       category: [
          "business"
       ],
       description: "Apple became the US's first $2 trillion company on Tuesday — almost two years to the day after it became the first company in the world to reach the $1 trillion mark. The iPhone maker r…...",
       id: "d27f7a9d-1ea5-48f1-8ef3-cac860f59afc",
       image: "https://nypost.com/wp-content/uploads/sites/2/2020/08/Tim-Cook-Celebrate.jpg?quality=90&strip=all&w=680&h=356&crop=1",
       language: "en",
       published: "2020-08-19 15:28:12 +0000",
       title: "Apple becomes first US company to reach $2 trillion valuation",
       url: "https://nypost.com/2020/08/19/apple-becomes-first-us-company-to-reach-2-trillion-valuation/"
    },
    {
       author: "Business Wire",
       category: [
          "hague",
          "stockholm"
       ],
       description: "The resolution with these Defendants stops a fraudulent N95 scheme, results in a large donation to COVID-19 relief, and requires cooperation from Defendants in any further enforcement efforts by 3M ST. PAUL, Minn.--(BUSINESS WIRE)--Aug. 19, 2020-- In a federal court case brought by 3M in California ...",
       id: "f2a5bbab-0775-4dea-a671-32838aa0fde3",
       image: "https://markets.ft.com/data/images/pulse",
       language: "en",
       published: "2020-08-19 17:59:00 +0000",
       title: "3M Stops Fake N95 Scheme, Resolving Lawsuit Claims Against Sellers on Amazon – Company Announcement",
       url: "https://markets.ft.com/data/announce/detail?dockey=600-202008191359BIZWIRE_USPRX____BW5650-1"
    },
    {
       author: "Business Wire",
       category: [
          "hague",
          "stockholm"
       ],
       description: "MIAMI--(BUSINESS WIRE)--Aug. 19, 2020-- Despite the significant negative impact of the COVID-19 pandemic on businesses and households, Banesco USA reported strong 2020 first semester results including an 18% increase in total assets to $2.02 billion, a 7% increase in total gross loans, and an 11% in...",
       id: "57ecb526-b6bf-43ef-8346-bc145722cf73",
       image: "https://markets.ft.com/data/images/pulse",
       language: "en",
       published: "2020-08-19 17:56:00 +0000",
       title: "Banesco USA's Positive First Semester Financial Results and Proactive Risk Management lead Fitch to Affirm its Ratings – Company Announcement",
       url: "https://markets.ft.com/data/announce/detail?dockey=600-202008191356BIZWIRE_USPRX____BW5649-1"
    },
    {
       author: "espn",
       category: [
          "sports"
       ],
       description: "A Florida appeals court ruled Wednesday that police violated the rights of New England Patriots owner Robert Kraft and others when they secretly video recorded them paying for massage parlor sex acts, barring the tapes' use at trial....",
       id: "e6916041-bc59-4870-9ff5-1c028afe9814",
       image: "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2019%2F0513%2Fr542624_1296x729_16%2D9.jpg",
       language: "en",
       published: "2020-08-19 18:13:51 +0000",
       title: "Court: Videos can't be used in Robert Kraft case",
       url: "https://www.espn.com/nfl/story/_/id/29696044/court-rules-secret-videos-used-patriot-owner-robert-kraft-massage-parlor-case"
    },
    {
       author: "espn",
       category: [
          "sports"
       ],
       description: "Recently appointed England women's coach Sarina Wiegman is adamant the gap is closing on the U.S. and insists the four-time champions are beatable....",
       id: "8d398e58-5596-43db-8116-3ba6a88ec713",
       image: "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2020%2F0814%2Fr731467_1296x729_16%2D9.jpg",
       language: "en",
       published: "2020-08-19 17:51:41 +0000",
       title: "England women's coach sees gap closing with U.S.",
       url: "https://www.espn.com/soccer/england-engw/story/4163030/england-womens-coach-wiegman-sees-gap-closing-with-united-states"
    },
    {
       author: "espn",
       category: [
          "sports"
       ],
       description: "Brooks Koepka has withdrawn from the Northern Trust at TPC-Boston over a lingering knee issue, ending his 2019-20 season and putting his status in doubt for the U.S. Open....",
       id: "575b3e0a-1aa3-46c7-bfe1-ff29402d73b0",
       image: "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2020%2F0307%2Fr676318_1296x729_16%2D9.jpg",
       language: "en",
       published: "2020-08-19 18:13:25 +0000",
       title: "Koepka to miss Cup playoffs, iffy for U.S. Open",
       url: "https://www.espn.com/golf/story/_/id/29696150/brooks-koepka-withdraws-northern-trust-knee-issue"
    },
    {
       author: "espn",
       category: [
          "sports"
       ],
       description: "Penn State coach James Franklin questions the process and the timing of the Big Ten's decision to postpone football this fall....",
       id: "0ff315c0-4521-43a5-b0fe-39e7b554e899",
       image: "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2020%2F0115%2Fr652561_1296x729_16%2D9.jpg",
       language: "en",
       published: "2020-08-19 18:13:25 +0000",
       title: "Penn St.'s Franklin frustrated by Big Ten process",
       url: "https://www.espn.com/college-football/story/_/id/29696521/penn-state-nittany-lions-coach-james-franklin-frustrated-big-ten-communication-postponement"
    },
    {
       author: "espn",
       category: [
          "sports"
       ],
       description: "Ole Miss football coach Lane Kiffin says it's a shame the NCAA won't give transfer waivers to players whose seasons have been postponed....",
       id: "673b6cc6-913a-49a6-934f-4d0cc5c64144",
       image: "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2019%2F1210%2Fr639710_1296x729_16%2D9.jpg",
       language: "en",
       published: "2020-08-19 18:13:25 +0000",
       title: "Kiffin: Allow Big Ten, Pac-12 players to transfer",
       url: "https://www.espn.com/college-football/story/_/id/29696072/ole-miss-rebels-coach-lane-kiffin-wants-transfer-waiver-players-postponed-seasons"
    },
    {
       author: "espn",
       category: [
          "sports"
       ],
       description: "Get a summary of the Brooklyn Nets vs. Toronto Raptors basketball game...",
       id: "47a44d75-8173-4631-8f73-5679dc2102d8",
       image: "http://s.espncdn.com/stitcher/sports/basketball/nba/events/401236262.png?templateId=espn.com.share.1",
       language: "en",
       published: "2020-08-19 18:25:50 +0000",
       title: "Follow live: Raptors eye another big effort in Game 2 against Nets",
       url: "https://www.espn.com/nba/game?gameId=401236262"
    },
    {
       author: "@BBCCymruFyw",
       category: [
          "regional"
       ],
       description: "Mae Cymru Fyw wedi comisiynu ffilmiau gan bobl ifanc yn ymateb i gyfnod Covid-19...",
       id: "0dedd547-d1e0-4ef4-91c4-a652786fa3fd",
       image: "https://ichef.bbci.co.uk/images/ic/1024x576/p08n0jx8.jpg",
       language: "cy",
       published: "2020-08-19 14:37:32 +0000",
       title: "Ffilmiau byrion gan bobl ifanc: Cyfnod clo 'anhygoel'",
       url: "https://www.bbc.co.uk/cymrufyw/53601407"
    },
    {
       author: "@BBCCymruFyw",
       category: [
          "regional"
       ],
       description: "Cafodd dyn ei gadw yn y ddalfa dros y Nadolig ar gam wedi i bedoffeil ddefnyddio'i lun a'i enw....",
       id: "488c4074-6c38-444b-bace-5a423220835f",
       image: "https://ichef.bbci.co.uk/news/1024/cpsprodpb/EB16/production/_114028106_stephenpriceborderse.jpg",
       language: "pt",
       published: "2020-08-19 14:54:31 +0000",
       title: "Beio dyn ar gam wedi i bedoffeil ddwyn ei lun",
       url: "https://www.bbc.co.uk/cymrufyw/53839800"
    },
    {
       author: "@BBCCymruFyw",
       category: [
          "regional"
       ],
       description: "Cyfreithwyr yn beirniadu galwad Sarah Atherton ar i'r Fyddin atal teithiau mudwyr o Ffrainc i'r DU....",
       id: "b2ca7576-511f-432f-82da-eba2e532f821",
       image: "https://ichef.bbci.co.uk/news/1024/cpsprodpb/9186/production/_113845273_migrants1.jpg",
       language: "cy",
       published: "2020-08-19 15:22:37 +0000",
       title: "Beirniadaeth i alwad AS i'r Fyddin atal ymfudwyr",
       url: "https://www.bbc.co.uk/cymrufyw/53837901"
    }
 ];

export default newsDummyData;