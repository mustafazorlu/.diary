# Siber Güvenlik Temelleri Sınavı Notları

## Sanal makine nedir?

Sanallaştırma, fiziksel bir konak bilgisayardan (örneğin kendi kişisel bilgisayarınız) veya bir uzak sunucudan (örneğin bir bulut sağlayıcısı veri merkezindeki bir sunucu) ayrılmış miktarlarda CPU, bellek ve depolama ile bir bilgisayarın yazılım tabanlı veya sanal bir sürümünü oluşturma işlemidir. Sanal makine gerçek bir bilgisayar gibi hareket eden bilgisayar dosyasıdır. İşletim sistemlerini çalıştırır. Sanal makine, sistemin geri kalanından bölümlenmiştir, yani bir VM içinkide yazılım, ana bilgisayarın işletim sistemine müdahale edemez.

## Sanal makineler ne amaçla kullanılır?

-   Uygulamaları bulutta derleme ve dağıtma
-   Beta sürümleri dahil olmak üzere yeni bir işletim sistemi (OS) deneme
-   Geliştiricilerin geliştirme-test senaryolarını çalıştırmasını kolaylaştırmak ve hızlandırmak için yeni bir ortam oluşturma
-   Mevcut işletim sisteminizi yedekleme
-   Yazılım ve uygulamaları, başlangıçta amaçlandıkları işletim sistemlerinde çalıştırma

## Sanal makinelerin avantajları nelerdir?

-   Maliyet tasarrufu
-   Çeviklik ve hız
-   Azaltılmış kapalı kalma süresi
-   Ölçeklenebilirlik
-   Güvenlik avantajları

### Bazı sanal makine uygulamaları:

**VMware Virtual Machine:** Sanallaştırma alanında önde gelen şirketlerden biridir.VMware Workstation, VMware Player ve vSphere gibi ürünler aracılığıyla kullanılır.

**Microsoft Hyper-V :** Microsoft tarafından geliştirilmiştir. Windows Server işletim sistemlerinde ve Windows 10 Pro, Enterprise ve Education sürümlerinde bulunabilir. Windows ekosistemini tercih edenler için uygundur.

**Oracle VirtualBox:** Oracle'ın geliştirdiği ücretsiz açık kaynaklı bir sanallaştırma çözümüdür. VirtualBox, çeşitli işletim sistemlerini destekler ve kullanımı kolay bir arayüze sahiptir.

**KVM (Kernel-based Virtual Machine):** KVM Linux işletim sistemlerine entegre edilmiş bir sanallaştırma çözümüdür.Açık kaynaklıdır.

**Xen:** Bulut altyapılarında sıkça kullanılan açık kaynaklı bir sanallaştırma çözümüdür.

## Neden Kali Linux?

Kali Linux, siber güvenlik ve penetrasyon testi gibi bilgisayar güvenliği alanlarında çalışan profesyoneller, etik hackerlar ve güvenlik uzmanları tarafından sıklıkla kullanılan bir işletim sistemidir.Kali Linux'un başlıca tercih edilme sebepleri şunlardır:

-   Önceden yüklenmiş güvenlik araçları
-   Açık kaynak ve ücretsiz
-   Penetrasyon testi ve etik hacker eğitimi uygunluğu
-   Aktif topluluk desteği
-   Kapsamlı belgeler ve eğitim kaynakları
-   Taşınabilirlik ve esneklik
-   Güncellenmiş güvenlik paketleri

### Kali Linux alternatifleri:

**Parrot Security** Kali'ye benzer. Siber güvenlik ve penetrasyon testleri için hazırlanmıştır. Arayüzüyle dikkat çeker.

**BlackArch Linux** Linux tabanlı olan BlackArch, siber güvenlik araçları ile yüklü bir işletim sistemidir. Esnektir.

**BackBox** Ubuntu tabanlı olan BackBox, yine aynı amaçlar için hazırlanmıştır. Önceden yüklenmiş bir çok araca sahiptir.

**ArchStrike** Arch Linux tabanlı olan ArchStrike, güvenlik testleri ve penetrasyon testi için tasarlanmış bir işletim sistemidir. Rolling Release yapısıyla sürekli güncel kalır.

**Sans Investigative Forensic Toolkit** SANS enstitüsü tarafından geliştirilen, dijital forensik ve olay yanıtı için optimize edilmiş bir işletim sistemidir.

**Security Onion** Ağ güvenliği, IDS, Network Security Monitoring ve log yönetimi gibi özelliklere odaklanan Linux dağıtımıdır.

**Whonix** Kullanıcı gizliliğini korumak ve anonim kalmasını yardımcı olmak için tasarlanmış bir işletim sistemidir. Tor ağı üzerinden internet trafiğini yönlendirir ve kullanıcıya izole bir çevre sunar.

## Protokol kavramı

Protokol;

-   İletişimi yönetmek amacıyla konulmuş kurallar bütünü
-   Dillere benzerlik gösterir
-   Standart arayüzüyle ürünleriyle birbiriyle uyumlu çalışması hedefi

IP: Bilgisayar ve yönlendiricilerin iletişimi için ortak ağ protokolü

### OSI Referans Modeli

**Uygulama** Kullanıcı etkileşimli uygulamalar, HTTP, SMTP

**Sunu** Veri formatlarının birbirine dönüşümü, ASCII, MP3, JPG

**Oturum** Soket açma, oturum kurma, SQL, RPC

**Taşıma** Hata ve akış kontrolü, TCP, UDP

**Ağ** Uçtan uca iletişim, sanal adresleme, IP

**Veri Bağı** Ortama erişim, Ethernet, Wireless

**Fiziksel** İkili iletim, koaksiyel, UTP, STP ve fiber kablolar

### Kali Snapshot almak

Bir bilgisayarın, sanal makinenin veya bir dosya sisteminin belli bir anında bulunan durumunu dondurmak ve daha sonra geri yüklemek için kullanılabilir.

Terminalde gördüğümüz işaretler:

-   “$” :kullanıcı olduğunuzu gösterir.
-   “#”: root admin olduğunu gösterir.
-   “~”:kullanıcının home dizinini ifade eder.

### Sık kullanılan Kali Linux komutları

-   **--help** komutun tüm parametrelerini gösterir
-   **setxkbmap** klavyeyi türkçeye dönüştürür ve her seferinde yapılır
-   **pwd** hangi dizin içerisindeysek onu gösterir
-   **ls** aktif klasördeki tüm dosya ve klasörleri listeler
-   **clear** terminal ekranını temizlenmesini sağlar
-   **cd** dizinler arası geçiş yapmayı sağlar
-   **cd ..** bir üst dizine gider
-   **touch** dosya oluşturmak için kullanılır
-   **mkdir** yeni klasör oluşturmak için kullanılır
-   **uname -a** işletim sistemi hakkında bilgi almamızı sağlar
-   **history** terminal geçmişini gösterir
-   **ls -l** aktif klasördeki dosya ve klasörlerin özelliklerini gösterir
-   **ls -a** aktif klasördeki gizli dosyaları gösterir
-   **ls -la** aktif klasördeki dosya ve klasörleri listeler
-   **mkdir -p** oluşturulan klasörün üst klasörlerini de oluşturur
-   **rm** dosya ve klasör silmek için kullanılır, dizin dolu iken silme işlemi yapmaz
-   **rm -rf** zorla siler dizin dolu olsa da olmasa da silme işlemini gerçekleştirir tehlikelidir geri dönüşü yoktur
-   **rmdir** içi boş klasörü siler
-   **cat** dosya içerisinde okuma yapmamızı sağlar
-   **cat -n** satır numaraları ile ekrana yazdırılır
-   **cat -E** satır sonlarınını işaretleyerek okuma kolaylığı sağlar
-   **tac** içeriği tersten yazdırır
-   **cp** kopyalamaya yarar
-   **cp -R** alt dizinle birlikte kopyalama yapmamızı sağlar yani içi dolu olan bir klasörü kopyalamamızı sağlar
-   **mv** dosya ve klasörleri taşımak ve yeniden adlandırmak için kullanılır
-   **head** verilen dosyanın ilk 10 satırını görmemizi sağlar "-n" parametresi ile istenilen satır sayısını görebiliriz
-   **nano** bir test editör komutudur yani metin düzenleyicisidir, dosyanın içerisinde herhangi bir metin yazabilir, düzenleyebilir ve istediğimiz şekilde adlandırabiliriz. Nanodan çıkmak için ctrl + x kullanılır. Metin belgesinin adını değiştirmek için ctrl + o kullanılır. Dosya içerisinde herhangi bir kelimeyi aramak için ise ctrl + w kullanılır ve aynı kullanıldığı yerlere geçiş için alt + w kullanılır.
-   **Vi** test editörüdür
-   **more** terminal penceresine sığmayan metinleri daha rahat okumamızı sağlar
-   **nl** boş olmayan satırlara satır numarası ekleyen komuttur

### Sistem dosyaları ne anlama gelir?

-   **/bin** olması şart komut dosyaları içerir
-   **/boot** başlangıç için gerekli dosyalar bulundurur
-   **/dev** donanım dosyaları vardır
-   **/etc** sistem ayarlarını barındırır
-   **/lib** kütüphane dosyaları ve kernek modülleri bulunur
-   **/media** kaldırılabilir aygıtların cd-rom flash bellek sisteme eklendiği klasördür
-   **/mnt** bir dosya sistemini geçici olarak çalıştırabilir dosyaları tutar
-   **/opt** ekstra programların kurulması içindir
-   **/sbin** sistemi yöneticisiyle kurulması içindir
-   **/srv** sistemin sunduğu hizmetlerle alakalıdır
-   **/tmp** geçici dosyaları tutmak içindir
-   **/usr** ikincil bir hiyerarşi
-   **/var** değişken verileri saklar

### Siber saldırı hedefleri

Kimliği ilk aşamada belirsiz aktörler tarafından belli veya belirsiz zafiyetere sahip sistemlere yapılan izinsiz erişim, ele geçirme, bozma, servis dışı bırakma gibi saldırıların tümü.

-   Cihaz ifşası
-   Servis kesintileri
-   Veri kaçırma
-   Kötücül veri enjeksiyonu
-   Gelişmiş siber tehditler

### Aktörler göre siber saldırılar

-   Beyaz şapka hackerlar
-   Gri şapka hackerlar
-   Siyah şapka hackerlar
-   Paralı siber gruplar
-   Milliyetçi hackerlar
-   Organize ya da organize olmayan suçlular
-   Hacktivistler
-   Devletler
-   Script Kiddieler
-   İç tehditler

### Saldırı yöntemine göre siber saldırılar

-   Phishing attacks
-   SQL injection attacks
-   **Cross-site scripting (XSS)** genellikle web uygulamarını hedef alan bir saldırı türüdür. Bu saldırıda saldırganlar, kullanıcının tarayıcısına zararlı bir betik (script) enjekte ederek kullanıcının tarayıcısında çalıştırmak üzere tasarlanmış kodları eklemeye çalışırlar.
-   **Man in the middle (MITM) attacks** ARP açığını ortada köprü şeklinde kullanmaya bu saldırıyı örnek verebiliriz. Bir iletişim kanalındaki veri trafiğini izinsiz bir şekilde ele geçiren ve kontrol eden bir saldırı türüdür. Bu saldırı iletişimde bulunan iki taraf arasına girip kendisini her iki taraf için de karşı tarafla iletişim kuruyormuş gibi gösterir. Bu şekilde saldırgan, iletişimdeki verileri izleyebilir, değiştirebilir veya hatta ekleyebilir. Bu durum ARP Spoof ya da ARP Poison olarak de geçer.
-   Malware attacks
-   Denial of service attacks
-   **Spear phishing attacks** kişisel özelleştirilmiş balık avı
-   **Whaling phishing attacks** şirketlerdeki üst düzey yöneticiler için balık avı
-   Bruto force and dictionary attacks

## Penetrasyon testi (Pentest)

Tespit edilen açıklıkların ve zafiyetlerin kullanılmasıyla sistemlere sızma girişimi

### Siyah kutu (Black box) testi

Saldırganın bilgiye erişimi sınırlıdır. Test ekibi test edilecek sistemi genellikle sadece dışarıdan gözlemler.

### Beyaz kutu (White box) testi

Test ekibi test edilen sitemin iç yapısı, altyapısı ve kodu hakkında detaylı bilgiye sahiptir. İçeriden bir perspektifi içerir.

### Gri kutu (Gray box) testi

Saldırganın bilgiye kısmen erişimine izin verilir. Test ekibi hem iş hem de dış perspektifleri değerlendirir.

### Airmon-ng

Airmon-ng, Aircrack-ng adlı bir kablosuz güvenlik aracının bir parçasıdır. Aircrack-ng kablosuz ağları test etmek ve güvenlik açıklarını belirlemek için kullanılan bir dizi aracı içeren pakettir. Airmon-ng özellikle kablosuz ağ trafiğini izlemek ve analiz etmek için kullanılır.
Bu araç bir kablosuz ağ adaptörünü "monitör" moduna geçirerek kablosuz ağ trafiğini yakalamak ve incelemek için kullanılır. Monitör modu, adaptörün sadece paketleri değil, aynı zamanda t üm kablosuz ağ trafiğini dinleyebilmesini sağlar. Analiz etmek amacıyla kullanılır. Ağdaki güvenlik açıklarını tespit etmek ve kapatmak için kullanılır.Yasal olarak kullanmak önemlidir.

Monitör modda;

"iwconfig" sadece wireless ile bilgileri verir
"manage mode" da internete bağlanırız
"monitör mode" da ise bağlı olmadığımız ağ hakkında bilgiler toplarız

### airodump-ng

Bu komut kablosuz ağları (wifi) izleme ve analiz etme amacıyla kullanılır. İstatistikleri gösterir.

-   **BSSID** bu kablosuz erişim noktasının benzersiz kimliğidir. Yani ilgili modemin mac adresi
-   **PWR** wifi ağına olan sinyal gücünü gösterir.
-   **Beacons** erişim noktasının yayınlandığı beacon çerçevelerinin sayısını gösterir bu çerçeve wifi ağının varlığını ve özelliklerini gösterir.
-   **Data** erişim noktasından alınan data paketlerinin sayısını gösterir.
-   **#Data** bu wifi ağının aktarım hızını gösterir, daha yüksek bir veri hızı daha hızlı bir wifi bağlantısı demektir.
-   **CH (channel)** bu erişim noktasının hangi kablosuz kanalda yayın yaptığını gösterir
-   **MB (max rate)** en yüksek veri iletim hızını ifade eder
-   **ENC (encryption)** bu ağın hangi tür şifreleme yöntemi kullandığını ifade eder.

### Wireshark nedir?

Bilgisayar ağlarında gerçekleşen veri iletişimini izlemek analiz etmek ve kaydetmek için kullanılır.
Ağ detektifi olarak düşünebiliriz. Gönderilen verileri görmemizi sağlar. Veri paketlerini yakalar ve bilgileri gösterir. Bu sayede hangi protokollerin kullanıldığını gözlemleyebiliriz.

### Deauthentication attack?

Bağlantı kesme saldırısı bir bilgisayar ağındaki cihazların bilinçli olarak bağlatısının koparılması anlamına gelir. Genellikle kablosuz ağlarda görülür. Ağ hizmetlerini engeller.

## Bilgi güvenliği nedir?

Bilgi güvenliği kurumsal bilginin gizliliğinin, bütünlüğünün ve erişilebiliriğinin sağlanmasıdır.

### Zararlı programlar

**Truva**

Truva atı bilgisayar için yararlı gözüken ve kullanıcının çalıştırması ile aktif olan zararlı yazılımlardır. Kendilerini virüsler gibi kopyalayamazlar.

Bulaşma şekilleri

-   E posta eklerini çalıştırmak
-   Güvensiz sitelerden indirilen dosyalar ile
-   Paylaşım ortamlarındaki dosyalar aracılığı ile

**Fidye yazılımları**

Bilgisayarınızı kullanmanıza engel olan, dosyalarınızın ismini değiştirerek ya da dosyalarınızı şifreleyerek kullanmanıza engel olan, şifreyi çözmek için karşılığında para istenen zararlı yazılım türüdür.

**Sosyal mühendislik** insan faktörü kullanan saldırı tekniklerinden ya da kişiyi etkileme ve ikna yöntemlerinden faydalanarak normal koşullarda bireylerin gizlemeleri, paylaşmamaları gereken bilgileri bir şekilde ele geçirme sanatı olarak ifade edilir.

Bazı sosyal mühendislik teknikleri

-   Omuz sörfü
-   Çöp karıştırma
-   Truva atları
-   Rol yapma
-   Oltalama
-   Tersine sosyal mühendislik

### Siber zorbalık

Teknolojiyi kullanarak (internet, cep telefonu) başkasına zarar vermek için tasarlanmış kasıtlı ve tekrarlanan düşmanca davranış

**WEP**

RC4 algoritmasıyla veriler şifrelenir
Basit kurulum zayıf koruma sağlar, savunmasızdır
Veriyi şifrelemek için gönderen ve alıcı arasında paylaşılan bir anahtar kullanır. Bu anahtar hem veriyi şifrelemek hem de çözmek için kullanılır. Biraz zayıftır kolayca kırılabilir.

**WPA**

Daha güçlü güvenlik sağlar, zamanla kırılabilecek zayıf noktalar olabilir

**WPA2**

WPA'ya göre daha güçlü güvenlik sağlar
Daha iyi bir şifreleme algoritması kullanır

### Handshake

Modemlerdeki handshake terimi, kablosuz ağlarda bir istemci cihazın (bilgisayar veya akıllı telefon) erişim noktası olarak çalışan kablosuz yönlendirici veya modem ile iletişim kurması anlamına gelir. Kısaca bir kablosuz ağ bağlantısının başlatılması sürecini ifade eder.

SSID bul -> bağlantı isteği at (Probe request) -> yanıt ver ve şifreyi gir -> bağlantı kur

**Crunch**

Kelime listesi oluşturma aracı.

**Netdiscover**

Ağdaki cihazları keşfetmek için kullanılan bir açık kaynaklı ağ tarama aracı. Ethernet ağlarında çalışır ve ağda bulunan cihazların IP adresilerini, MAC adreslerini tespit etmek için ARP paketlerini kullanır.

**Nmap**

Bilgisayar ağlarında kullanılan bir güvenlik aracıdır. Ağdaki cihazları, servisleri ve güvenlik açıklarını bulmak için kullanılır. Nmap farklı iletişim kurallarını kullanarak hedef cihazlara mesajlar gönderir ve cevaplarını inceler.

-   **Güvenlik kontrolü:** sistemlerin ve ağların güvenlik zayıflıklarını bulmak için kullanılır hangi portların açık olduğu bilgisini verir.

-   **Ağ malzemelerinin listesi** Cihazların listesini verir

-   **Hizmet sürümünün tanımlanması** Bir hizmetin hangi sürümünü kullandığını belirler

-   **Güvenlik Duvarı Testleri** Güvenlik duvarlarının ne kadar etkili olduğunu test etmek için kullanılabilir

-   **Hedef keşfi ve haritalama** Bir ağın yapısını haritalamak ve potansiyel hedefleri belirlemek için kullanılır

### Port nedir ?

Port bir bilgisayar ağındaki cihazların birbirleriyle iletişim kurmak için kullandığı numaralı kapılardır. Örneğin web siteleri genellikle 80 numaralı porta, güvenli web siteleri ise 443 numaralı porta bağlanır. İletişimin sağlanması için kullanılacak kapıyı belirtir.

### Protokol nedir ?

Bilgisayar ağlarında kullanılan protokoller, bilgisayarın birbirleriyle iletişim kurmak için izlediği kurallar ve adımların bir kombinasyonudur.Kılavuz ve kurallardır. Örneğin bir web sitesine erişirken tarayıcınız sunucudan web sayfasını almak için belirli bir protokol olan HTTP yi kullanır.

_En iyi bilinen bazı protokoller:_

**HTTP** web sayfalarının iletilmesi için kullanılan bir iletişim protokolüdür.

**HTTPS** güvenli web iletişim için kullanılan şifreli bir HTTP versiyonudur.

**FTP** dosya aktarımı için kullanılan bir protokoldür

**SSH** güvenli uzaktan erişim sağlamak için kullanılır

**SMTP** e-posta iletilerinin iletilmesi için kullanılan bir protokoldür

**POP3** e-posta istemcilerinin sunucudan iletileri alması için kullanılan bir protokoldür

**IMAP** e-posta sunucularına erişmek ve iletileri yönetmek için kullanılan bir protokoldür.

**DNS** alan adlarını ip adreslerine çeviren ve internet üzerindeki servislerin bulunmasını sağlayan bir protokoldür.

**SNMP** ağ cihazlarını yönetmek ve izlemek için kullanılan bir protokoldür

**RDP (remote desktop)** uzak bir masaüstü bağlantısı için kullanılan protokoldür

**TCP** bilgisayar ağlarında kullanılan bir iletişim protokolüdür. Bu protokol bilgisayarlar arasındaki iletişimin güvenilir ve düzenli bir şekilde kesintisiz yapılmasını sağlar

**UDP** bilgisayar ağlarında kullanılan bir başka iletişim protokolüdür TCP ye göre daha az güvenilirdir. UDP hızlıdır ama veri bütünlüğü ve teslimat garantisi sunmaz

**ARP** bir bilgisayar ağında, bir cihazın IP adressini fiziksel (MAC) adresine dönüştürmek için kullanılan bir iletişim protokolüdür. Bu protokol bir cihazın IP adresini bildiğinde, ağdaki diğer cihazların fiziksel adreslerini belirlemek için kullanılır.

### Bettercap

Ağ güvenliği ve penetrasyon testi için kullanılan bir araçtır. Bilgisayar üzerindeki ağ trafiğini izlemek, manipüle etmek ve analiz etmek için kullanılır. Güvenlik açıklarını tespit etmek ve bunları kapatmak için kullanılır. Ağ trafiğini izler hatta değiştirebilir. Kişinin hangi sitelere girdiğini görebilir. Eğitim amaçlı kullanılabilir.

Bettercap'ın bazı araçları:

**ARP Spoofing** ağ trafiğini saldırganın kontrol ettiği bir noktaya getirir

**DNS Spoofing** ağdaki dns sorgularını manipüle ederek yanlış ip adreslerine yönlendirir

**HTTP ve HTTPs izleme** HTTP trafiğini izler, dinler incelememizi sağlar.

**Modül sistemi** Kullanıcıların kendi özel modüllerini yazmalarını sağlar

**SSL Strip** HTTP trafiğinde SSL/TLS şifrelemesini kaldırarak, kullanıcılara güvenli olmayan HTTP bağlantılarına yönlendirir.

**Net.probe** bir tür ağ tarayıcısıdır. Yani bilgisayar ağındaki diğer cihazları bulmak için kullanılır.

**Net.sniff** bir tür ağ dinleme aracıdır. İletişimleri dinler.
