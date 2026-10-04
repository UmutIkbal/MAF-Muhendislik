export type Project = {
  slug: string;
  title: string;
  category: "İnşaat" | "Dekorasyon" | "İç Mimarlık";
  location: string;
  year: string;
  image: string;
  images: string[];
  comparison?: {
    progressImage: string;
    completedImage: string;
  };
  summary: string;
  description: string;
  scope: string[];
  trustStatement: string;
  specifications: { label: string; value: string; detail: string }[];
};

export const projects: Project[] = [
  {
    slug: "bahceli-villa",
    title: "Bahçeli Villa Konsepti",
    category: "İnşaat",
    location: "Konsept çalışma",
    year: "2025",
    image: "/images/projects/bahceli-villa.webp",
    images: [
      "/images/projects/bahceli-villa.webp",
      "/images/projects/bahceli-villa-galeri-2.webp",
      "/images/projects/bahceli-villa-galeri-3.webp"
    ],
    summary: "Bahçeyle ilişki kuran geniş açıklıklar ve yalın kütlelerle şekillenen müstakil yaşam önerisi.",
    description: "Görseller stok kaynaklıdır; proje yılı temsili olarak belirtilmiştir. Salon, yemek alanı ve bahçe arasındaki geçişler bu konseptin merkezinde yer alır. Gölgelikli açık alanlar, doğal ışık ve mahremiyet birlikte değerlendirilir; cephede açık tonlar ve ahşap dokular dengelenir.",
    scope: [
      "Mimari ihtiyaç programı",
      "Kütle ve cephe tasarımı",
      "Bahçe ilişkisi",
      "Uygulama planlaması"
    ],
    trustStatement: "Bu tasarım önerisinde mimari ihtiyaç programı ile malzeme ve kullanım kararları birlikte değerlendirilir. Nihai çözümler, yerinde keşif ve proje gereksinimlerine göre belirlenir.",
    specifications: [
      {
        "label": "Cephe",
        "value": "Açık tonlu yüzeyler",
        "detail": "Güneş yönü ve bakım ihtiyacına göre değerlendirilen sade bir malzeme paleti."
      },
      {
        "label": "Açık alan",
        "value": "Gölgelikli teras",
        "detail": "İç mekan ile bahçe arasında günlük kullanımı destekleyen bir geçiş."
      },
      {
        "label": "Doğrama",
        "value": "Geniş cam açıklıkları",
        "detail": "Isı kontrolü ve mahremiyet ihtiyaçlarıyla birlikte ele alınan açıklık oranları."
      }
    ]
  },
  {
    slug: "cagdas-apartman",
    title: "Çağdaş Apartman Konsepti",
    category: "İnşaat",
    location: "Konsept çalışma",
    year: "2025",
    image: "/images/projects/cagdas-apartman.webp",
    images: [
      "/images/projects/cagdas-apartman.webp",
      "/images/projects/cagdas-apartman-galeri-2.webp",
      "/images/projects/cagdas-apartman-galeri-3.webp"
    ],
    summary: "Doğal ışık, açık görüş hatları ve işlevsel planlama etrafında gelişen konut yaklaşımı.",
    description: "Görseller stok kaynaklıdır; proje yılı temsili olarak belirtilmiştir. Bu örnek konut çalışmasında ortak yaşam alanlarının ferahlığı ve odalar arasındaki dolaşım öncelik kazanır. Depolama nişleri ve sade yüzeyler, farklı kullanıcı ihtiyaçlarına uyarlanabilecek bir iç mekan dili sunar.",
    scope: [
      "Konut planlaması",
      "İç mekan koordinasyonu",
      "Malzeme araştırması",
      "İnce iş planlaması"
    ],
    trustStatement: "Bu tasarım önerisinde konut planlaması ile malzeme ve kullanım kararları birlikte değerlendirilir. Nihai çözümler, yerinde keşif ve proje gereksinimlerine göre belirlenir.",
    specifications: [
      {
        "label": "Planlama",
        "value": "Açık yaşam alanı",
        "detail": "Dolaşım yollarını daraltmadan bir araya gelen oturma ve yemek işlevleri."
      },
      {
        "label": "Yüzeyler",
        "value": "Nötr renk paleti",
        "detail": "Gün ışığını destekleyen açık renkler ve düşük kontrastlı geçişler."
      },
      {
        "label": "Depolama",
        "value": "Mimariyle bütünleşen dolaplar",
        "detail": "Günlük eşyaları erişilebilir tutan ve görsel yoğunluğu azaltan çözümler."
      }
    ]
  },
  {
    slug: "acik-plan-salon",
    title: "Açık Plan Salon Tasarımı",
    category: "İç Mimarlık",
    location: "Konsept çalışma",
    year: "2024",
    image: "/images/projects/acik-plan-salon.webp",
    images: [
      "/images/projects/acik-plan-salon.webp",
      "/images/projects/acik-plan-salon-galeri-2.webp",
      "/images/projects/acik-plan-salon-galeri-3.webp"
    ],
    summary: "Oturma ve sohbet alanlarını doğal dokularla buluşturan ferah bir salon konsepti.",
    description: "Görseller stok kaynaklıdır; proje yılı temsili olarak belirtilmiştir. Mobilyalar, pencere önlerini ve geçiş yollarını açık bırakacak biçimde düşünülür. Ahşap, dokulu kumaş ve sade aydınlatma seçimleriyle günün farklı saatlerinde kullanılabilecek sakin bir atmosfer hedeflenir.",
    scope: [
      "Yerleşim planı",
      "Mobilya seçimi",
      "Renk ve doku çalışması",
      "Aydınlatma senaryosu"
    ],
    trustStatement: "Bu tasarım önerisinde yerleşim planı ile malzeme ve kullanım kararları birlikte değerlendirilir. Nihai çözümler, yerinde keşif ve proje gereksinimlerine göre belirlenir.",
    specifications: [
      {
        "label": "Mobilya",
        "value": "Dengeli oturma düzeni",
        "detail": "Sohbet mesafelerini ve rahat geçişleri gözeten yerleşim."
      },
      {
        "label": "Tekstil",
        "value": "Doğal dokulu kumaşlar",
        "detail": "Oturma alanına yumuşaklık ve malzemeler arasında süreklilik kazandıran seçimler."
      },
      {
        "label": "Işık",
        "value": "Katmanlı aydınlatma",
        "detail": "Okuma, dinlenme ve misafir ağırlama için farklı ışık seviyeleri."
      }
    ]
  },
  {
    slug: "ada-mutfak",
    title: "Ada Mutfak Tasarımı",
    category: "İç Mimarlık",
    location: "Konsept çalışma",
    year: "2024",
    image: "/images/projects/ada-mutfak.webp",
    images: [
      "/images/projects/ada-mutfak.webp",
      "/images/projects/ada-mutfak-galeri-2.webp",
      "/images/projects/ada-mutfak-galeri-3.webp"
    ],
    summary: "Hazırlık, depolama ve buluşma alanlarını aynı düzende birleştiren mutfak önerisi.",
    description: "Görseller stok kaynaklıdır; proje yılı temsili olarak belirtilmiştir. Ada çevresindeki hareket alanı, çalışma tezgahının sürekliliği ve sık kullanılan eşyalara erişim birlikte ele alınır. Bu konsept, mutfağın günlük yaşamın bir parçası olarak kullanılmasını destekleyen yalın detaylara odaklanır.",
    scope: [
      "Mutfak yerleşimi",
      "Dolap organizasyonu",
      "Tezgah seçimi",
      "Görev aydınlatması"
    ],
    trustStatement: "Bu tasarım önerisinde mutfak yerleşimi ile malzeme ve kullanım kararları birlikte değerlendirilir. Nihai çözümler, yerinde keşif ve proje gereksinimlerine göre belirlenir.",
    specifications: [
      {
        "label": "Tezgah",
        "value": "Kolay temizlenen yüzey",
        "detail": "Leke, ısı ve günlük bakım beklentilerine göre değerlendirilmesi gereken malzeme seçimi."
      },
      {
        "label": "Depolama",
        "value": "İşleve göre bölümlenme",
        "detail": "Hazırlık ve pişirme gereçlerini kullanım noktasına yakın tutan organizasyon."
      },
      {
        "label": "Ergonomi",
        "value": "Rahat dolaşım",
        "detail": "Kapak açılımları ve birden fazla kişinin kullanımı için planlanan geçişler."
      }
    ]
  },
  {
    slug: "sakin-yatak-odasi",
    title: "Sakin Yatak Odası",
    category: "Dekorasyon",
    location: "Konsept çalışma",
    year: "2023",
    image: "/images/projects/sakin-yatak-odasi.webp",
    images: [
      "/images/projects/sakin-yatak-odasi.webp",
      "/images/projects/sakin-yatak-odasi-galeri-2.webp",
      "/images/projects/sakin-yatak-odasi-galeri-3.webp"
    ],
    summary: "Yumuşak renkler ve dengeli ışıkla dinlenmeye odaklanan yatak odası konsepti.",
    description: "Görseller stok kaynaklıdır; proje yılı temsili olarak belirtilmiştir. Yatak çevresindeki geçişler, başucu kullanımı ve tekstil katmanları bir bütün olarak düşünülür. Görsel kalabalığı azaltan mobilyalar ve sıcak aydınlatma, gün sonunda sakinleşmeye uygun bir mekan önerir.",
    scope: [
      "Renk paleti",
      "Tekstil seçimi",
      "Başucu düzeni",
      "Dekoratif aydınlatma"
    ],
    trustStatement: "Bu tasarım önerisinde renk paleti ile malzeme ve kullanım kararları birlikte değerlendirilir. Nihai çözümler, yerinde keşif ve proje gereksinimlerine göre belirlenir.",
    specifications: [
      {
        "label": "Renk",
        "value": "Sıcak nötr tonlar",
        "detail": "Duvar ve tekstil arasında yumuşak geçişler kuran palet."
      },
      {
        "label": "Aydınlatma",
        "value": "Bağımsız başucu ışığı",
        "detail": "Okuma ihtiyacını genel aydınlatmadan ayrı karşılayan yaklaşım."
      },
      {
        "label": "Yerleşim",
        "value": "Açık geçişler",
        "detail": "Yatak ve depolama çevresinde rahat hareketi gözeten düzen."
      }
    ]
  },
  {
    slug: "dogal-dokulu-banyo",
    title: "Doğal Dokulu Banyo",
    category: "Dekorasyon",
    location: "Konsept çalışma",
    year: "2023",
    image: "/images/projects/dogal-dokulu-banyo.webp",
    images: [
      "/images/projects/dogal-dokulu-banyo.webp",
      "/images/projects/dogal-dokulu-banyo-galeri-2.webp",
      "/images/projects/dogal-dokulu-banyo-galeri-3.webp"
    ],
    summary: "Taş hissi veren yüzeyler ve sade detaylarla kurgulanan banyo yenileme fikri.",
    description: "Görseller stok kaynaklıdır; proje yılı temsili olarak belirtilmiştir. Lavabo çevresi, ayna ve depolama alanları günlük rutinleri kolaylaştıracak şekilde ele alınır. Islak ve kuru kullanım bölgelerinin ayrımı, temizlenebilir yüzeyler ve dengeli aydınlatma bu örnek tasarımın temel kararlarıdır.",
    scope: [
      "Banyo yerleşimi",
      "Kaplama seçimi",
      "Lavabo ünitesi",
      "Ayna aydınlatması"
    ],
    trustStatement: "Bu tasarım önerisinde banyo yerleşimi ile malzeme ve kullanım kararları birlikte değerlendirilir. Nihai çözümler, yerinde keşif ve proje gereksinimlerine göre belirlenir.",
    specifications: [
      {
        "label": "Kaplama",
        "value": "Taş dokulu yüzeyler",
        "detail": "Kayma direnci ve temizlik ihtiyacı birlikte değerlendirilerek yapılacak seçim."
      },
      {
        "label": "Islak hacim",
        "value": "Doğru katmanlaşma",
        "detail": "Su yalıtımı ve gider eğimlerinin uygulama projesinde çözülmesi yaklaşımı."
      },
      {
        "label": "Depolama",
        "value": "Kompakt lavabo ünitesi",
        "detail": "Günlük bakım ürünlerini düzenli ve erişilebilir tutan kullanım."
      }
    ]
  },
  {
    slug: "ortak-calisma-ofisi",
    title: "Ortak Çalışma Ofisi",
    category: "İç Mimarlık",
    location: "Konsept çalışma",
    year: "2022",
    image: "/images/projects/ortak-calisma-ofisi.webp",
    images: [
      "/images/projects/ortak-calisma-ofisi.webp",
      "/images/projects/ortak-calisma-ofisi-galeri-2.webp",
      "/images/projects/ortak-calisma-ofisi-galeri-3.webp"
    ],
    summary: "Ekip iletişimini ve bireysel odaklanmayı bir arada destekleyen ofis konsepti.",
    description: "Görseller stok kaynaklıdır; proje yılı temsili olarak belirtilmiştir. Çalışma masaları, kısa görüşme noktaları ve dinlenme alanları farklı kullanım yoğunluklarına göre düşünülür. Gün ışığından yararlanan yerleşim, kablo düzeni ve bitkisel dokunuşlar daha düzenli bir çalışma ortamı hedefler.",
    scope: [
      "Çalışma alanı planlama",
      "Ortak alan tasarımı",
      "Akustik yaklaşım",
      "Mobilya koordinasyonu"
    ],
    trustStatement: "Bu tasarım önerisinde çalışma alanı planlama ile malzeme ve kullanım kararları birlikte değerlendirilir. Nihai çözümler, yerinde keşif ve proje gereksinimlerine göre belirlenir.",
    specifications: [
      {
        "label": "Yerleşim",
        "value": "Esnek masa düzeni",
        "detail": "Ekip büyüklüğüne göre yeniden düzenlenebilen çalışma alanları."
      },
      {
        "label": "Akustik",
        "value": "Ses emici yüzey önerisi",
        "detail": "Konuşma sesini sınırlamak için tavan ve mobilyayla birlikte değerlendirilen çözümler."
      },
      {
        "label": "Altyapı",
        "value": "Düzenli kablo geçişleri",
        "detail": "Elektrik ve veri erişimini çalışma noktalarıyla buluşturan planlama."
      }
    ]
  },
  {
    slug: "butik-kafe",
    title: "Butik Kafe Konsepti",
    category: "Dekorasyon",
    location: "Konsept çalışma",
    year: "2021",
    image: "/images/projects/butik-kafe.webp",
    images: [
      "/images/projects/butik-kafe.webp",
      "/images/projects/butik-kafe-galeri-2.webp",
      "/images/projects/butik-kafe-galeri-3.webp"
    ],
    summary: "Sıcak malzemeler ve farklı oturma seçenekleriyle mahalle ölçeğinde bir buluşma alanı.",
    description: "Görseller stok kaynaklıdır; proje yılı temsili olarak belirtilmiştir. Girişten sipariş noktasına uzanan akış ve masa aralarındaki servis geçişleri birlikte değerlendirilir. Ahşap detaylar, yumuşak ışık ve küçük oturma grupları, kısa molalardan uzun sohbetlere uzanan kullanım senaryoları sunar.",
    scope: [
      "Konsept geliştirme",
      "Oturma düzeni",
      "Dekoratif malzeme seçimi",
      "Servis akışı"
    ],
    trustStatement: "Bu tasarım önerisinde konsept geliştirme ile malzeme ve kullanım kararları birlikte değerlendirilir. Nihai çözümler, yerinde keşif ve proje gereksinimlerine göre belirlenir.",
    specifications: [
      {
        "label": "Dolaşım",
        "value": "Açık servis güzergahı",
        "detail": "Müşteri ve servis hareketlerinin kesişimini azaltan yerleşim."
      },
      {
        "label": "Mobilya",
        "value": "Farklı oturma seçenekleri",
        "detail": "Tek kişilik mola ve grup kullanımını karşılayan masa düzeni."
      },
      {
        "label": "Atmosfer",
        "value": "Sıcak vurgu ışıkları",
        "detail": "Masa yüzeyleri ve dekoratif detayları öne çıkaran aydınlatma."
      }
    ]
  },
  {
    slug: "restoran-ic-mekan",
    title: "Restoran İç Mekan Konsepti",
    category: "İç Mimarlık",
    location: "Konsept çalışma",
    year: "2021",
    image: "/images/projects/restoran-ic-mekan.webp",
    images: [
      "/images/projects/restoran-ic-mekan.webp",
      "/images/projects/restoran-ic-mekan-galeri-2.webp",
      "/images/projects/restoran-ic-mekan-galeri-3.webp"
    ],
    summary: "Malzeme, ışık ve masa düzeninin birlikte şekillendirdiği davetkar bir yemek mekanı.",
    description: "Görseller stok kaynaklıdır; proje yılı temsili olarak belirtilmiştir. Karşılama, yemek ve servis alanları arasında anlaşılır bir düzen önerilir. Konseptte masa mahremiyeti, akustik rahatlık ve bakım kolaylığı öne çıkar; farklı grup büyüklüklerine uyum sağlayan bir yerleşim hedeflenir.",
    scope: [
      "Mekan organizasyonu",
      "Masa yerleşimi",
      "Aydınlatma tasarımı",
      "Malzeme paleti"
    ],
    trustStatement: "Bu tasarım önerisinde mekan organizasyonu ile malzeme ve kullanım kararları birlikte değerlendirilir. Nihai çözümler, yerinde keşif ve proje gereksinimlerine göre belirlenir.",
    specifications: [
      {
        "label": "Işık",
        "value": "Masa odaklı aydınlatma",
        "detail": "Yemek alanında konforlu görüş ve sıcak atmosfer sağlayan ışık dağılımı."
      },
      {
        "label": "Akustik",
        "value": "Dengeli yüzey kullanımı",
        "detail": "Sert yüzeylerin etkisini tekstil ve ses emici elemanlarla dengeleme önerisi."
      },
      {
        "label": "Servis",
        "value": "Erişilebilir geçişler",
        "detail": "Masalara erişimi kolaylaştıran, dolaşımı açık tutan düzen."
      }
    ]
  },
  {
    slug: "bahce-teras",
    title: "Bahçe ve Teras Düzenlemesi",
    category: "İnşaat",
    location: "Konsept çalışma",
    year: "2020",
    image: "/images/projects/bahce-teras.webp",
    images: [
      "/images/projects/bahce-teras.webp",
      "/images/projects/bahce-teras-galeri-2.webp",
      "/images/projects/bahce-teras-galeri-3.webp"
    ],
    summary: "Konutun açık alan kullanımını güçlendiren teras ve bahçe ilişkisi.",
    description: "Görseller stok kaynaklıdır; proje yılı temsili olarak belirtilmiştir. Bu konsept, kapalı yaşam alanlarının dışarıya doğru devam etmesini sağlayan oturma ve geçiş bölgelerine odaklanır. Dış ortam koşullarına uygun malzemeler, yüzey suyu tahliyesi ve gölgeleme, tasarımın uygulamaya dönük başlıklarını oluşturur.",
    scope: [
      "Açık alan planlama",
      "Teras kaplaması",
      "Gölgeleme önerisi",
      "Peyzaj koordinasyonu"
    ],
    trustStatement: "Bu tasarım önerisinde açık alan planlama ile malzeme ve kullanım kararları birlikte değerlendirilir. Nihai çözümler, yerinde keşif ve proje gereksinimlerine göre belirlenir.",
    specifications: [
      {
        "label": "Zemin",
        "value": "Dış mekana uygun kaplama",
        "detail": "Yağış, güneş ve kayma direnci göz önünde bulundurularak seçilecek yüzey."
      },
      {
        "label": "Su yönetimi",
        "value": "Eğim ve drenaj",
        "detail": "Yüzey suyunu yapıdan uzaklaştırmaya yönelik proje yaklaşımı."
      },
      {
        "label": "Konfor",
        "value": "Gölgeli dinlenme alanı",
        "detail": "Güneş yönü ve mevsimsel kullanım süresine göre düşünülen yerleşim."
      }
    ]
  },

  {
    slug: "konut-projesi",
    title: "Konut Projesi",
    category: "İnşaat",
    location: "İstanbul",
    year: "2025",
    image: "/images/projects/konut-1.webp",
    images: ["/images/projects/konut-1.webp", "/images/projects/konut-2.webp", "/images/projects/konut-3.webp"],
    comparison: {
      progressImage: "/images/projects/konut-surec.webp",
      completedImage: "/images/projects/konut-1.webp",
    },
    summary: "Çağdaş yaşam ihtiyaçlarına göre planlanan, işlev ve estetiği bir araya getiren bütüncül konut uygulaması.",
    description: "Proje; ilk keşif ve planlama aşamasından malzeme seçimlerine, saha koordinasyonundan son uygulama detaylarına kadar tek elden yürütüldü. Doğal dokular, dengeli ışık ve uzun ömürlü çözümler tasarımın temelini oluşturdu.",
    scope: ["Proje planlama", "Kaba ve ince inşaat", "Saha koordinasyonu", "Anahtar teslim uygulama"],
    trustStatement: "Güvenli bir taşıyıcı sistem, doğru malzeme seçimi ve kontrollü uygulama; zamana karşı değerini koruyan bir yaşam alanının temelidir.",
    specifications: [
      { label: "Taşıyıcı sistem", value: "Betonarme yapı", detail: "Statik proje kararlarıyla uyumlu, saha kontrolleri gözetilerek uygulanan yapı sistemi." },
      { label: "Zemin", value: "Meşe dokulu parke", detail: "Sıcak bir atmosfer, dengeli renk geçişi ve günlük kullanıma uygun dayanım." },
      { label: "Islak hacimler", value: "Neme dayanıklı yüzeyler", detail: "Suya açık bölgelerde doğru katmanlaşma ve uzun ömürlü birleşim detayları." },
      { label: "Kalite yaklaşımı", value: "Aşamalı saha kontrolü", detail: "Kritik imalatların kapanmadan önce kontrol edildiği planlı uygulama süreci." },
    ],
  },
  {
    slug: "ic-mekan-tasarimi",
    title: "İç Mekan Tasarımı",
    category: "İç Mimarlık",
    location: "İstanbul",
    year: "2025",
    image: "/images/projects/ic-mekan-1.webp",
    images: ["/images/projects/ic-mekan-1.webp", "/images/projects/ic-mekan-2.webp", "/images/projects/ic-mekan-3.webp"],
    summary: "Mekanın karakterini güçlendiren, sakin ve zamansız bir iç mimari yaklaşım.",
    description: "Kullanıcı alışkanlıkları merkeze alınarak dolaşım, depolama ve aydınlatma kararları birlikte ele alındı. Renk ve malzeme paleti, mekanlar arasında görsel süreklilik oluşturacak şekilde kurgulandı.",
    scope: ["Konsept tasarım", "Mekan planlama", "Malzeme seçimi", "Uygulama takibi"],
    trustStatement: "Estetik kararları yalnızca görünüşe göre değil; ergonomi, bakım kolaylığı ve malzemenin kullanım ömrüyle birlikte ele aldık.",
    specifications: [
      { label: "Zemin", value: "Doğal meşe karakteri", detail: "Mekana sıcaklık veren, mobilya ve duvar tonlarıyla dengeli parke seçimi." },
      { label: "Aydınlatma", value: "Katmanlı ışık planı", detail: "Genel, görev ve vurgu ışıklarının göz konforunu destekleyecek biçimde dengelenmesi." },
      { label: "Sabit mobilya", value: "Mekana özel üretim", detail: "Ölçü kaybını azaltan, depolama ihtiyacına göre detaylandırılmış çözümler." },
      { label: "Uygulama", value: "Detay ve numune kontrolü", detail: "Renk, doku ve birleşimlerin imalat öncesinde birlikte değerlendirilmesi." },
    ],
  },
  {
    slug: "mekan-yenileme",
    title: "Mekan Yenileme",
    category: "Dekorasyon",
    location: "İstanbul",
    year: "2024",
    image: "/images/projects/yenileme-1.webp",
    images: ["/images/projects/yenileme-1.webp", "/images/projects/yenileme-2.webp", "/images/projects/yenileme-3.webp"],
    summary: "Mevcut yapının değerlerini koruyarak daha aydınlık, kullanışlı ve güncel hale getirilen yenileme projesi.",
    description: "Mekandaki kullanılabilir elemanlar korunurken yüzeyler, sabit mobilyalar ve aydınlatma sistemi yenilendi. Uygulama programı, günlük yaşamı en az etkileyecek biçimde aşamalı olarak planlandı.",
    scope: ["Keşif ve ölçülendirme", "Dekorasyon", "Özel imalat", "Uygulama yönetimi"],
    trustStatement: "Mevcut yapıyı doğru okuyarak yalnızca gerekli müdahaleleri yaptık; estetik yenilenmeyi sağlamlık ve kullanım konforuyla birleştirdik.",
    specifications: [
      { label: "Mevcut yapı", value: "Yerinde durum analizi", detail: "Uygulama öncesinde yüzeylerin ve tesisat geçişlerinin kontrollü biçimde değerlendirilmesi." },
      { label: "Zemin", value: "Dayanıklı lamine yüzey", detail: "Yoğun kullanıma uygun, kolay bakım sağlayan ve doğal doku hissini koruyan seçim." },
      { label: "Duvar yüzeyleri", value: "Silinebilir mat boya", detail: "Işığı yumuşak yansıtan, bakım ve temizlik kolaylığı sağlayan yüzey yaklaşımı." },
      { label: "Teslim", value: "Son kontrol listesi", detail: "İmalatların işlev, yüzey kalitesi ve detay bütünlüğü açısından gözden geçirilmesi." },
    ],
  },
  {
    slug: "yasam-alani-uygulamasi",
    title: "Yaşam Alanı Uygulaması",
    category: "İnşaat",
    location: "İstanbul",
    year: "2024",
    image: "/images/projects/yasam-1.webp",
    images: ["/images/projects/yasam-1.webp", "/images/projects/yasam-2.webp", "/images/projects/yasam-3.webp"],
    comparison: {
      progressImage: "/images/projects/yasam-surec-clean.webp",
      completedImage: "/images/projects/yasam-2.webp",
    },
    summary: "Günlük yaşamın farklı anlarına uyum sağlayan, konforlu ve dayanıklı bir yaşam alanı.",
    description: "Yapısal gereksinimler ve iç mekan kararları eş zamanlı geliştirilerek uygulama sürecindeki kayıplar azaltıldı. Detay çözümlerinde kolay bakım, dayanıklılık ve kullanıcı konforu önceliklendirildi.",
    scope: ["İnşaat uygulaması", "Teknik koordinasyon", "İnce işler", "Kalite kontrol"],
    trustStatement: "Yapısal güvenlikten son yüzey kalitesine kadar her katmanı bir bütün olarak ele alarak sakin, sağlam ve uzun ömürlü bir mekan oluşturduk.",
    specifications: [
      { label: "Yapı sistemi", value: "Betonarme uygulama", detail: "Proje disiplinleriyle koordineli ve uygulama sırası kontrol edilerek yürütülen sistem." },
      { label: "Isı ve ses", value: "Konfor odaklı katmanlar", detail: "Mekanın kullanım senaryosuna göre ısı ve ses geçişini azaltmaya yönelik detaylar." },
      { label: "Zemin", value: "Ahşap dokulu parke", detail: "Doğal görünüm ile günlük kullanımdaki dayanıklılığı dengeleyen zemin tercihi." },
      { label: "İnce işçilik", value: "Birleşim detayı kontrolü", detail: "Süpürgelik, kapı, zemin ve duvar birleşimlerinde temiz bitiş yaklaşımı." },
    ],
  },
  {
    slug: "ofis-duzenlemesi",
    title: "Ofis Düzenlemesi",
    category: "İç Mimarlık",
    location: "İstanbul",
    year: "2024",
    image: "/images/projects/ofis-1.webp",
    images: ["/images/projects/ofis-1.webp", "/images/projects/ofis-2.webp", "/images/projects/ofis-3.webp"],
    summary: "Odaklanma, iletişim ve esnek çalışma ihtiyaçlarını dengeleyen çağdaş ofis düzenlemesi.",
    description: "Çalışma alanları, toplantı noktaları ve ortak kullanımlar akustik ve görsel konfor gözetilerek ayrıştırıldı. Kurumsal kimliği destekleyen yalın bir malzeme ve renk dili oluşturuldu.",
    scope: ["İhtiyaç analizi", "Yerleşim planı", "Mobilya tasarımı", "Uygulama danışmanlığı"],
    trustStatement: "Profesyonel görünümü; çalışan konforu, akustik ihtiyaçlar ve yoğun kullanıma dayanıklı malzemelerle destekledik.",
    specifications: [
      { label: "Zemin", value: "Ticari kullanıma uygun yüzey", detail: "Yoğun sirkülasyonda bakım kolaylığı ve uzun kullanım ömrü gözetilerek seçilen kaplama." },
      { label: "Akustik", value: "Ses kontrolü", detail: "Toplantı ve çalışma alanları arasında dikkat dağıtan ses geçişini azaltan çözümler." },
      { label: "Aydınlatma", value: "Çalışma konforu", detail: "Ekran kullanımında parlamayı azaltan, dengeli ve homojen ışık yerleşimi." },
      { label: "Mobilya", value: "Ergonomik ve modüler", detail: "Değişen ekip ihtiyaçlarına uyarlanabilen ölçü ve yerleşim yaklaşımı." },
    ],
  },
  {
    slug: "ozel-detay-calismasi",
    title: "Özel Detay Çalışması",
    category: "Dekorasyon",
    location: "İstanbul",
    year: "2023",
    image: "/images/projects/detay-1.webp",
    images: ["/images/projects/detay-1.webp", "/images/projects/detay-2.webp", "/images/projects/detay-3.webp"],
    summary: "Mekana özgü ölçü, malzeme ve işçilik kararlarıyla geliştirilen özel detay uygulaması.",
    description: "Tasarım fikri, üretilebilir detaylara dönüştürülerek numune ve imalat aşamaları yakından takip edildi. Farklı malzemelerin birleşim noktalarında temiz ve uzun ömürlü çözümler geliştirildi.",
    scope: ["Detay tasarımı", "Malzeme araştırması", "Özel üretim", "Montaj kontrolü"],
    trustStatement: "İyi bir detay hem yakından güzel görünür hem de yıllar boyunca görevini sorunsuz sürdürür; tasarım ve üretimi bu anlayışla buluşturduk.",
    specifications: [
      { label: "Malzeme", value: "Birbiriyle uyumlu yüzeyler", detail: "Renk, doku, genleşme ve bakım özellikleri birlikte değerlendirilerek yapılan seçim." },
      { label: "Üretim", value: "Ölçüye özel imalat", detail: "Yerinde alınan ölçülere ve uygulama toleranslarına göre hazırlanan parçalar." },
      { label: "Birleşimler", value: "Temiz bitiş detayları", detail: "Görünür bağlantıları azaltan ve malzeme geçişlerini sadeleştiren çözüm yaklaşımı." },
      { label: "Kontrol", value: "Numune ve montaj takibi", detail: "Seri üretimden önce numune onayı, montaj sırasında hizalama ve yüzey kontrolü." },
    ],
  },
];

export const categories = ["Tümü", "İnşaat", "Dekorasyon", "İç Mimarlık"] as const;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
