const messages = {
    en: {
      translate : 'translating',
      translate2 : 'translating',
      header: {
        home: 'HOME',
        about: 'ABOUT',
        experience: 'EXPERIENCE',
        workingholiday: 'WORKING HOLIDAY',
        skills: 'SKILLS',
        sideproject: 'SIDE PROJECT'
      },
      about:{
        about:'關於我',
        myName:'蕭欽方',
        lived:'國家',
        liveIn:'台灣',
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
        experience:'Experience',
        jobDescription:'Job Description',
        jobSkills:'Tools、Skills',
        jobSkills1:'Language : ',
        jobSkills2:'Version Control : ',
        jobSkills3:'IDE : ',
        jobSkills4:'Database : ',
        job3Comapny:'UNIVA TECHNOLOGIES CO.',
        job3Time1:'Jan 2017 ~ May 2019',
        job3Time2:'Feb 2021 ~ Dec 2021',
        job3Time3:'Jan 2022 ~ Oct 2022',
        job3Title:'Software Engineer',
        job3Content1:'ERP System Develop',
        job3C1Duty1:'System develop and maintenance',
        job3C1Duty2:'電子發票B2C導入開發',
        job3C1Detail:'主要工作是ERP系統改版開發。之後因政府推行電子發票，'+
        '所以開始著手電子發票導入專案。一開始先收集資訊、參加電子發票說明會，最後統整導入電子發票所需開發的內容與步驟。'+
        '也與使用者開會若導入後所需做的修正。經歷了一連串的調查、開會、開發、測試、送審，'+
        '最後成功將電子發票導入至公司的ERP系統中。'+
        '電子發票流程主要是利用Jenkins批次產生檔案後上傳至Turnkey。'+
        '公司ERP系統是使用Java語言，Spring、Hibernate框架與資料庫使用MySql。',
        job3Content2:'Android App Develop',
        job3C2Duty1:'App develop and maintenance',
        job3C2Duty2:'Google play upload',
        job3C2Duty3:'Firebase管理內部測試、使用者分析、問題排除',
        job3C2Detail:'製作app的目的是為了讓使用者方便查詢資訊。'+
        '開發是使用Java語言，利用api獲取資料顯示在app。畫面是使用xml排版。'+
        '透過firebase管理發布測試版。最後上架至Google play供使用者下載。',
        job3Content3:'Node.js Website Develop',
        job3C3Duty1:'Website develop and maintenance',
        job3C3Duty2:'使用Cordova將專案轉化成ios,利用adhoc發布給公司內部使用',
        job3C3Detail:'前端使用angular框架，後端則是使用Express，資料庫是使用MySql。'+
        '利用Cordova將專案轉成ios app，也因此了解ios app發布方式'+
        '與apple developer上各功能的設定。',
        job2Company:'LION TRAVEL SERVICE CO.',
        job2Time1:'Apr 2014 ~ Sep 2015',
        job2Title:'Software Engineer',
        job2Content1:'ERP System Develop',
        job2C1Duty1:'ERP develop and maintenance',
        job2C1Detail:'主要工作是ERP系統改版開發。依系統的服務項目區分出不同部分，'+
        '分批進行系統的改版開發。各服務有專門的sa，依照所收到的spec開發功能完成需求。'+
        '每週也會進行code review作業，讓程式碼整體更加統一。'+
        'ERP系統是使用C#語言，MVC架構，資料庫是使用MSSql。',
        job1Company:'U-SHUN COCOLONG',
        job1Time1:'Aug 2012 ~ Feb 2014',
        job1Title:'Software Engineer',
        job1Content1:'ERP System Develop',
        job1C1Duty1:'ERP develop and maintenance',
        job1C1Duty2:'銷售統計報表產出',
        job1C1Duty3:'ERP與鼎新系統(會計、物流)資料介接',
        job1C1Detail:'主要工作是ERP系統開發維護與撈取資料庫資料供業務主管分析。'+
        '系統是使用C#語言，資料庫是使用MSSql。'+
        '因應公司購入鼎新系統，使用Agilepoint製作流程幫助兩邊的資料介接。',
      },
      workingHoliday:{
        workingHoliday:'Ｗorking Holiday',
        whNzTime:'Jul 2019 ~ Jan 2021',
        whNzCountry:'New Zealand',
        whNzCity1:'Auckland',
        whNzCity1Job1:'Kitchen hand',
        whNzJob1_1:'Frying the food',
        whNzJob1_2:'Preparing ingredients',
        whNzJob1_3:'Making dumplings',
        whNzCity2:'Christchurch',
        whNzCity2Job1:'Kitchen hand',
        whNzJob2_1:'Frying the food,grilled on a skewer',
        whNzJob2_2:'Preparing ingredients',
        whNzCity2Job2:'Cutting staff',
        whNzJob4_1:'Asparagus cutting',
        whNzCity2Job3:'Picking staff',
        whNzJob5_1:'Tomato picking',
        whNzCity3:'Motueka',
        whNzCity3Job1:'Packing staff',
        whNzJob3_1:'Apple packing',
        whNzComment:'Every year only 600 Taiwanese can go to New Zealand on a working holiday visa. First come, first served is the way of visa application.'+
        'I was lucky I could get the working holiday visa. Because the project was done, I wanted to go abroad and do something new.'+
        'I was thankful that I could get one year off without pay. New Zealand is a beautiful country.'+
        'The weekend is important for them. They do activities with family on the beach such as picnics, reading books, going fishing or walking with their dogs.'+
        'The jobs I did were such as services or agriculture. Even though labour was not easy, I got a very great experience.'+
        'The first thing I liked to do is road trip in New Zealand.'+
        'I became more independent and got a lot of experience in one year and half in New Zealand.',
        whJpTime:'Oct 2015 ~ Oct 2016',
        whJpCountry:'Japan',
        whJpCity1:'Nagano City',
        whJpCity1Job1:'Kitchen hand',
        whJpJob1_1:'Preparing ingredients',
        whJpJob1_2:'Arrangement of japanese food',
        whJpCity2:'Hokkaido City',
        whJpCity2Job1:'Ski instructor',
        whJpJob2_1:'Teaching skiing',
        whJpJob2_2:'Supporting job in skiing resort',
        whJpCity3:'Hyogo City',
        whJpCity3Job1:'Waitress',
        whJpJob3_1:'Customer service',
        whJpJob3_2:'Housekeeping',
        whJpComment:'Because I had learned japanese for 3 years and I was interested in japanese life, I applied a working holiday visa in Japan.'+
        'First time went abroad made me be not only nervous but also excited.'+
        'I did three different types of job during this year in Japan.'+
        'And also I learned some japanese culture.'+
        'I had become more indepedent for this year and I could solve problems by myself.'
      },
      skills:{
        skills:'Skills',
        skills1:'Programming',
        skills2:'Design',
        skills3:'Language',
        otherNail:'Nail Painting',
        otherNailD:'Class C',
        languageChinese:'Mandarin',
        ChineseD:'First language',
        languageEnglish:'English',
        EnglishD:'Intermediate',
        languageJapanese:'Japanese',
        JapaneseD:'JLPT N1',
        languageSpanish:'Spanish',
        SpanishD:'Beginner',
        
      },
    },
    ja: {
      translate : '翻訳中',
      translate2 : '',
      header: {
        home: 'ホーム',
        about: '紹介',
        experience: '経歴',
        workingholiday: 'ワーキングホリデー',
        skills: 'スキル',
        sideproject: 'サイドプロジェクト'
      },
      about:{
        about:'關於我',
        myName:'蕭欽方',
        lived:'國家',
        liveIn:'台灣',
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
        experience:'経歴',
        jobDescription:'仕事內容',
        jobSkills:'ツール、技術',
        jobSkills1:'開発言語 : ',
        jobSkills2:'バージョン管理 : ',
        jobSkills3:'IDE : ',
        jobSkills4:'データベース : ',
        job3Comapny:'Univa Technologies CO.(IT会社)',
        job3Time1:'2017/01 ~ 2019/05',
        job3Time2:'2021/02 ~ 2021/12',
        job3Time3:'2022/01 ~ 2022/10',
        job3Title:'ソフトウェア エンジニア',
        job3Content1:'ERP システム開発',
        job3C1Duty1:'ERP システム開発とメンテナンス',
        job3C1Duty2:'電子発票の開発',
        job3C1Detail:'仕事内容はERPシステム開発とメンテナンスです。'+
        '当時電子発票に変更するため、このプロジェクトの担当者になりました。'+
        '最初は色々な情報を集めて、セミナーを参加して、電子発表に関する開発用の資料を作りました。'+
        '関連者、同僚と何回も会議を行いました。調査、打ち合わせ、開発、テスト、申請の過程で最後無事に完了しました。'+
        'ERPシステムはJava言語、SpringとHibernateのフレームワーク、MySqlデータベースでした。',
        job3Content2:'Android アプリ開発',
        job3C2Duty1:'アプリ開発とメンテナンス',
        job3C2Duty2:'Google play storeにアプリを公開する',
        job3C2Duty3:'Firebaseで内部テスト管理、利用者分析、issues解決',
        job3C2Detail:'アプリを開発する目的は簡単に情報が検索できるためでした。'+
        'アプリの開発はJavaでAPIを利用して、情報をアプリに表示することです。'+
        'firebaseでテスト配布と管理で、Google playにアップロードします。',
        job3Content3:'Node.js ウェブサイト開発とメンテナンス',
        job3C3Duty1:'ウェブサイト開発',
        job3C3Duty2:'Cordovaでプロジェクトをiosに変更して,Apple AdHocで配布します。',
        job3C3Detail:'前端はangularにして，後端はExpresにして、データーベースはMySqlでした。'+
        'ios appの配布を利用したことないですが、今度のプロジェクトのきっかけでios app配布方法を理解しました。'+
        'apple developerの色々な機能の利用方も理解できました。',
        job2Company:'LION TRAVEL SERVICE CO.（旅行会社）',
        job2Time1:'2014/04 ~ 2015/09',
        job2Title:'ソフトウェア エンジニア',
        job2Content1:'ERP システム開発',
        job2C1Duty1:'ERP システム切り替え開発とメンテナンス',
        job2C1Detail:'仕事主にERPシステム切り替えの開発でした。システムに色々な機能があって、毎回一部の機能を切り替えしました。'+
        '毎週はcode reviewを行いました。ERPシステムはC#言語で、MVCモデル、データベースはMSSqlでした。',
        job1Company:'U-SHUN Cocolong (文教業界）',
        job1Time1:'2012/08 ~ 2014/02',
        job1Title:'ソフトウェア エンジニア',
        job1Content1:'ERP システム開発',
        job1C1Duty1:'ERP システム開発とメンテナンス',
        job1C1Duty2:'売上統計の抽出',
        job1C1Duty3:'他のシステムとデータ連携(経理、配達)',
        job1C1Detail:'仕事内容はERPシステム開発とメンテナンスで、時々売上統計の抽出でした。'+
        'ERPシステムはC#言語で、データベースはMSSqlでした。'+
        'あとは、他社のシステムとデータ連携するとめ、Agilepointを利用しました。',
      },
      workingHoliday:{
        workingHoliday:'ワーキングホリデー',
        whNzTime:'2019/07 ~ 2021/01',
        whNzCountry:'ニュージーランド',
        whNzCity1:'オクランド',
        whNzCity1Job1:'キッチンハンド',
        whNzJob1_1:'揚げ物の担当',
        whNzJob1_2:'食材の準備',
        whNzJob1_3:'餃子の包み',
        whNzCity2:'クライストチャーチ',
        whNzCity2Job1:'キッチンハンド',
        whNzJob2_1:'揚げ物、焼き鳥の担当',
        whNzJob2_2:'食材の準備',
        whNzCity2Job2:'カッティングスタッフ',
        whNzJob4_1:'アスパラガスのカッティング',
        whNzCity2Job3:'ピッキングスタッフ',
        whNzJob5_1:'トマトのピッキング',
        whNzCity3:'モツエカ',
        whNzCity3Job1:'パッキングスタッフ',
        whNzJob3_1:'アップルパッキング',
        whNzComment:'毎年ワーホリでニュージーランドに600人しか行けないです。ビザの申し込みは早い者勝ちです。'+
        '当時の仕事プロジェクトも終わったので、出国するのを決めました。'+
        '会社に無給休暇で一年間の休みをもらって本当に感謝しました。ニュージーランドに人少ないし、景色めっちゃ綺麗だし、良い国です。'+
        'ニュージーランドにいる人は休み日を大事にしてると思います。週末に家族と一緒に海にリラックスしているようです。'+
        '仕事は主にサービス業か農業で働いていました。仕事は大変でしたが、いい経験でした。'+
        '一番好きなことは南島にロードトリップする事でした。'+
        'ニュージーランドにいろんな事を勉強しましたし、いろいろな国の友達ができましたし、大切な一年半でした。',
        whJpTime:'2015/10 ~ 2016/10',
        whJpCountry:'日本',
        whJpCity1:'長野県',
        whJpCity1Job1:'キッチンハンド',
        whJpJob1_1:'食材の準備',
        whJpJob1_2:'料理の盛り付け',
        whJpCity2:'北海道',
        whJpCity2Job1:'スキーインストラクター',
        whJpJob2_1:'スキーの教え',
        whJpJob2_2:'スキー場にサポート',
        whJpCity3:'兵庫県',
        whJpCity3Job1:'仲居',
        whJpJob3_1:'接客',
        whJpJob3_2:'ハウスキーピング',
        whJpComment:'当時日本語はある程度勉強しましたし、日本に興味を持っていましたし、'+
        'ワーホリで日本に行きました。初めて一人で海外に行くのはちょっと不安でしたが、めっちゃ楽しみにしていました。'+
        '日本にいる間に三つ場所で働いて、日本文化のイベントも体験しました。'+
        'この一年間にすごく成長したと思います。なぜなら、一人で色々な事を解決できたからです。'+
        '問題があったら、逃げるではなく、冷静に問題を解決する自分でした。'
      },
      skills:{
        skills:'スキル',
        skills1:'プログラミング言語',
        skills2:'デザイン',
        skills3:'言語',
        otherNail:'ジェルネイル',
        otherNailD:'Class C',
        languageChinese:'中国語',
        ChineseD:'母語',
        languageEnglish:'英語',
        EnglishD:'日常会話',
        languageJapanese:'日本語',
        JapaneseD:'日常会話 N1',
        languageSpanish:'スペイン語',
        SpanishD:'独学中',
        
      },
    },
    tw: {
      translate : '',
      translate2 : '',
      header:{
        home: '首頁',
        about: '關於',
        experience: '工作經驗',
        workingholiday: '打工度假',
        skills: '技能',
        sideproject: '作品集'
      },
      about:{
        about:'關於我',
        myName:'蕭欽方',
        lived:'國家',
        liveIn:'台灣',
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
        jobDescription:'工作內容',
        jobSkills:'工具、技術',
        jobSkills1:'語言 : ',
        jobSkills2:'版本控制 : ',
        jobSkills3:'開發工具 : ',
        jobSkills4:'資料庫 : ',
        job3Comapny:'環貫資訊股份有限公司',
        job3Time1:'2017/01 ~ 2019/05',
        job3Time2:'2021/02 ~ 2021/12',
        job3Time3:'2022/01 ~ 2022/10',
        job3Title:'軟體工程師',
        job3Content1:'ERP系統開發',
        job3C1Duty1:'系統改版開發、維護',
        job3C1Duty2:'電子發票B2C導入開發',
        job3C1Detail:'主要工作是ERP系統改版開發。之後因政府推行電子發票，'+
        '所以開始著手電子發票導入專案。一開始先收集資訊、參加電子發票說明會，最後統整導入電子發票所需開發的內容與步驟。'+
        '也與使用者開會若導入後所需做的修正。經歷了一連串的調查、開會、開發、測試、送審，'+
        '最後成功將電子發票導入至公司的ERP系統中。'+
        '電子發票流程主要是利用Jenkins批次產生檔案後上傳至Turnkey。'+
        '公司ERP系統是使用Java語言，Spring、Hibernate框架與資料庫使用MySql。',
        job3Content2:'Android app開發',
        job3C2Duty1:'App開發、維護',
        job3C2Duty2:'Google play上架',
        job3C2Duty3:'Firebase管理內部測試、使用者分析、問題排除',
        job3C2Detail:'製作app的目的是為了讓使用者方便查詢資訊。'+
        '開發是使用Java語言，利用api獲取資料顯示在app。畫面是使用xml排版。'+
        '透過firebase管理發布測試版。最後上架至Google play供使用者下載。',
        job3Content3:'Node.js開發維護',
        job3C3Duty1:'系統開發、維護',
        job3C3Duty2:'使用Cordova將專案轉化成ios,利用adhoc發布給公司內部使用',
        job3C3Detail:'前端使用angular框架，後端則是使用Express，資料庫是使用MySql。'+
        '利用Cordova將專案轉成ios app，也因此了解ios app發布方式'+
        '與apple developer上各功能的設定。',
        job2Company:'雄獅旅行社股份有限公司',
        job2Time1:'2014/04 ~ 2015/09',
        job2Title:'軟體工程師 ',
        job2Content1:'ERP系統開發',
        job2C1Duty1:'ERP系統開發、維護',
        job2C1Detail:'主要工作是ERP系統改版開發。依系統的服務項目區分出不同部分，'+
        '分批進行系統的改版開發。各服務有專門的sa，依照所收到的spec開發功能完成需求。'+
        '每週也會進行code review作業，讓程式碼整體更加統一。'+
        'ERP系統是使用C#語言，MVC架構，資料庫是使用MSSql。',
        job1Company:'堉舜國際文化事業股份有限公司',
        job1Time1:'2012/08 ~ 2014/02',
        job1Title:'軟體工程師',
        job1Content1:'ERP系統開發',
        job1C1Duty1:'ERP系統開發、維護',
        job1C1Duty2:'銷售統計報表產出',
        job1C1Duty3:'ERP與鼎新系統(會計、物流)資料介接',
        job1C1Detail:'主要工作是ERP系統開發維護與撈取資料庫資料供業務主管分析。'+
        '系統是使用C#語言，資料庫是使用MSSql。'+
        '因應公司購入鼎新系統，使用Agilepoint製作流程幫助兩邊的資料介接。',
      },
      workingHoliday:{
        workingHoliday:'打工度假',
        whNzTime:'2019/07 ~ 2021/01',
        whNzCountry:'紐西蘭',
        whNzCity1:'奧克蘭',
        whNzCity1Job1:'廚房助理',
        whNzJob1_1:'炸物料理',
        whNzJob1_2:'準備食材',
        whNzJob1_3:'包水餃',
        whNzCity2:'基督城',
        whNzCity2Job1:'廚房助理',
        whNzJob2_1:'炸物，燒烤料理',
        whNzJob2_2:'準備食材',
        whNzCity2Job2:'收割工作人員',
        whNzJob4_1:'收割蘆筍',
        whNzCity2Job3:'採摘工作人員',
        whNzJob5_1:'採摘番茄',
        whNzCity3:'莫圖卡',
        whNzCity3Job1:'包裝工作人員',
        whNzJob3_1:'包裝，篩選蘋果',
        whNzComment:'每年有資格去紐西蘭打工度假的人數只有600人，而能否申請到簽證則是已先搶先贏的方式。'+
        '自己很幸運地能成為600壯士的其中一名。因工作專案剛好完成到一個段落，所以決定出國尋找新的刺激。'+
        '感謝公司讓自己已留職停薪的方式前往體驗新生活。紐西蘭是個人少風景美的國家。'+
        '觀察到紐西蘭人很注重休閒娛樂。假日會看到很多人在海邊野餐、看書、散步、釣魚。'+
        '工作方面，主要是服務業與農業。雖然勞力工不輕鬆，但都是很寶貴的經驗。'+
        '在紐西蘭，最喜歡的就是開著車環繞南島各地方旅遊。'+
        '很珍惜在紐西蘭的一年半，讓自己獨立且心境上更加的成熟。',
        whJpTime:'2015/10 ~ 2016/10',
        whJpCountry:'日本',
        whJpCity1:'長野縣',
        whJpCity1Job1:'廚房助理',
        whJpJob1_1:'準備食材',
        whJpJob1_2:'料理擺盤',
        whJpCity2:'北海道',
        whJpCity2Job1:'Skiing滑雪教練',
        whJpJob2_1:'滑雪教學',
        whJpJob2_2:'滑雪場工作支援',
        whJpCity3:'兵庫縣',
        whJpCity3Job1:'旅館仲居',
        whJpJob3_1:'接待客人',
        whJpJob3_2:'清潔房間',
        whJpComment:'當初因為學習日文已有一段時間，且對日本生活很嚮往，所以用打工度假的方式來體驗日本，'+
        '順便驗收自己日文能力。第一次一個人出國難免有些緊張，不過興奮的心情掩蓋所有的不安。'+
        '在日本生活的一年裡，做過三種不同類型的工作，也體驗了一些日本文化。'+
        '這一年下來讓自己成長了許多，因為很多事情都只能靠自己來解決，'+
        '遇到問題不會只是窮緊張，能馬上冷靜地處理。'
      },
      skills:{
        skills:'技能',
        skills1:'程式語言',
        skills2:'繪圖設計',
        skills3:'語言能力',
        otherNail:'指甲彩繪',
        otherNailD:'初級',
        languageChinese:'中文',
        ChineseD:'母語',
        languageEnglish:'英文',
        EnglishD:'日常對話',
        languageJapanese:'日文',
        JapaneseD:'日常對話 N1',
        languageSpanish:'西班牙文',
        SpanishD:'自學中',
        
      },
      sideproject:{
        skills:'技術',
        content:'描述',
        link:'連結',
        project1Name:'專案1',
        project1Content:'內容1',
        project2Name:'專案2',
        project2Content:'內容2',
        project3Name:'專案3',
        project3Content:'內容3',
      }
    }
  }
  