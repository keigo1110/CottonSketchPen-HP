"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import Head from "next/head"

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
    { name: "岡空来", role: "建築, 空気構造", image: "/members/oka.jpg", url: "#" },
    { name: "金澤政宜", role: "ロボティクス, ヒューマノイドロボット", image: "/members/kanazawa.jpg", url: "https://kanassi.info/" },
    { name: "中田裕紀", role: "コンピュータサイエンス, 群ロボット", image: "/members/nakata.jpg", url: "https://yuki-nakata.org/" },
    { name: "南田桂吾", role: "ロボティクス, CV", image: "/members/minamida.jpg", url: "https://keigominamida.com/" },
  ]

  // クライアントサイドでのみシャッフルを実行するために、useEffectを使用
  const [shuffledMembers, setShuffledMembers] = useState(teamMembers)

  useEffect(() => {
    setShuffledMembers(shuffleArray(teamMembers))
  }, []) // マウント時に1回だけ実行

  const pageTitle = "CottonSketchPen - プラスチックわた革命";
  const pageDescription = "プラスチックをわた状に変化させ、ものづくりを可能にする革新的なデバイス。東大制作展、GUGENで受賞。";

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#01A0E9] via-white to-[#01A0E9] text-white overflow-hidden">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="CottonSketchPen, プラスチック, わた, ものづくり, 再利用, サステナブル, GUGEN, 東大制作展, 4ZIGEN" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="/cottonsketchgan.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="/cottonsketchgan.jpg" />
        <link rel="canonical" href="https://cottonsketchpen.com" />
      </Head>

      {/* ヒーローセクション */}
      <header className="relative min-h-screen flex flex-col items-center justify-center py-16 overflow-hidden">
        {/* 背景アニメーション */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#01A0E9] to-transparent opacity-80"></div>
          {/* 背景のわたあめの糸をイメージした要素 */}
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white opacity-60 rounded-full"
              style={{
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                borderRadius: '40%',
                filter: 'blur(50px)',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 40 - 20],
                y: [0, Math.random() * 40 - 20],
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
              CottonSketchPen
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto text-white drop-shadow">
              必要なときに必要なものを作り出す、プラスチックわた革命
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/cottonsketchgan.jpg"
              alt="CottonSketchPen メイン画像"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-8 left-0 right-0 text-center">
              <Link href="#concept">
                <Button className="bg-white/20 backdrop-blur-md text-white border-2 border-white hover:bg-white hover:text-[#01A0E9] transition-all duration-300 rounded-full px-8 py-3">
                  製品について詳しく見る
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-2"
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.div>
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 grid grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            <div className="bg-[#01A0E9]/50 backdrop-blur-md p-4 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-white drop-shadow-lg">環境にやさしい</h3>
              <p className="text-white text-sm drop-shadow">身の回りのプラスチックも生成物も再利用可能</p>
            </div>
            <div className="bg-[#01A0E9]/50 backdrop-blur-md p-4 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-white drop-shadow-lg">柔軟な造形性</h3>
              <p className="text-white text-sm drop-shadow">軽量かつ強度のある造形を実現</p>
            </div>
            <div className="bg-[#01A0E9]/50 backdrop-blur-md p-4 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-white drop-shadow-lg">簡単操作</h3>
              <p className="text-white text-sm drop-shadow">設計図不要で誰でも簡単にものづくり可能</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Link href="#activities">
            <ChevronDown className="h-10 w-10 text-white" />
          </Link>
        </motion.div>
      </header>

      <main className="container mx-auto px-4">
        {/* わたあめの活動セクション */}
        <section id="activities" className="text-center py-28 bg-gradient-to-b from-white/90 via-[#01A0E9]/5 to-white/80 rounded-xl shadow-lg mb-20 relative overflow-hidden">
          {/* 装飾要素 */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFCB00]/10 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#01A0E9]/10 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold mb-6 text-[#01A0E9] drop-shadow-sm relative z-10"
          >
            CottonSketchPenの活動
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-12 text-gray-700 max-w-2xl mx-auto relative z-10"
          >
            CottonSketchPenで、つくる楽しさつかう楽しさを伝えてきました
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative z-10 max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="https://www.iiiexhibition.com/" className="group">
                <div className="bg-white/80 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:translate-y--2 h-full">
                  <div className="flex flex-col h-full">
                    <div className="bg-[#FFCB00] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl font-bold">展</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#01A0E9] mb-3">東京大学制作展2024</h3>
                    <p className="text-gray-600 mb-6 flex-grow">学生たちによる先端技術と芸術を融合させた革新的な作品展示会に出展しました。</p>
                    <div className="mt-auto">
                      <span className="inline-flex items-center text-[#FFCB00] font-bold group-hover:translate-x-2 transition-transform duration-300">
                        詳細を見る
                        <ChevronDown className="h-5 w-5 ml-2 transform -rotate-90" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="https://peatix.com/event/4181356/view?k=c97a8a32bb14bd502708b7c3d75bcb86bdefab90" className="group">
                <div className="bg-white/80 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:translate-y--2 h-full">
                  <div className="flex flex-col h-full">
                    <div className="bg-[#FFCB00] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl font-bold">体</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#01A0E9] mb-3">制作展ワークショップ</h3>
                    <p className="text-gray-600 mb-6 flex-grow">CottonSketchPenを使った製作体験ワークショップを開催しました。</p>
                    <div className="mt-auto">
                      <span className="inline-flex items-center text-[#FFCB00] font-bold group-hover:translate-x-2 transition-transform duration-300">
                        イベント詳細
                        <ChevronDown className="h-5 w-5 ml-2 transform -rotate-90" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="https://gugen.jp/subscriptions/work/1470" className="group">
                <div className="bg-white/80 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:translate-y--2 h-full">
                  <div className="flex flex-col h-full">
                    <div className="bg-[#FFCB00] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl font-bold">賞</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#01A0E9] mb-3">GUGEN</h3>
                    <p className="text-gray-600 mb-6 flex-grow">オリジナルハードウェアコンテストGUGENにて大賞を受賞しました。</p>
                    <div className="mt-auto">
                      <span className="inline-flex items-center text-[#FFCB00] font-bold group-hover:translate-x-2 transition-transform duration-300">
                        受賞作品を見る
                        <ChevronDown className="h-5 w-5 ml-2 transform -rotate-90" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="https://protopedia.net/prototype/6400" className="group">
                <div className="bg-white/80 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:translate-y--2 h-full">
                  <div className="flex flex-col h-full">
                    <div className="bg-[#FFCB00] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl font-bold">紹</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#01A0E9] mb-3">ProtoPedia</h3>
                    <p className="text-gray-600 mb-6 flex-grow">プロトタイプ共有プラットフォームにて技術解説と製品情報を公開しました。</p>
                    <div className="mt-auto">
                      <span className="inline-flex items-center text-[#FFCB00] font-bold group-hover:translate-x-2 transition-transform duration-300">
                        詳細を見る
                        <ChevronDown className="h-5 w-5 ml-2 transform -rotate-90" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>
        </section>

        {/* 製品写真セクション */}
        <section className="py-28 mb-20 bg-gradient-to-b from-white/90 to-[#01A0E9]/10 rounded-xl shadow-lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-[#01A0E9] mb-6">ギャラリー</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              CottonSketchPenの過去の機体や造形物たちです
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto px-4">
            {/* メイン表示エリア */}
            <motion.div
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-[70vh] mb-8 overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-[#01A0E9]/5 to-white/50 backdrop-blur-sm p-1"
            >
              <div className="absolute inset-1 overflow-hidden rounded-xl">
                <Image
                  src={images[activeImage]}
                  alt={`CottonSketchPen 作品 ${activeImage + 1}: ${
                    activeImage === 0 ? "CottonSketchPenの最新機体" :
                    activeImage === 1 ? "CottonSketchPen 最初期のプロトタイプ" :
                    activeImage === 2 ? "CottonSketchPen 風で送りわたを射出" :
                    activeImage === 3 ? "CottonSketchPen わた吹付け実験" :
                    activeImage === 4 ? "CottonSketchPen プラスチックわた化テスト" :
                    activeImage === 5 ? "CottonSketchPen 一方向射出実験" :
                    activeImage === 6 ? "CottonSketchPen ハンディタイプ完成" :
                    activeImage === 7 ? "CottonSketchPen プラスチックわたの様子" :
                    activeImage === 8 ? "CottonSketchPen わた繊維構造" :
                    "CottonSketchPen わた梱包実験"}`}
                  fill
                  className="object-contain rounded-xl transition-all duration-500 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-8 left-8 right-8 text-white z-10">
                <div className="bg-[#01A0E9]/70 backdrop-blur-md p-4 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold">
                    {activeImage === 0 && "最新機体"}
                    {activeImage === 1 && "初期プロトタイプ"}
                    {activeImage === 2 && "風送式わた射出"}
                    {activeImage === 3 && "わた吹付け実験"}
                    {activeImage === 4 && "プラスチックわた化テスト"}
                    {activeImage === 5 && "一方向射出実験"}
                    {activeImage === 6 && "ハンディタイプ完成"}
                    {activeImage === 7 && "プラスチックわた"}
                    {activeImage === 8 && "わた繊維構造"}
                    {activeImage === 9 && "わた梱包実験"}
                  </h3>
                  <p className="text-white/90 mt-2">
                    {activeImage === 0 && "CottonSketchPenの最新機体"}
                    {activeImage === 1 && "最初期のプロトタイプ"}
                    {activeImage === 2 && "風で送りわたを射出"}
                    {activeImage === 3 && "射出したものを吹き付ける"}
                    {activeImage === 4 && "プラスチックでわたになることを確認"}
                    {activeImage === 5 && "プラスチックわたの一方向射出"}
                    {activeImage === 6 && "ハンディタイプのCottonSketchPenの完成"}
                    {activeImage === 7 && "プラスチックわたの様子"}
                    {activeImage === 8 && "わた繊維"}
                    {activeImage === 9 && "コップに梱包としてわたを吹き付けた様子"}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* サムネイルナビゲーション */}
            <div className="grid grid-cols-5 gap-4">
              {images.slice(0, 5).map((image, index) => (
                <button
                  key={index}
                  className={`relative overflow-hidden rounded-lg aspect-square transition-all shadow-md hover:shadow-lg ${
                    index === activeImage ? "ring-4 ring-[#FFCB00] scale-110" : "opacity-80 hover:opacity-100 hover:scale-105"
                  }`}
                  onClick={() => setActiveImage(index)}
                >
                  <Image
                    src={image}
                    alt={`CottonSketchPen サムネイル ${index + 1}: ${
                      index === 0 ? "最新機体" :
                      index === 1 ? "初期プロトタイプ" :
                      index === 2 ? "風送式わた射出" :
                      index === 3 ? "わた吹付け実験" :
                      index === 4 ? "プラスチックわた化テスト" : ""
                    }`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-5 gap-4">
              {images.slice(5).map((image, index) => (
                <button
                  key={index + 5}
                  className={`relative overflow-hidden rounded-lg aspect-square transition-all shadow-md hover:shadow-lg ${
                    index + 5 === activeImage ? "ring-4 ring-[#FFCB00] scale-110" : "opacity-80 hover:opacity-100 hover:scale-105"
                  }`}
                  onClick={() => setActiveImage(index + 5)}
                >
                  <Image
                    src={image}
                    alt={`CottonSketchPen サムネイル ${index + 6}: ${
                      index === 0 ? "一方向射出実験" :
                      index === 1 ? "ハンディタイプ完成" :
                      index === 2 ? "プラスチックわた" :
                      index === 3 ? "わた繊維構造" :
                      index === 4 ? "わた梱包実験" : ""
                    }`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* デモ動画セクション */}
        <section className="py-28 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#01A0E9] to-[#0080C9] rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
              <div className="p-8 md:p-12 text-white order-2 lg:order-1 relative z-10">
                <div className="relative">
                  <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#01A0E9]/10 rounded-full blur-xl"></div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 relative">
                    <span className="text-white">
                      動画でわかる<br />CottonSketchPen
                    </span>
                  </h2>
                  <p className="text-lg md:text-xl mb-8 text-white/90">
                    CottonSketchPenのデモ映像です
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="https://www.youtube.com/@4ZIGENGSii" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-white text-[#01A0E9] hover:bg-[#01A0E9]/90 hover:text-white transition-all duration-300 rounded-full px-6 shadow-lg">
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                        YouTube チャンネル
                      </Button>
                    </Link>
                    <Link href="https://gugen.jp/subscriptions/work/1470" target="_blank" rel="noopener noreferrer">
                    </Link>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 relative">
                <div className="p-4 md:p-8 relative">
                  <div className="aspect-video relative rounded-xl overflow-hidden shadow-2xl bg-black/5 backdrop-blur-lg">
                    <iframe
                      src="https://www.youtube.com/embed/B4XQRuago00?si=PQXbMAKPAw1YPWTZ"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full z-20"
                      title="CottonSketchPen デモ映像"
                    ></iframe>

                    {/* 装飾要素 */}
                    <div className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden z-10">
                      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#01A0E9]/30 to-transparent opacity-50"></div>
                    </div>

                    {/* 視聴開始ボタン（デザイン用、実際には動作しない） */}
                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none opacity-0">
                      <div className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                        <div className="w-16 h-16 bg-[#01A0E9] rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-white transform translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 装飾円形 */}
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#01A0E9]/30 rounded-full z-0 opacity-50 blur-md"></div>
                  <div className="absolute -top-6 -left-6 w-40 h-40 bg-[#01A0E9]/30 rounded-full z-0 opacity-40 blur-lg"></div>
                </div>

                {/* ビデオプレイリスト装飾 (オプショナル) */}
                <div className="hidden lg:flex absolute -right-8 bottom-16 z-30">
                  <div className="bg-white/10 backdrop-blur-md rounded-l-xl p-3 shadow-lg transform -translate-x-2">
                    <div className="space-y-3">
                      <div className="w-20 h-2 bg-white/50 rounded-full"></div>
                      <div className="w-16 h-2 bg-white/30 rounded-full"></div>
                      <div className="w-14 h-2 bg-white/30 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* コンセプトセクション */}
        <section id="concept" className="py-28 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-[#01A0E9] mb-6">CottonSketchPenの原理</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              プラスチックをわたあめ機のように変換するデバイス
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden shadow-xl bg-white/80 p-4">
                <div className="aspect-[4/3] relative w-full">
                  <Image
                    src="/function.png"
                    alt="CottonSketchPen 原理図"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="bg-white/90 p-6 rounded-xl shadow-lg border-l-4 border-[#01A0E9]">
                  <h3 className="text-2xl font-bold text-[#01A0E9] mb-4 flex items-center">
                    <span className="flex items-center justify-center w-8 h-8 bg-[#01A0E9] text-white rounded-full mr-3 text-sm">1</span>
                    材料の加熱・液状化
                  </h3>
                  <p className="text-gray-700">
                    プラスチック素材を溶融ポイントまで加熱し、液状に変化させます。この過程で素材の粘度が最適な状態に調整されます。
                  </p>
                </div>

                <div className="bg-white/90 p-6 rounded-xl shadow-lg border-l-4 border-[#01A0E9]">
                  <h3 className="text-2xl font-bold text-[#01A0E9] mb-4 flex items-center">
                    <span className="flex items-center justify-center w-8 h-8 bg-[#01A0E9] text-white rounded-full mr-3 text-sm">2</span>
                    高速回転による射出
                  </h3>
                  <p className="text-gray-700">
                    液状化した素材を高速回転させ、遠心力によって小さな穴から細い糸状に射出します。この技術がわたあめ機の原理と同じです。
                  </p>
                </div>

                <div className="bg-white/90 p-6 rounded-xl shadow-lg border-l-4 border-[#01A0E9]">
                  <h3 className="text-2xl font-bold text-[#01A0E9] mb-4 flex items-center">
                    <span className="flex items-center justify-center w-8 h-8 bg-[#01A0E9] text-white rounded-full mr-3 text-sm">3</span>
                    固形化と造形
                  </h3>
                  <p className="text-gray-700">
                    射出された細い糸は空気中で冷却され、絡み合いながら固形化。この特殊な構造が大きな体積と軽量性を両立しつつ、必要な強度を実現します。
                  </p>
                </div>

                <div className="bg-white/90 p-6 rounded-xl shadow-lg border-l-4 border-[#01A0E9]">
                  <h3 className="text-2xl font-bold text-[#01A0E9] mb-4 flex items-center">
                    <span className="flex items-center justify-center w-8 h-8 bg-[#01A0E9] text-white rounded-full mr-3 text-sm">4</span>
                    再利用性
                  </h3>
                  <p className="text-gray-700">
                    使わなくなった造形物は再び材料に戻し、新しいものを作ることができます。サステナブルな循環型ものづくりを実現します。
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 受賞セクション */}
        <section className="py-28 mb-20 bg-white/80 rounded-xl shadow-lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-[#01A0E9] mb-6">受賞歴</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              革新的なデバイスとして高い評価をいただいています
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#FFCB00]/10 to-[#FFCB00]/30 p-1 rounded-2xl shadow-xl"
              >
                <Card className="bg-white/90 border-0 h-full">
                  <div className="flex flex-col h-full">
                    <div className="relative w-full aspect-video">
                      <Image
                        src="/GUGEN.jpg"
                        alt="GUGEN2024"
                        fill
                        className="object-cover rounded-t-xl"
                      />
                      <div className="absolute top-4 right-4 bg-[#FFCB00] text-white font-bold px-4 py-2 rounded-full shadow-lg">
                        大賞
                      </div>
                    </div>
                    <CardHeader className="flex-1">
                      <CardTitle className="text-3xl font-bold text-[#01A0E9]">GUGEN2024 大賞</CardTitle>
                      <CardDescription className="text-lg text-gray-700">
                        国内最大級オリジナルハードウェアコンテストGUGENにて大賞を受賞し、革新的なものづくりデバイスとして高く評価されました。
                      </CardDescription>
                    </CardHeader>
                    <div className="p-6 pt-0">
                      <Link href="https://gugen.jp/subscriptions/work/1470" target="_blank" rel="noopener noreferrer">
                        <Button className="bg-[#FFCB00] text-white hover:bg-[#01A0E9] transition-all duration-300 w-full">
                          授賞詳細を見る
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#01A0E9]/10 to-[#01A0E9]/30 p-1 rounded-2xl shadow-xl"
              >
                <Card className="bg-white/90 border-0 h-full">
                  <div className="flex flex-col h-full">
                    <div className="relative w-full aspect-video bg-[#01A0E9]/10 rounded-t-xl flex items-center justify-center">
                      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="w-32 h-32 bg-[#FFCB00]/20 rounded-full animate-pulse"></div>
                      </div>
                      <div className="relative z-10 text-center p-8">
                        <h3 className="text-3xl font-bold text-[#01A0E9] mb-2">ほしいね賞</h3>
                        <p className="text-gray-600">GUGEN2024</p>
                      </div>
                      <div className="absolute top-4 right-4 bg-[#01A0E9] text-white font-bold px-4 py-2 rounded-full shadow-lg">
                        特別賞
                      </div>
                    </div>
                    <CardHeader className="flex-1">
                      <CardTitle className="text-3xl font-bold text-[#01A0E9]">GUGEN2024 ほしいね賞</CardTitle>
                      <CardDescription className="text-lg text-gray-700">
                        一般投票によって最も欲しいとの評価を受け、ほしいね賞を獲得。ユーザー視点での価値も高く評価されました。
                      </CardDescription>
                    </CardHeader>
                    <div className="p-6 pt-0">
                      <Link href="https://gugen.jp/subscriptions/work/1470" target="_blank" rel="noopener noreferrer">
                        <Button className="bg-[#01A0E9] text-white hover:bg-[#FFCB00] transition-all duration-300 w-full">
                          授賞詳細を見る
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* メディア掲載セクション */}
        <section className="py-28 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-[#01A0E9] mb-6">メディア掲載</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              様々なメディアで取り上げられています
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl bg-white/90 shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#01A0E9]/10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FFCB00]/10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>

              <div className="relative z-10 p-8">
                <div className="grid grid-cols-1 gap-y-6">
                  {[
                    {
                      media: "未来事業イノベーションアワード",
                      date: "2024.12.04",
                      description: "朝日新聞社が中心となり実施する未来事業イノベーションアワードにてファイナリストに選出されました",
                      link: "https://www.asahi.com/ads/tu/15496882",
                      logo: "/media-logos/asahi.png" // 仮のロゴパス
                    },
                    {
                      media: "ProtoPediaの時間",
                      date: "2024.12.18",
                      description: "プロトペディアの時間にて紹介していただきました",
                      link: "https://www.youtube.com/live/uscQOlHnzzg?si=yIDhbQiYTgy6Nj9U&t=2790",
                      logo: "/media-logos/protopedia.png" // 仮のロゴパス
                    },
                    {
                      media: "Digital PR Platform",
                      date: "2024.12.23",
                      description: "GUGEN2024のイベントレポートにて紹介していただきました",
                      link: "https://digitalpr.jp/r_detail.php?release_id=101530",
                      logo: "/media-logos/digitalpr.png" // 仮のロゴパス
                    },
                    {
                      media: "東京大学大学院情報学環・学際情報学府",
                      date: "2024.12.26",
                      description: "ニュースでGUGEN2024受賞を報じていただきました",
                      link: "https://www.iii.u-tokyo.ac.jp/news/2024122621779",
                      logo: "/media-logos/utokyo.png" // 仮のロゴパス
                    },
                    {
                      media: "基板の窓口 特集記事",
                      date: "2025.01.14",
                      description: "動画展示会レポートで取り上げていただきました",
                      link: "https://jpcb.jp/pickup/index.php?m=detail&pkid=390",
                      logo: "/media-logos/kiban.png" // 仮のロゴパス
                    },
                    {
                      media: "子供の科学のWebサイト KoKaNet",
                      date: "2025.02.05",
                      description: "子供の科学のWebサイトで取り上げていただきました",
                      link: "https://www.kodomonokagaku.com/read/88203/",
                      logo: "/media-logos/kokanet.png" // 仮のロゴパス
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={item.date}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`flex items-center p-6 ${
                        index % 2 === 0 ? "bg-[#01A0E9]/5" : "bg-white"
                      } rounded-xl hover:shadow-md transition-all duration-300`}
                    >
                      <div className="w-16 h-16 flex-shrink-0 bg-white/80 rounded-lg flex items-center justify-center mr-6">
                        {/* 実際にはロゴ画像を表示 */}
                        <div className="w-10 h-10 rounded-full bg-[#01A0E9]/20"></div>
                      </div>

                      <div className="flex-grow">
                        <div className="flex flex-wrap justify-between items-baseline mb-2">
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
                          <span className="text-gray-500 text-sm">{item.date}</span>
                        </div>
                        <p className="text-gray-700">{item.description}</p>
                      </div>

                      <div className="ml-4">
                        <Link href={item.link} target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#01A0E9]/10">
                            <ChevronDown className="h-6 w-6 text-[#01A0E9] transform rotate-270" />
                          </Button>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* チームメンバーセクション */}
        <section className="py-28 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-[#01A0E9] mb-6">チーム</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              4ZIGENメンバー
              <Link href="https://4zigenhp.vercel.app/" target="_blank" rel="noopener noreferrer">
                <Button className="ml-4 bg-[#01A0E9] text-white hover:bg-[#01A0E9]/80 transition-all duration-300 rounded-full px-4 py-1 text-sm shadow-md">
                  4ZIGEN公式サイト
                </Button>
              </Link>
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {shuffledMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={member.url} target="_blank" rel="noopener noreferrer">
                    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#01A0E9]/40 to-[#01A0E9]/60 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover transition-all duration-700 group-hover:scale-110 brightness-105 contrast-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#01A0E9]/80 via-[#01A0E9]/30 to-[#01A0E9]/10 opacity-40"></div>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-500 bg-gradient-to-t from-[#01A0E9]/60 to-[#01A0E9]/10 backdrop-blur-[2px] group-hover:backdrop-blur-[4px]">
                        <div className="relative">
                          <h3 className="text-2xl font-bold mb-2 drop-shadow-sm">{member.name}</h3>
                          <p className="text-white mb-4 drop-shadow-sm">{member.role}</p>

                          <div className="flex items-center">
                            <span className="text-sm text-white font-medium">詳細プロフィール</span>
                            <ChevronDown className="h-4 w-4 ml-2 transform -rotate-90" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* CTA セクション */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#01A0E9] to-[#0060A9] z-0"></div>

        {/* 装飾的な背景要素 */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white opacity-10 rounded-full"
              style={{
                width: Math.random() * 400 + 100,
                height: Math.random() * 400 + 100,
                borderRadius: '40%',
                filter: 'blur(80px)',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 60 - 30],
                y: [0, Math.random() * 60 - 30],
                rotate: [0, Math.random() * 180],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-5xl font-bold mb-8"
            >
              必要なときに必要なものを<br />あなたの手で作り出す
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl mb-12"
            >
              CottonSketchPenで始める新しいものづくり体験。<br />
              わたあめ構造の可能性を探求してみませんか？
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="bg-[#003B6D] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">CottonSketchPen</h2>
              <p className="text-white/80 mb-6">
                プラスチックをわた状に変化させ、ものづくりを可能にするデバイス
              </p>
              <div className="flex space-x-4">
                <Link href="https://x.com/4ZIGENGSii" className="text-white/80 hover:text-[#FFCB00] transition-all" aria-label="X (Twitter)">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-6">リンク</h2>
              <ul className="space-y-4">
                <li>
                  <Link href="https://gugen.jp/subscriptions/work/1470" className="text-white/80 hover:text-[#FFCB00] transition-all" aria-label="GUGENでのCottonSketchPen掲載ページ">
                    GUGEN
                  </Link>
                </li>
                <li>
                  <Link href="https://protopedia.net/prototype/6400" className="text-white/80 hover:text-[#FFCB00] transition-all" aria-label="ProtoPediaでのCottonSketchPen掲載ページ">
                    ProtoPedia
                  </Link>
                </li>
                <li>
                  <Link href="https://www.iiiexhibition.com/" className="text-white/80 hover:text-[#FFCB00] transition-all" aria-label="東京大学制作展公式サイト">
                    東京大学制作展
                  </Link>
                </li>
                <li>
                  <Link href="https://peatix.com/event/4181356/view?k=c97a8a32bb14bd502708b7c3d75bcb86bdefab90" className="text-white/80 hover:text-[#FFCB00] transition-all" aria-label="CottonSketchPenワークショップ情報">
                    ワークショップ
                  </Link>
                </li>
                <li>
                  <Link href="https://4zigenhp.vercel.app/" className="text-white/80 hover:text-[#FFCB00] transition-all" aria-label="4ZIGEN公式サイト">
                    4ZIGEN公式サイト
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-6">コンタクト</h2>
              <p className="text-white/80 mb-4">
                お問い合わせはこちらから
              </p>
              <Link href="mailto:kamashigsii@gmail.com" aria-label="CottonSketchPenへのお問い合わせメール">
                <Button className="bg-[#FFCB00] text-white hover:bg-white hover:text-[#01A0E9] transition-all duration-300 w-full mb-4">
                  お問い合わせ
                </Button>
              </Link>
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} CottonSketchPen. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <motion.button
        className="fixed bottom-8 right-8 bg-[#FFCB00] rounded-full p-4 cursor-pointer shadow-lg hover:shadow-xl z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ChevronDown className="w-8 h-8 text-[#01A0E9] transform rotate-180" />
      </motion.button>
    </div>
  )
}