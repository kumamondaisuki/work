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
        mySummary:'曾在三間公司任職軟體工程師，大約7年的經驗。'+
        '前兩間公司主要是使用C#做開發，負責開發維護公司的ERP系統。'+
        '而目前的公司主要是使用Java做開發，也是開發維護公司的ERP系統。'+
        '2021年，因公司需求，所以開始接觸Android app開發。'+
        '從開發環境的熟悉、app程式架構、kotlin語言、app的上架都是全新的學習。'+
        '很喜歡這些新知識所帶來的挑戰，也會利用工作外的時間去學習與接收新知識。'+
        '另外，目前也有在做Python課程進修。',
        interests:'興趣',
        myInterests:'對於登山感到有興趣。在登山的過程中可以讓自己的心理沉靜下來，'+
        '只需要想著努力跨出每一步。看看四周的環境變化，眺望遠方雄偉的山景。'+
        '雖然身體疲憊但卻能放鬆心靈。目前爬過的山有玉山、北大武、加羅湖與嘉明湖，'+
        '日本富士山與紐西蘭的Roy peak等。'
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
      }
    }
  }
  