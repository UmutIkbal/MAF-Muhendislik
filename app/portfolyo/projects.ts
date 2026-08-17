export type Project = {
  slug: string;
  title: string;
  category: "İnşaat" | "Dekorasyon" | "İç Mimarlık";
  location: string;
  year: string;
  image: string;
  images: string[];
  summary: string;
  description: string;
  scope: string[];
};

export const projects: Project[] = [
  {
    slug: "konut-projesi",
    title: "Konut Projesi",
    category: "İnşaat",
    location: "İstanbul",
    year: "2025",
    image: "/stokfotro.jpg",
    images: ["/stokfotro.jpg", "/stokfotro.jpg", "/stokfotro.jpg"],
    summary: "Çağdaş yaşam ihtiyaçlarına göre planlanan, işlev ve estetiği bir araya getiren bütüncül konut uygulaması.",
    description: "Proje; ilk keşif ve planlama aşamasından malzeme seçimlerine, saha koordinasyonundan son uygulama detaylarına kadar tek elden yürütüldü. Doğal dokular, dengeli ışık ve uzun ömürlü çözümler tasarımın temelini oluşturdu.",
    scope: ["Proje planlama", "Kaba ve ince inşaat", "Saha koordinasyonu", "Anahtar teslim uygulama"],
  },
  {
    slug: "ic-mekan-tasarimi",
    title: "İç Mekan Tasarımı",
    category: "İç Mimarlık",
    location: "İstanbul",
    year: "2025",
    image: "/stokfotro.jpg",
    images: ["/stokfotro.jpg", "/stokfotro.jpg", "/stokfotro.jpg"],
    summary: "Mekanın karakterini güçlendiren, sakin ve zamansız bir iç mimari yaklaşım.",
    description: "Kullanıcı alışkanlıkları merkeze alınarak dolaşım, depolama ve aydınlatma kararları birlikte ele alındı. Renk ve malzeme paleti, mekanlar arasında görsel süreklilik oluşturacak şekilde kurgulandı.",
    scope: ["Konsept tasarım", "Mekan planlama", "Malzeme seçimi", "Uygulama takibi"],
  },
  {
    slug: "mekan-yenileme",
    title: "Mekan Yenileme",
    category: "Dekorasyon",
    location: "İstanbul",
    year: "2024",
    image: "/stokfotro.jpg",
    images: ["/stokfotro.jpg", "/stokfotro.jpg", "/stokfotro.jpg"],
    summary: "Mevcut yapının değerlerini koruyarak daha aydınlık, kullanışlı ve güncel hale getirilen yenileme projesi.",
    description: "Mekandaki kullanılabilir elemanlar korunurken yüzeyler, sabit mobilyalar ve aydınlatma sistemi yenilendi. Uygulama programı, günlük yaşamı en az etkileyecek biçimde aşamalı olarak planlandı.",
    scope: ["Keşif ve ölçülendirme", "Dekorasyon", "Özel imalat", "Uygulama yönetimi"],
  },
  {
    slug: "yasam-alani-uygulamasi",
    title: "Yaşam Alanı Uygulaması",
    category: "İnşaat",
    location: "İstanbul",
    year: "2024",
    image: "/stokfotro.jpg",
    images: ["/stokfotro.jpg", "/stokfotro.jpg", "/stokfotro.jpg"],
    summary: "Günlük yaşamın farklı anlarına uyum sağlayan, konforlu ve dayanıklı bir yaşam alanı.",
    description: "Yapısal gereksinimler ve iç mekan kararları eş zamanlı geliştirilerek uygulama sürecindeki kayıplar azaltıldı. Detay çözümlerinde kolay bakım, dayanıklılık ve kullanıcı konforu önceliklendirildi.",
    scope: ["İnşaat uygulaması", "Teknik koordinasyon", "İnce işler", "Kalite kontrol"],
  },
  {
    slug: "ofis-duzenlemesi",
    title: "Ofis Düzenlemesi",
    category: "İç Mimarlık",
    location: "İstanbul",
    year: "2024",
    image: "/stokfotro.jpg",
    images: ["/stokfotro.jpg", "/stokfotro.jpg", "/stokfotro.jpg"],
    summary: "Odaklanma, iletişim ve esnek çalışma ihtiyaçlarını dengeleyen çağdaş ofis düzenlemesi.",
    description: "Çalışma alanları, toplantı noktaları ve ortak kullanımlar akustik ve görsel konfor gözetilerek ayrıştırıldı. Kurumsal kimliği destekleyen yalın bir malzeme ve renk dili oluşturuldu.",
    scope: ["İhtiyaç analizi", "Yerleşim planı", "Mobilya tasarımı", "Uygulama danışmanlığı"],
  },
  {
    slug: "ozel-detay-calismasi",
    title: "Özel Detay Çalışması",
    category: "Dekorasyon",
    location: "İstanbul",
    year: "2023",
    image: "/stokfotro.jpg",
    images: ["/stokfotro.jpg", "/stokfotro.jpg", "/stokfotro.jpg"],
    summary: "Mekana özgü ölçü, malzeme ve işçilik kararlarıyla geliştirilen özel detay uygulaması.",
    description: "Tasarım fikri, üretilebilir detaylara dönüştürülerek numune ve imalat aşamaları yakından takip edildi. Farklı malzemelerin birleşim noktalarında temiz ve uzun ömürlü çözümler geliştirildi.",
    scope: ["Detay tasarımı", "Malzeme araştırması", "Özel üretim", "Montaj kontrolü"],
  },
];

export const categories = ["Tümü", "İnşaat", "Dekorasyon", "İç Mimarlık"] as const;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
