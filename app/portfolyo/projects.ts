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
    slug: "konut-projesi",
    title: "Konut Projesi",
    category: "İnşaat",
    location: "İstanbul",
    year: "2025",
    image: "/images/projects/konut-1.jpg",
    images: ["/images/projects/konut-1.jpg", "/images/projects/konut-2.jpg", "/images/projects/konut-3.jpg"],
    comparison: {
      progressImage: "/images/projects/konut-surec.jpg",
      completedImage: "/images/projects/konut-1.jpg",
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
    image: "/images/projects/ic-mekan-1.jpg",
    images: ["/images/projects/ic-mekan-1.jpg", "/images/projects/ic-mekan-2.jpg", "/images/projects/ic-mekan-3.jpg"],
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
    image: "/images/projects/yenileme-1.jpg",
    images: ["/images/projects/yenileme-1.jpg", "/images/projects/yenileme-2.jpg", "/images/projects/yenileme-3.jpg"],
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
    image: "/images/projects/yasam-1.jpg",
    images: ["/images/projects/yasam-1.jpg", "/images/projects/yasam-2.jpg", "/images/projects/yasam-3.jpg"],
    comparison: {
      progressImage: "/images/projects/yasam-surec-clean.png",
      completedImage: "/images/projects/yasam-2.jpg",
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
    image: "/images/projects/ofis-1.jpg",
    images: ["/images/projects/ofis-1.jpg", "/images/projects/ofis-2.jpg", "/images/projects/ofis-3.jpg"],
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
    image: "/images/projects/detay-1.jpg",
    images: ["/images/projects/detay-1.jpg", "/images/projects/detay-2.jpg", "/images/projects/detay-3.jpg"],
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
