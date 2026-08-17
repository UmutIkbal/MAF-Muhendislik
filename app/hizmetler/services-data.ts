export type Service = {
  slug: string;
  title: string;
  detailTitle: string;
  summary: string;
  intro: string;
  process: string;
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "insaat",
    title: "İnşaat",
    detailTitle: "İnşaat Tasarım ve Uygulama",
    summary: "Projelerinizi planlı, sağlam ve titiz bir uygulama süreciyle hayata geçiriyoruz.",
    intro: "MAF Mühendislik olarak, ihtiyaçlarınıza uygun yapı çözümlerini ilk fikirden anahtar teslim uygulamaya kadar bütüncül bir yaklaşımla yönetiyoruz.",
    process: "Süreci keşif ve ihtiyaç analizi, proje planlama, uygulama koordinasyonu ve kalite kontrol adımlarıyla yürütüyoruz. Her aşamada açık iletişim ve teknik doğruluğu önceliklendiriyoruz.",
    image: "/stokfotro.jpg",
    imageAlt: "İnşaat hizmeti",
  },
  {
    slug: "dekorasyon",
    title: "Dekorasyon",
    detailTitle: "Dekorasyon Tasarım ve Uygulama",
    summary: "Mekanların karakterini renk, malzeme ve detaylarla yeniden yorumluyoruz.",
    intro: "Her mekanın kendine özgü bir hikayesi olduğuna inanıyor; bu hikayeyi doğru malzeme, doku ve renk seçimleriyle görünür kılıyoruz.",
    process: "Keşif, tarz belirleme, malzeme seçimi ve uygulama aşamalarını birlikte planlıyor; tasarım kararlarını mekanın ihtiyaçlarıyla dengeliyoruz.",
    image: "/stokfotro.jpg",
    imageAlt: "Dekorasyon hizmeti",
  },
  {
    slug: "ic-mimarlik",
    title: "İç Mimarlık",
    detailTitle: "İç Mimarlık Tasarım ve Uygulama",
    summary: "Yaşam alanlarınızı estetik ve fonksiyonel tasarımlarla dönüştürüyoruz.",
    intro: "MAF Mühendislik olarak, 20xx yılından bu yana İstanbul'da yaşam ve çalışma alanlarını sanat eserlerine dönüştürüyoruz. Her projeye özgün bir bakış açısıyla yaklaşarak, mekanların ruhunu yansıtan tasarımlar oluşturuyoruz.",
    process: "Projelerimizi dört ana aşamada gerçekleştiriyoruz: Keşif ve analiz, konsept geliştirme, detaylı tasarım ve uygulama. Her aşamada müşterilerimizle yakın iş birliği içinde çalışarak, hayallerini gerçeğe dönüştürüyoruz.",
    image: "/stokfotro.jpg",
    imageAlt: "İç mimarlık hizmeti",
  },
];
