import sqlite3

descriptions = {
    1: "2 Ton Dikey Mavi Polietilen Su Depomuz, %100 orijinal gıda sınıfı lineer polietilen (LLDPE) hammaddeden ileri rotasyon teknolojisi ile dikişsiz ve yekpare olarak üretilmektedir. Dar alanlar için ideal olan dikey silindirik tasarımı sayesinde, konutlarda, bağ evlerinde, tarım ve sanayi tesislerinde güvenli su depolama imkanı sunar. Mavi rengi ve UV korumalı yapısı ile güneş ışınlarını kırarak depo içerisinde yosunlaşma, bakteri üremesi ve koku oluşumunu tamamen engeller. İçme suyu, kullanım suyu ve diğer gıda sıvılarını güvenle uzun süre muhafaza edebilirsiniz. Tamamen plastikten imal edilen bu ürünümüz paslanmaz, çürümez, aşınmaz ve uzun yıllar boyunca ilk günkü performansını korur.",
    2: "750 Litre İnce Dikey Mavi Polietilen Su Deposu, dar alanlardan kolayca geçebilen ince ve uzun tasarımı ile yer sıkıntısı olan mekanlar için mükemmel bir çözümdür. T.C. Sağlık Bakanlığı onaylı %100 gıda sınıfı plastik polietilenden dikişsiz olarak imal edilmiştir. Musluklu yapısı sayesinde pratik kullanım sunar. Mavi renkli UV yalıtımı sayesinde güneş ışığını kesinlikle geçirmez; içinde depolanan suda yosun, mikrop veya koku oluşumu gözlenmez. Apartman altları, çatı araları veya bahçe köşeleri için idealdir. Hiçbir metal veya paslanmaz ibaresi içermeyen tamamen polietilen plastik yapısıyla çürümeye ve paslanmaya karşı ömür boyu garantili bir depolama çözümüdür.",
    3: "750 Litre İnce Dikey Siyah Polietilen Su Deposu, ekstra UV koruması sağlayan siyah renkli gövdesi ile dış mekanlarda güneşe karşı maksimum direnç gösterir. Dar alanlar için özel olarak tasarlanmış ince silindirik yapısı sayesinde kapılardan kolayca geçer. Üzerinde bulunan musluk bağlantısı ile suyu pratik bir şekilde tahliye edebilirsiniz. %100 polietilen (plastik) hammaddeden dikişsiz ve monoblok olarak üretilen depomuz, korozyona, pasa ve çürümeye karşı kusursuz dayanım sergiler. İçme suyu ve bağ/bahçe sulama sistemlerinde güvenle kullanılabilen bu depo, gıda ile temasa uygun ve insan sağlığına dost bir üründür.",
    4: "1 Ton Dikey Mavi Polietilen Su Depomuz, 1000 litre su ve gıda sıvılarını en hijyenik koşullarda depolamak için tasarlanmıştır. Monoblok (tek parça) rotasyon teknolojisiyle %100 plastik polietilenden üretilmiş olup, kaynak veya ek yeri barındırmadığı için sızdırma yapmaz. UV katkılı mavi dış yüzeyi güneş ışınlarının depo içerisine nüfuz etmesini engelleyerek yosunlaşma, bakteri ve kötü koku oluşumunu önler. Bina yedek su sistemlerinden, tarımsal sulamaya ve sanayi tesislerine kadar geniş bir kullanım alanına sahiptir. Çürümez, pas yapmaz ve dış etkenlere karşı son derece mukavemetlidir.",
    5: "1 Ton Dikey Beyaz Polietilen Su Deposu, şeffaflığı yansıtan temiz beyaz görünümü ile iç mekanlarda veya güneş görmeyen alanlarda ideal bir kullanım sunar. Yüksek kaliteli lineer polietilen (LLDPE) hammaddeden tek seferde dikişsiz olarak üretilmiştir. İçerisindeki su miktarını dışarıdan hafifçe belli eden yapısı ile su seviyesini takip etmek kolaydır. Gıda tüzüğüne tam uyumlu olan bu plastik depo, içme suyu, süt, meyve suyu gibi sıvıları hiçbir tat ve koku değişikliği yaratmadan muhafaza eder. Paslanma veya korozyon gibi dertleri unutturan tamamen polietilen bu ürünümüz, hijyenik ve ekonomik bir depolama çözümüdür.",
    6: "Büyük kapasiteli su depolama ihtiyaçlarınız için özel olarak üretilen 5 Ton Dikey Polietilen Su Deposu, yüksek mukavemetli yapısı ile ön plana çıkar. 5.000 litre hacmiyle büyük konut projeleri, üretim tesisleri, şantiyeler ve geniş tarım arazilerinde güvenle kullanılır. %100 orijinal plastik polietilenden dikişsiz ve yekpare olarak üretilen depomuz, çatlama, kırılma ve sızdırma riskini sıfıra indirir. Gıda güvenliğine uygun olan yapısıyla, içerisindeki suyun doğal kimyasını korur. Çevre şartlarına üstün dayanım gösteren bu ürünümüz, korozyon, çürüme ve paslanma riskini tamamen ortadan kaldıran uzun ömürlü bir yatırım aracıdır.",
    7: "1 Ton Yatay Küre Mavi Polietilen Su Deposu, özel küre (kapsül) tasarımı ile düşük yükseklikteki tavan arası, bodrum ve araç üstü kullanımlar için tasarlanmıştır. Yere sağlam basan dengeli yapısı ve estetik küre tasarımıyla fark yaratır. Tamamen gıda sınıfı polietilen plastik hammaddeden rotasyon tekniği ile ek yeri olmadan üretilmiştir. UV ışınlarına karşı tam koruma sağlayan mavi rengi sayesinde suyunuzda yosunlaşma veya bozulma yaşanmaz. Darbelere karşı ekstra esneklik ve güç sağlayan küre yapısıyla paslanma, korozyon gibi sorunlara veda edebilirsiniz.",
    8: "2 Ton Yatay Mavi Polietilen Su Deposu, yere yatay uzanan ayaklı yapısı sayesinde zemin üzerinde maksimum stabilite sağlar. Özellikle yüksekliğin kısıtlı olduğu çatı araları, bodrum katları ve platformlar için en çok tercih edilen modellerdendir. %100 polietilen (plastik) malzemeden üretilmiş olup, kaynak izi bulunmayan monoblok yapısıyla sızdırmazlık garantisi sunar. UV stabilizanlı mavi gövdesi ile yosun tutmaz ve suyun berraklığını korur. Metal depoların aksine asla paslanmayan, koku yapmayan ve kolay temizlenebilir iç yüzeyi ile yıllarca sorunsuz bir kullanım sunar.",
    9: "5 Ton Yatay Mavi Polietilen Su Deposu, yüksek tonajlı yatay depolama çözümleri arayanlar için en dayanıklı seçeneklerden biridir. Geniş hacmine rağmen yatay tasarımı sayesinde dengeli bir şekilde konumlandırılabilir ve rüzgar, sarsıntı gibi dış etkenlere karşı ekstra stabilite sunar. Tarımsal sulama depoları, fabrika soğutma suyu sistemleri ve büyük toplu konutlar için idealdir. Yüksek kaliteli polietilen plastikten üretilen depomuz, U.V. dayanımlı yapısıyla güneş altında deforme olmaz, yosunlanma yapmaz. %100 paslanmaz ve çürümez özellikli plastik hammaddesiyle en zorlu doğa koşullarına meydan okur."
}

def main():
    conn = sqlite3.connect('/root/projects/sudeposuwebsite/sudeposu.db')
    cursor = conn.cursor()
    
    # Try adding the column, ignore if it already exists
    try:
        cursor.execute("ALTER TABLE products ADD COLUMN detailed_description TEXT;")
        print("Added detailed_description column.")
    except sqlite3.OperationalError as e:
        print(f"Column might already exist: {e}")
        
    for pid, text in descriptions.items():
        cursor.execute("UPDATE products SET detailed_description = ? WHERE id = ?", (text, pid))
        
    conn.commit()
    print("Successfully updated detailed descriptions for 9 products.")
    conn.close()

if __name__ == '__main__':
    main()
