"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [showParticles, setShowParticles] = useState(false)

  useEffect(() => {
    // Iniciar las partículas después de que la página cargue
    const timer = setTimeout(() => {
      setShowParticles(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100)
      }
    }

    audio.addEventListener("timeupdate", updateProgress)

    return () => {
      audio.removeEventListener("timeupdate", updateProgress)
    }
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseFloat(e.target.value)
    setProgress(value)
    if (audioRef.current && audioRef.current.duration) {
      audioRef.current.currentTime = (value / 100) * audioRef.current.duration
    }
  }

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Fondo con efecto de luz */}
      <div className="fixed inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-black">
          <Image src="/images/light-rays.jpeg" alt="Rayos de luz" fill className="object-cover opacity-70" priority />
        </div>
      </div>

      {/* Partículas de luz */}
      {showParticles && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-yellow-300/60 animate-float"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4 py-16 max-w-3xl">
        <div className="space-y-12 text-lg leading-relaxed">
          <div className="bg-black/60 backdrop-blur-sm p-6 rounded-lg border border-amber-900/30 shadow-lg shadow-amber-500/10">
            <div className="mb-4 italic text-amber-200 font-poetic tracking-wide">
              <p className="text-center">
                El porvenir es tan irrevocable
                <br />
                como el rígido ayer. No hay una cosa
                <br />
                que no sea una letra silenciosa
                <br />
                de la eterna escritura indescifrable
                <br />
                cuyo libro es el tiempo.
              </p>
              <p className="text-center mt-4">
                Quien se aleja de su casa ya ha vuelto.
                <br />
                Nuestra vida es la senda futura y recorrida.
                <br />
                El rigor ha tejido la madeja.
              </p>
              <p className="text-center mt-4">
                No te arredres. La ergástula es oscura,
                <br />
                la firme trama es de incesante hierro,
                <br />
                pero en algún recodo de tu encierro
                <br />
                puede haber un descuido, una hendidura.
              </p>
              <p className="text-center mt-4">
                El camino es fatal como la flecha
                <br />
                pero en las grietas está Dios, que acecha.
              </p>
            </div>
            <p className="text-right text-amber-400 text-sm font-poetic">JL Borges. "Para una versión del «I King»"</p>
          </div>

          <div className="bg-black/60 backdrop-blur-sm p-6 rounded-lg border border-amber-900/30 shadow-lg shadow-amber-500/10">
            <p className="mb-4 text-amber-200 italic font-poetic tracking-wide leading-relaxed">
              El cambio de vida que genera lo recorrido en Fase Kawsariy hace que este ciclo sea, lo que en su nombre
              está inscripto, Kawsariy (Quechua) significa Volver a la vida, te invito a entenderlo como "reencuentro
              con la luz" Sí esto es lo que sucedió en el transcurso de tu recorrido, hemos logrado el resultado.
              Resultado que te deja al borde de un abismo de magia, en el que, viven las Enseñanzas ocultas, los mejores
              manjares y los más inimaginables Tesoros que un humano puede alcanzar. Ahora está en ti dar el gran salto
              al vacío con el cual el águila despliega su gran vuelo, su Gran Viaje.. que ahora es.. Tu Gran Viaje.
            </p>
          </div>

          <div className="bg-black/60 backdrop-blur-sm p-6 rounded-lg border border-amber-900/30 shadow-lg shadow-amber-500/10">
            <div className="mb-4 italic text-amber-200 font-poetic tracking-wide">
              <p>
                Pocos conocen, hasta ahora, este Viaje
                <br />
                que incluye Infinitos Viajes.
                <br />
                Aunque haya comenzado hace milenios,
                <br />
                siempre fue igual.
                <br />
                Desde siempre,
                <br />
                solo se Desoculta para Quién Está Ahí.
                <br />
                Para Quien realiza Su Recorrido.
              </p>

              <p className="mt-4">
                El barco, navega entre dos orillas:
                <br />
                Occidente y Oriente.
                <br />
                El Río,
                <br />
                punto de Encuentro entre ambas Orillas
                <br />
                …Es La Enseñanza.
              </p>

              <p className="mt-4">
                Muchos se arrojan;
                <br />
                pues El Viaje nunca es como creían.
                <br />
                Solo logra Permanecer Quien arroja al Río
                <br />a aquel que fue en el momento de subir al barco.
              </p>

              <p className="mt-4">
                El Río es caudaloso;
                <br />y naufragará quien no aprenda a Usar Su Fuerza.
              </p>

              <p className="mt-4">
                Y como todo Río,
                <br />
                Desemboca en Un Mar
                <br />
                …Infinito: El Mar de la Existencia.
                <br />
                Oculto en el "océano".
              </p>

              <p className="mt-4">
                Sólo Vivirá quien muera en el Recorrido.
                <br />
                El secreto: Aprender a Escuchar en el Viento.
              </p>

              <p className="mt-4">…he aquí, el Diario de A Bordo.</p>
            </div>
            <p className="text-right text-amber-400 text-sm font-poetic">JL Parise. "El viaje iniciático"</p>
          </div>

          <div className="bg-black/60 backdrop-blur-sm p-6 rounded-lg border border-amber-900/30 shadow-lg shadow-amber-500/10 text-center mb-32">
            <p className="text-2xl text-amber-200 font-semibold italic font-poetic tracking-wide">
              Si lo eliges, nos encontraremos A Bordo.
              <br />
              <br />
              Gracias!
            </p>
          </div>
        </div>
      </div>

      {/* Reproductor de audio fijo */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-amber-900/30 p-4 z-50">
        <div className="max-w-3xl mx-auto flex items-center gap-4">
          <button
            onClick={togglePlay}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-500 text-black hover:bg-amber-400 transition-colors"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>

          <div className="flex-1">
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleProgressChange}
              className="w-full h-2 bg-amber-900/50 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
          </div>

          <button
            onClick={toggleMute}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-900/50 text-amber-300 hover:bg-amber-800/50 transition-colors"
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>

          <audio ref={audioRef} src="/audio/background-music.mp3" loop className="hidden" />
        </div>
      </div>
    </main>
  )
}

