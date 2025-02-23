"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

// Fisher-Yatesシャッフルアルゴリズムの実装
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export function CottonSketchPenHomepageComponent() {
  const [activeImage, setActiveImage] = useState(0)

  const images = [
    "/cottonsketchgan.jpg",
    "/ver1.jpg",
    "/ver2.jpg",
    "/ver3.jpg",
    "/ver4.jpg",
    "/ver5.jpg",
    "/machine.JPG",
    "/1102wata.jpeg",
    "/wataame.jpeg",
    "/cup.jpeg"
  ]

  // 3秒ごとに画像を自動で切り替える
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  const teamMembers = [
    { name: "岡空来", role: "建築, 空気構造", image: "/members/oka.jpg" },
    { name: "金澤政宜", role: "ロボティクス, ヒューマノイドロボット", image: "/members/kanazawa.jpg" },
    { name: "中田裕紀", role: "コンピュータサイエンス, 群ロボット", image: "/members/nakata.jpg" },
    { name: "南田桂吾", role: "ロボティクス, CV", image: "/members/minamida.jpg" },
  ]

  // クライアントサイドでのみシャッフルを実行するために、useEffectを使用
  const [shuffledMembers, setShuffledMembers] = useState(teamMembers)

  useEffect(() => {
    setShuffledMembers(shuffleArray(teamMembers))
  }, []) // マウント時に1回だけ実行

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#01A0E9] via-white to-[#01A0E9] text-white">
      {/* ヒーローセクション */}
      <header className="container mx-auto py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 animate-fade-in">CottonSketchPen</h1>
        <p className="text-lg md:text-xl text-center mt-4 animate-slide-up">必要なときに必要なものを作り出せる</p>
      </header>

      <main className="container mx-auto px-4">
        {/* わたあめの活動セクション */}
        <section className="text-center py-16 bg-white/80 rounded-xl shadow-lg mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-6 text-[#01A0E9]"
          >
            CottonSketchPenの活動
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8 text-gray-700"
          >
            CottonSketchPenで、つくる楽しさつかう楽しさを
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-x-4 flex flex-wrap justify-center gap-4"
          >
            <Link href="https://www.iiiexhibition.com/">
              <Button className="bg-[#FFCB00] text-[#01A0E9] hover:bg-[#FD000F] hover:text-white transition-all duration-300 transform hover:scale-105 text-lg px-8 py-4 rounded-full shadow-lg mb-4">
                東京大学制作展2024
              </Button>
            </Link>
            <Link href="https://peatix.com/event/4181356/view?k=c97a8a32bb14bd502708b7c3d75bcb86bdefab90">
              <Button className="bg-[#FFCB00] text-[#01A0E9] hover:bg-[#FD000F] hover:text-white transition-all duration-300 transform hover:scale-105 text-lg px-8 py-4 rounded-full shadow-lg mb-4">
                東京大学制作展ワークショップ
              </Button>
            </Link>
            <Link href="https://gugen.jp/subscriptions/work/1470">
              <Button className="bg-[#FFCB00] text-[#01A0E9] hover:bg-[#FD000F] hover:text-white transition-all duration-300 transform hover:scale-105 text-lg px-8 py-4 rounded-full shadow-lg mb-4">
                GUGEN
              </Button>
            </Link>
            <Link href="https://protopedia.net/prototype/6400">
              <Button className="bg-[#FFCB00] text-[#01A0E9] hover:bg-[#FD000F] hover:text-white transition-all duration-300 transform hover:scale-105 text-lg px-8 py-4 rounded-full shadow-lg mb-4">
                ProtoPedia
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* デモ動画セクション */}
        <section className="py-16 bg-white/80 rounded-xl shadow-lg mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-[#01A0E9]">デモ動画</h2>

          {/* コンテナのmax-widthを広げ、パディングを追加 */}
          <div className="max-w-6xl mx-auto px-4">
            {/* アスクト比を維持しながら、より大きな表示サイズを確保 */}
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/qPGFxPecx3w?si=KUBbcEQm2dTCd5XV"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-2xl"
              ></iframe>
            </div>
          </div>
        </section>

        {/* 製品写真セクション */}
        <section className="py-16 bg-white/80 rounded-xl shadow-lg mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-[#01A0E9]">製品写真</h2>
          <div className="relative max-w-4xl mx-auto">
            <motion.div
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-[600px]"
            >
              <Image
                src={images[activeImage]}
                alt={`CottonSketchPen 写真 ${activeImage + 1}`}
                fill
                className="object-contain rounded-xl shadow-xl"
                priority
              />
            </motion.div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === activeImage ? "bg-[#FFCB00] scale-125" : "bg-white bg-opacity-50 hover:bg-opacity-75"
                  }`}
                  onClick={() => setActiveImage(index)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* コンセプトセクション */}
        <section className="py-16">
          <Card className="bg-white/90 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-center text-[#01A0E9]">コンセプト</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-xl leading-relaxed text-gray-700">
                わたあめ機は、材料を加熱し液状化したものを高速に回転させ、側面に開けた小さな穴から遠心力によって細い糸を生成する。
                それが空気中で冷却され、糸が絡まり固まることでわたができる。グルーガンの素材でわたを実現するデバイスを用いた製作物を展示する。
                わずかな量の素材から大きな形を創り出し、使わなくなったら素材に戻して、また再度別のものを創り出す。
                こうして、必要な時に必要なものを創り出す世界をつくりたい。
              </CardDescription>
            </CardContent>
          </Card>
        </section>

        {/* 受賞セクション */}
        <section className="py-16 bg-white/80 rounded-xl shadow-lg mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-[#01A0E9]">受賞</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="bg-white/90 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-1/3 h-[200px]">
                  <Image
                    src="/GUGEN.jpg"
                    alt="GUGEN2024"
                    fill
                    className="object-cover rounded-t-xl md:rounded-l-xl md:rounded-t-none"
                  />
                </div>
                <CardHeader className="flex-1">
                  <CardTitle className="text-2xl font-bold text-[#01A0E9]">GUGEN2024 大賞・ほしいね賞</CardTitle>
                  <CardDescription className="text-lg text-gray-700">
                    国内最大級オリジナルハードウェアコンテストGUGENにて大賞・ほしいね賞を受賞しました
                  </CardDescription>
                </CardHeader>
              </div>
            </Card>
          </div>
        </section>

        {/* 紹介セクション */}
        <section className="py-16 bg-white/80 rounded-xl shadow-lg mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-[#01A0E9]">メディア掲載</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/90 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {/* linkがないものはnullにする */}
                  {[
                    {
                      media: "未来事業イノベーションアワード",
                      date: "2024.12.04",
                      description: "朝日新聞社が中心となり実施する未来事業イノベーションアワードにてファイナリストに選出されました",
                      link: "https://www.asahi.com/ads/tu/15496882"
                    },
                    {
                      media: "ProtoPediaの時間",
                      date: "2024.12.18",
                      description: "プロトペディアの時間にて紹介していただきました",
                      link: "https://www.youtube.com/live/uscQOlHnzzg?si=yIDhbQiYTgy6Nj9U&t=2790"
                    },
                    {
                      media: "Digital PR Platform",
                      date: "2024.12.23",
                      description: "GUGEN2024のイベントレポートにて紹介していただきました",
                      link: "https://digitalpr.jp/r_detail.php?release_id=101530"
                    },
                    {
                      media: "東京大学大学院情報学環・学際情報学府",
                      date: "2024.12.26",
                      description: "ニュースでGUGEN2024受賞を報じていただきました",
                      link: "https://www.iii.u-tokyo.ac.jp/news/2024122621779"
                    },
                    {
                      media: "基板の窓口 特集記事",
                      date: "2025.01.14",
                      description: "動画展示会レポートで取り上げていただきました",
                      link: "https://jpcb.jp/pickup/index.php?m=detail&pkid=390"
                    },
                    {
                      media: "子供の科学のWebサイト KoKaNet",
                      date: "2025.02.05",
                      description: "子供の科学のWebサイトで取り上げていただきました",
                      link: "https://www.kodomonokagaku.com/read/88203/"
                    }
                  ].map((item, index, array) => (
                    <li key={item.date} className={index !== array.length - 1 ? "border-b pb-4" : "pb-4"}>
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-xl font-bold text-[#01A0E9]">
                          {item.link ? (
                            <Link
                              href={item.link}
                              className="hover:underline hover:opacity-80 transition-all"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {item.media}
                              <span className="inline-block ml-1">↗</span>
                            </Link>
                          ) : (
                            item.media
                          )}
                        </h3>
                        <span className="text-gray-500">{item.date}</span>
                      </div>
                      <p className="text-gray-700">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* チームメンバーセクション */}
        <section className="py-16 bg-white/80 rounded-xl shadow-lg mb-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#01A0E9]">4ZIGENメンバー</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {shuffledMembers.map((member) => (
              <Card key={member.name} className="bg-white/90 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 mx-2"> {/* カード全体にパディングを追加 */}
                <CardHeader className="p-0"> {/* CardHeaderのデフォルトパディングを削除 */}
                  <div className="relative w-full h-48 mb-4"> {/* 画像の下に余白を追加 */}
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="rounded-xl shadow-md object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-0"> {/* CardContentのデフォルトパディングを削除 */}
                  <CardTitle className="text-xl text-[#01A0E9] mb-2">{member.name}</CardTitle>
                  <CardDescription className="text-gray-600">{member.role}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-[#01A0E9] text-white py-8 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-lg">&copy; {new Date().getFullYear()} CottonSketchPen. All rights reserved.</p>
        </div>
      </footer>

      <motion.button
        className="fixed bottom-8 right-8 bg-[#FFCB00] rounded-full p-4 cursor-pointer shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ChevronDown className="w-8 h-8 text-[#01A0E9] transform rotate-180" />
      </motion.button>
    </div>
  )
}