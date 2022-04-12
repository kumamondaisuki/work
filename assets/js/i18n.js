const messages = {
    en: {
      header: {
        home: 'HOME',
        about: 'ABOUT',
        experience: 'EXPERIENCE',
        skills: 'SKILLS'
      },
      about:{
        about:'About me',
        myName:'ChinFang Hsiao',
        lived:'',
        liveIn:'Taoyuan',
        education:'Education',
        university:'',
        email:'Email',
        summary:'',
        mySummary:'',
        interests:'Interests',
        myInterests:''
      },
      experience:{
        experience:'工作經驗',
        job3Time1:'2017/01 ~ 2019/05',
        job3Time2:'2021/02 ~ present',
        job3Title:'軟體工程師 - 資訊服務業',
        job3Content1:'Java ERP系統開發',
        job3C1Duty1:'系統開發、維護',
        job3C1Duty2:'TortoiseSVN版本控制',
        job3C1Duty3:'電子發票B2C導入開發',
        job3C1Detail:'剛進公司時剛好是政府宣導要切換成電子發票的時期，因公司的開發團隊主要在日本，'+
        '所以由唯一台灣人的我做電子發票的調查、與user開會了解需求、'+
        '與日本前輩們討論種種流程的規劃。經歷了一連串的調查、開會、開發、'+
        '測試、送審，將電子發票導入至公司的ERP系統中。'+
        '公司ERP系統是使用Java、Spring框架、Hibernate與資料庫做聯繫。'+
        '介面則是使用Action Script做開發。',
        job3Content2:'Android app開發',
        job3C2Duty1:'App開發、維護',
        job3C2Duty2:'Google play上架',
        job3C2Duty3:'git版本控制',
        job3C2Duty4:'Firebase管理內部測試、使用者分析、問題排除',
        job3C2Detail:'利用公司api在app上顯示相關資訊讓使用者方便查詢所需要的資訊。'+
        '使用Java開發，畫面是利用xml排版。透過firebase管理發布測試版，'+
        'Google play上架app供使用者下載。開發上使用的技術都來自網路上。'+
        '現在也在自學Kotlin語言、Clean Architecture架構、jetpack compose畫面顯示。',
        job3Content3:'Node.js 網站維護',
        job3C3Duty1:'網站開發、維護',
        job3C3Duty2:'git版本控制',
        job3C3Duty3:'使用Cordova產生ios app',
        job3C3Detail:'前端使用angularJS框架，後端則是使用Express。一開始先了解npm、bower的用途'+
        '與熟悉各目錄資料夾。因為還需要發布成ios app形式，所以也需了解ios app發布方式。'+
        '花了一些功夫才理解apple developer上各個設定的意義。',
        job2Time1:'2014/04 ~ 2015/09',
        job2Title:'軟體工程師 - 旅遊服務業',
        job2Content1:'C# ERP系統開發',
        job2C1Duty1:'系統改版開發、維護',
        job2C1Duty2:'TortoiseSVN版本控制',
        job2C1Detail:'一進公司剛好就是公司ERP系統在做改版的時期。一邊進行公司商業知識的學習，'+
        '一邊進行系統的開發。也認識到sa、spec在開發中所擔任的職務、功用。'+
        '系統是使用MVC架構，讓程式碼能更清晰，且較容易管理維護。'+
        '部門也做了code review作業，讓程式碼整體更加統一。',
        job1Time1:'2012/08 ~ 2014/02',
        job1Title:'軟體工程師 - 書籍出版、文教事業',
        job1Content1:'C# ERP系統開發',
        job1C1Duty1:'ERP系統開發、維護',
        job1C1Duty2:'Team Foundation版本控制',
        job1C1Duty3:'銷售統計報表(Crystal Report)產出',
        job1C1Duty4:'ERP與鼎新系統(會計、物流)資料介接',
        job1C1Detail:'出社會後的第一份工作。學習到什麼是ERP系統，'+
        '依據user的需求做系統的開發與維護，撈取資料庫資料滿足業務主管的銷售報表需求。'+
        '因應公司購入鼎新系統，使用Agilepoint製作流程幫助兩邊的資料介接。',
      },
      workingHoliday:{
        workingHoliday:'',
        whNzTime:'',
        whNzCountry:'',
        whNzCity1:'',
        whNzCity1Job1:'',
        whNzCity2:'',
        whNzCity2Job1:'',
        whNzCity2Job2:'',
        whNzCity2Job3:'',
        whNzCity3:'',
        whNzCity3Job1:'',
        whNzComment:'',
        whJpTime:'',
        whJpCountry:'',
        whJpCity1:'',
        whJpCity1Job1:'',
        whJpCity2:'',
        whJpCity2Job1:'',
        whJpCity3:'',
        whJpCity3Job1:'',
        whJpComment:''
      }

    },
    ja: {
      header: {
        home: 'ホーム',
        about: '自己紹介',
        experience: '経験',
        skills: '技能'
      },
      about:{
        about:'',
        myName:'',
        lived:'',
        liveIn:'',
        education:'',
        university:'',
        email:'',
        summary:'',
        mySummary:'',
        interests:'',
        myInterests:''
      },
      experience:{
        experience:'工作經驗',
        job3Time1:'2017/01 ~ 2019/05',
        job3Time2:'2021/02 ~ present',
        job3Title:'軟體工程師 - 資訊服務業',
        job3Content1:'Java ERP系統開發',
        job3C1Duty1:'系統開發、維護',
        job3C1Duty2:'TortoiseSVN版本控制',
        job3C1Duty3:'電子發票B2C導入開發',
        job3C1Detail:'剛進公司時剛好是政府宣導要切換成電子發票的時期，因公司的開發團隊主要在日本，'+
        '所以由唯一台灣人的我做電子發票的調查、與user開會了解需求、'+
        '與日本前輩們討論種種流程的規劃。經歷了一連串的調查、開會、開發、'+
        '測試、送審，將電子發票導入至公司的ERP系統中。'+
        '公司ERP系統是使用Java、Spring框架、Hibernate與資料庫做聯繫。'+
        '介面則是使用Action Script做開發。',
        job3Content2:'Android app開發',
        job3C2Duty1:'App開發、維護',
        job3C2Duty2:'Google play上架',
        job3C2Duty3:'git版本控制',
        job3C2Duty4:'Firebase管理內部測試、使用者分析、問題排除',
        job3C2Detail:'利用公司api在app上顯示相關資訊讓使用者方便查詢所需要的資訊。'+
        '使用Java開發，畫面是利用xml排版。透過firebase管理發布測試版，'+
        'Google play上架app供使用者下載。開發上使用的技術都來自網路上。'+
        '現在也在自學Kotlin語言、Clean Architecture架構、jetpack compose畫面顯示。',
        job3Content3:'Node.js 網站維護',
        job3C3Duty1:'網站開發、維護',
        job3C3Duty2:'git版本控制',
        job3C3Duty3:'使用Cordova產生ios app',
        job3C3Detail:'前端使用angularJS框架，後端則是使用Express。一開始先了解npm、bower的用途'+
        '與熟悉各目錄資料夾。因為還需要發布成ios app形式，所以也需了解ios app發布方式。'+
        '花了一些功夫才理解apple developer上各個設定的意義。',
        job2Time1:'2014/04 ~ 2015/09',
        job2Title:'軟體工程師 - 旅遊服務業',
        job2Content1:'C# ERP系統開發',
        job2C1Duty1:'系統改版開發、維護',
        job2C1Duty2:'TortoiseSVN版本控制',
        job2C1Detail:'一進公司剛好就是公司ERP系統在做改版的時期。一邊進行公司商業知識的學習，'+
        '一邊進行系統的開發。也認識到sa、spec在開發中所擔任的職務、功用。'+
        '系統是使用MVC架構，讓程式碼能更清晰，且較容易管理維護。'+
        '部門也做了code review作業，讓程式碼整體更加統一。',
        job1Time1:'2012/08 ~ 2014/02',
        job1Title:'',
        job1Content1:'',
        job1C1Duty1:'',
        job1C1Duty2:'',
        job1C1Duty3:'',
        job1C1Duty4:'',
        job1C1Detail:'',
      },
      workingHoliday:{
        workingHoliday:'',
        whNzTime:'',
        whNzCountry:'',
        whNzCity1:'',
        whNzCity1Job1:'',
        whNzCity2:'',
        whNzCity2Job1:'',
        whNzCity2Job2:'',
        whNzCity2Job3:'',
        whNzCity3:'',
        whNzCity3Job1:'',
        whNzComment:'',
        whJpTime:'',
        whJpCountry:'',
        whJpCity1:'',
        whJpCity1Job1:'',
        whJpCity2:'',
        whJpCity2Job1:'',
        whJpCity3:'',
        whJpCity3Job1:'',
        whJpComment:''
      }
    },
    tw: {
      header:{
        home: '首頁',
        about: '關於',
        experience: '工作經驗',
        skills: '技能'
      },
      about:{
        about:'關於我',
        myName:'蕭欽方',
        lived:'居住',
        liveIn:'桃園',
        education:'學歷',
        university:'淡江大學 - 資訊管理學系',
        email:'信箱',
        summary:'簡歷',
        mySummary:'前後在三間公司任職軟體工程師，約7年的開發經驗。'+
        '前兩間公司主要是負責開發維護ERP系統，使用C#做開發。'+
        '目前的公司主要也是做系統的開發與維護，使用Java做開發。'+
        '近幾年，因公司需求所以開始接觸Android app開發。'+
        '從開發環境的熟悉、app程式架構、kotlin語言、app的上架都是全新的學習。'+
        '很喜歡這些新知識所帶來的挑戰，會利用工作外的時間去學習與接收新知識。'+
        '目前正努力開發個人app中。另外，也有在做Python課程進修。',
        interests:'興趣',
        myInterests:'喜歡登山。在登山的過程中可以讓自己的心理沉靜下來，'+
        '只需要想著努力跨出每一步。看看四周的環境變化，眺望遠方雄偉的山景。'+
        '雖然身體疲憊但卻能放鬆心靈。今年想完成台北大縱走。目前爬過的山有玉山、北大武、加羅湖與嘉明湖，'+
        '日本富士山與紐西蘭Roy peak等。'
      },
      experience:{
        experience:'工作經驗',
        job3Time1:'2017/01 ~ 2019/05',
        job3Time2:'2021/02 ~ present',
        job3Title:'軟體工程師 - 資訊服務業',
        job3Content1:'ERP系統開發',
        job3C1Duty1:'系統開發、維護',
        job3C1Duty2:'TortoiseSVN版本控制',
        job3C1Duty3:'電子發票B2C導入開發',
        job3C1Detail:'剛進公司時剛好是政府宣導要切換成電子發票的時期，'+
        '所以就被指派處理電子發票的專案。一開始先對電子發票進行調查，參加電子發票說明會，'+
        '與使用者開會了解需求，再與同事們討論系統流程的規劃。經歷了一連串的調查、開會、開發、'+
        '測試、送審，最後成功將電子發票導入至公司的ERP系統中。'+
        '電子發票流程主要是利用Jenkins批次產生檔案後上傳至Turnkey。'+
        '公司ERP系統是使用Java、Spring框架、Hibernate與資料庫做聯繫。'+
        '介面則是使用Action Script做開發。',
        job3Content2:'Android app開發',
        job3C2Duty1:'App開發、維護',
        job3C2Duty2:'Google play上架',
        job3C2Duty3:'git版本控制',
        job3C2Duty4:'Firebase管理內部測試、使用者分析、問題排除',
        job3C2Detail:'利用公司api在app上顯示相關資訊讓使用者方便查詢所需要的資訊。'+
        '使用Java開發，畫面是利用xml排版。透過firebase管理發布測試版，'+
        '最後上架至Google play供使用者下載。'+
        '現在也在自學Kotlin語言、Clean Architecture架構、jetpack compose畫面顯示。',
        job3Content3:'Node.js 網站維護',
        job3C3Duty1:'網站開發、維護',
        job3C3Duty2:'git版本控制',
        job3C3Duty3:'使用Cordova產生ios app',
        job3C3Detail:'前端使用angular框架，後端則是使用Express。一開始先了解npm、bower的用途'+
        '與熟悉各目錄資料夾。因為還需要發布成ios app形式，所以也需了解ios app發布方式。'+
        '花了一些功夫才理解apple developer上各個設定的意義。',
        job2Time1:'2014/04 ~ 2015/09',
        job2Title:'軟體工程師 - 旅遊服務業',
        job2Content1:'ERP系統開發',
        job2C1Duty1:'系統改版開發、維護',
        job2C1Duty2:'TortoiseSVN版本控制',
        job2C1Detail:'一進公司剛好就是公司ERP系統在做改版的時期。一邊進行公司商業知識的學習，'+
        '一邊進行系統的開發。也認識到sa、spec在開發中所擔任的職務、功用。'+
        'ERP系統是使用C#做開發，MVC架構，讓程式碼能更清晰，且較容易管理維護。'+
        '部門也做了code review作業，讓程式碼整體更加統一。',
        job1Time1:'2012/08 ~ 2014/02',
        job1Title:'軟體工程師 - 書籍出版、文教事業',
        job1Content1:'ERP系統開發',
        job1C1Duty1:'ERP系統開發、維護',
        job1C1Duty2:'Team Foundation版本控制',
        job1C1Duty3:'銷售統計報表(Crystal Report)產出',
        job1C1Duty4:'ERP與鼎新系統(會計、物流)資料介接',
        job1C1Detail:'出社會後的第一份工作。學習到什麼是ERP系統，'+
        '系統是使用C#，工作內容主要是需求開發與系統維護，和撈取資料讓主管分析。'+
        '因應公司購入鼎新系統，使用Agilepoint製作流程幫助兩邊的資料介接。',
      },
      workingHoliday:{
        workingHoliday:'打工度假',
        whNzTime:'2019/07 ~ 2021/01',
        whNzCountry:'紐西蘭',
        whNzCity1:'Auckland',
        whNzCity1Job1:'Kitchen hand',
        whNzCity2:'Christchurch',
        whNzCity2Job1:'Kitchen hand',
        whNzCity2Job2:'Asparagus cutting',
        whNzCity2Job3:'Tomato picking',
        whNzCity3:'Motueka',
        whNzCity3Job1:'Apple packing',
        whNzComment:'每年能去紐西蘭打工的台灣人只有600人，而能否申請到簽證是已先搶先贏的方式。'+
        '很幸運地成為600壯士的其中一名。因工作專案剛好告了一個段落，所以決定去一趟紐西蘭打工度假。'+
        '感謝公司能讓我已留職停薪的方式前往體驗新生活。'+
        '紐西蘭是個人少風景美的國家。假日會看到很多人在海邊野餐、看書、散步、釣魚。'+
        '感覺的到紐西蘭人很注重休閒娛樂。而我打工度假主要是做了在台灣比較不會碰到的農業工作，'+
        '包裝蘋果、採摘番茄、切割蘆筍的工作。雖然不輕鬆，但是個有趣的經驗。'+
        '在紐西蘭，最喜歡的就是開著車環繞南島各地方旅遊。'+
        '很珍惜在紐西蘭的一年半，讓自己獨立且心境上更加的成熟。',
        whJpTime:'2015/10 ~ 2016/10',
        whJpCountry:'日本',
        whJpCity1:'長野 - 溫泉旅館',
        whJpCity1Job1:'廚房助理',
        whJpCity2:'北海道 - 滑雪度假村',
        whJpCity2Job1:'Skiing滑雪教練',
        whJpCity3:'兵庫 - 溫泉旅館',
        whJpCity3Job1:'旅館仲居',
        whJpComment:'因學習日文有一段時間，所以打算以打工度假的方式前往日本體驗生活，'+
        '順便驗收自己日文能力到達時麼程度。在日本共做過三種不同的工作。其中，'+
        '最特別的工作是一邊學習滑雪，一邊指導講中文的遊客滑雪。'+
        '雖然工作不輕鬆，但能一邊滑雪一邊工作，真的是求之不得。'+
        '也因此愛上了滑雪，回台後，每年冬天還是會找時間去日本滑雪。'
      },
      skills:{
        skills:'技能',
        skills1:'程式語言',
        skills2:'網頁開發',
        skills3:'文書處理軟體',
        skills4:'繪圖設計工具',
        skills5:'語言能力',
        s5Content1:'中文',
        s5C1Detail:'母語',
        s5Content2:'英文',
        s5C2Detail:'基本對話',
        s5Content3:'日文',
        s5C3Detail:'日常對話',
        s5Content4:'西班牙文',
        s5C4Detail:'學習中',
        
      }
    }
  }
  