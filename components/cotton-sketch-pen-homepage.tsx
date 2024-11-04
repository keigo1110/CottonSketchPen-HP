"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export function CottonSketchPenHomepageComponent() {
  const [activeImage, setActiveImage] = useState(0)

  const images = [
    "/machine.JPG?height=400&width=600",
    "/1102wata.JPG?height=400&width=600",
    "/wataame.jpeg?height=400&width=600",
  ]

  const teamMembers = [
    { name: "岡空来", role: "建築, 空気構造", image: "/members/oka.jpg?height=200&width=200" },
    { name: "金澤政宜", role: "ロボティクス, ヒューマノイドロボット", image: "/members/kanazawa.jpg?height=200&width=200" },
    { name: "中田裕紀", role: "コンピュータサイエンス, 群ロボット", image: "/members/nakata.jpg?height=200&width=200" },
    { name: "南田桂吾", role: "ロボティクス, CV", image: "/members/minamida.jpg?height=200&width=200" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#01A0E9] via-white to-[#01A0E9] text-white">
      {/* ヒーローセクション */}
      <header className="container mx-auto py-16">
        <h1 className="text-6xl font-bold text-center mb-4 animate-fade-in">CottonSketchPen</h1>
        <p className="text-2xl text-center mt-4 animate-slide-up">必要なときに必要なものを作り出せる</p>
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
            わたあめの活動
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
            className="space-x-4"
          >
            <Link href="https://www.iiiexhibition.com/">
              <Button className="bg-[#FFCB00] text-[#01A0E9] hover:bg-[#FD000F] hover:text-white transition-all duration-300 transform hover:scale-105 text-lg px-8 py-4 rounded-full shadow-lg">
                東京大学制作展2024
              </Button>
            </Link>
            <Link href="/products">
              <Button className="bg-[#FFCB00] text-[#01A0E9] hover:bg-[#FD000F] hover:text-white transition-all duration-300 transform hover:scale-105 text-lg px-8 py-4 rounded-full shadow-lg">
                ワークショップ
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* デモ動画セクション */}
        <section className="py-16 bg-white/80 rounded-xl shadow-lg mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-[#01A0E9]">デモ動画</h2>
          <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
            <iframe
              src="https://www.youtube.com/watch?v=POLLbRla_gg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-xl shadow-2xl"
            ></iframe>
          </div>
        </section>

        {/* 製品写真セクション */}
        <section className="py-16 bg-white/80 rounded-xl shadow-lg mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-[#01A0E9]">製品写真</h2>
          <div className="relative max-w-4xl mx-auto">
            <motion.img
              key={activeImage}
              src={images[activeImage]}
              alt={`CottonSketchPen 写真 ${activeImage + 1}`}
              className="w-full h-auto max-h-[600px] object-contain rounded-xl shadow-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
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

        {/* チームメンバーセクション */}
        <section className="py-16 bg-white/80 rounded-xl shadow-lg mb-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#01A0E9]">チームメンバー</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-white/90 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <img src={member.image} alt={member.name} className="w-full h-auto rounded-xl shadow-md" />
                </CardHeader>
                <CardContent>
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