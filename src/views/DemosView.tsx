import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Play,
  Pause,
  Volume2,
  Sparkles,
  Radio,
  Mic,
  Sliders,
  Maximize2,
  Headphones,
  Square,
  HelpCircle
} from "lucide-react";

interface SpotOption {
  id: string;
  niche: string;
  title: string;
  voiceStyle: string;
  bgBeatType: "supermarket" | "pharmacy" | "clothing" | "cars" | "political";
  subtitleText: string[];
}

export default function DemosView() {
  const [activeSpot, setActiveSpot] = useState<string>("supermarket");
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundMode, setSoundMode] = useState<"studio" | "street">("studio");
  const [currentProgress, setCurrentProgress] = useState(0);
  const [currentSubtitleIdx, setCurrentSubtitleIdx] = useState(0);
  const [volume, setVolume] = useState(70);

  // Web Audio API refs for procedural sound synthesis
  const audioCtxRef = useRef<AudioContext | null>(null);
  const synthIntervalRef = useRef<any>(null);
  const progressIntervalRef = useRef<any>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const filterNodeRef = useRef<BiquadFilterNode | null>(null);
  const delayNodeRef = useRef<DelayNode | null>(null);

  const spotsList: SpotOption[] = [
    {
      id: "supermarket",
      niche: "Supermercado (Ofertas)",
      title: "Quarta-feira Verde - Super Baratão",
      voiceStyle: "Varejo Dinâmico, Alegre e Enérgico",
      bgBeatType: "supermarket",
      subtitleText: [
        "Atenção clientes! Começa agora a Quarta-Feira Verde do Super Baratão! 🍇🥦",
        "O gerente enlouqueceu de verdade! Abacaxi pérola doce, apenas 3 e 99 a unidade! 🍍",
        "E atenção: Alcatra bovina resfriada Friboi, peça inteira, só 29 e 90 o quilo! 🥩",
        "Corra para o açougue e garanta o churrasco! Super Baratão: Preço baixo todo dia! 🛒"
      ]
    },
    {
      id: "pharmacy",
      niche: "Farmácia de Manipulação",
      title: "Fórmula Exata - Saúde e Bem-Estar",
      voiceStyle: "Institucional, Suave, Compassivo e Confiável",
      bgBeatType: "pharmacy",
      subtitleText: [
        "Cuidar de você é a nossa maior vocação. Farmácia Fórmula Exata. 💊✨",
        "Traga sua receita de manipulação. Matérias-primas importadas com controle de qualidade rigoroso.",
        "Neste mês, toda a linha de colágeno hidrolisado e polivitamínicos está com 20% de desconto.",
        "Fórmula Exata: A dose certa para uma vida longa, saudável e feliz. Tele-entrega grátis! 📞"
      ]
    },
    {
      id: "clothing",
      niche: "Inauguração Loja de Roupas",
      title: "Nova Coleção - Closet Chic",
      voiceStyle: "Jovem, Vibrante, Estilosa e Contagiante",
      bgBeatType: "clothing",
      subtitleText: [
        "Alô Anápolis e Aracaju! Chegou a loja que vai revolucionar o seu guarda-roupa! Closet Chic! 👗👠",
        "Grande inauguração neste sábado com coquetel especial e DJ ao vivo esperando por você!",
        "Toda a loja com 30% de desconto na primeira compra. Vestidos, jeans e alfaiataria incríveis!",
        "Closet Chic: Sinta-se elegante, sinta-se poderosa! Visite nossas lojas físicas. Não perca! 🎉"
      ]
    },
    {
      id: "cars",
      niche: "Feirão de Concessionária",
      title: "Mega Feirão - Speed Motores",
      voiceStyle: "Voz Grave, Impactante, Urgente e Assertiva",
      bgBeatType: "cars",
      subtitleText: [
        "ATENÇÃO! É O MAIOR FEIRÃO DE CARROS JÁ VISTO EM ANÁPOLIS E ARACAJU! SPEED MOTORES! 🚗💨",
        "Taxa zero de verdade! Entrada facilitada em até dez vezes no cartão sem juros!",
        "Mais de cem veículos seminovos revisados com garantia total e IPVA pago! 🛡️",
        "É só este final de semana! Traga seu usado, pagamos até cem por cento da tabela Fipe!"
      ]
    },
    {
      id: "political",
      niche: "Campanha Institucional",
      title: "Prefeitura de Anápolis - Avanço Real",
      voiceStyle: "Solene, Confiante, Inspirador e Firme",
      bgBeatType: "political",
      subtitleText: [
        "Trabalho que se vê, progresso que se sente. Prefeitura de Anápolis. 🏢🌱",
        "Mais de dez novas escolas em tempo integral entregues e o novo hospital municipal operando.",
        "Estamos asfaltando mais de cinquenta bairros, trazendo dignidade e segurança para as famílias.",
        "Anápolis no rumo certo. Trabalho, honestidade e compromisso com o cidadão."
      ]
    }
  ];

  const currentSpotData = spotsList.find((s) => s.id === activeSpot) || spotsList[0];

  // Effect to clean up Audio Context on unmount
  useEffect(() => {
    return () => {
      stopProceduralSynth();
    };
  }, []);

  // Synchronize subtitles with the fake progress bar
  useEffect(() => {
    if (isPlaying) {
      const subtitlesCount = currentSpotData.subtitleText.length;
      const progressPerSub = 100 / subtitlesCount;
      const calculatedIdx = Math.min(
        Math.floor(currentProgress / progressPerSub),
        subtitlesCount - 1
      );
      setCurrentSubtitleIdx(calculatedIdx);
    }
  }, [currentProgress, isPlaying, activeSpot]);

  // Update volume gain node dynamically
  useEffect(() => {
    if (masterGainRef.current && audioCtxRef.current) {
      masterGainRef.current.gain.setValueAtTime(volume / 100 * 0.15, audioCtxRef.current.currentTime);
    }
  }, [volume]);

  // Update Web Audio API Filter Nodes on soundMode change
  useEffect(() => {
    if (audioCtxRef.current) {
      const now = audioCtxRef.current.currentTime;
      if (soundMode === "street") {
        // High-pass filter to sound like an outdoor megaphone/horn speaker
        if (filterNodeRef.current) {
          filterNodeRef.current.type = "bandpass";
          filterNodeRef.current.frequency.setValueAtTime(1200, now); // boost mid-high frequencies
          filterNodeRef.current.Q.setValueAtTime(1.5, now);
        }
        // Enable echo delay
        if (delayNodeRef.current) {
          delayNodeRef.current.delayTime.setValueAtTime(0.22, now); // delay of 220ms
        }
      } else {
        // Flat/Full studio audio spectrum
        if (filterNodeRef.current) {
          filterNodeRef.current.type = "allpass"; // let all pass naturally
        }
        // Disable delay echo (set delay time to 0)
        if (delayNodeRef.current) {
          delayNodeRef.current.delayTime.setValueAtTime(0, now);
        }
      }
    }
  }, [soundMode]);

  // Start the procedural synthesizer beat + progress loop
  const startProceduralSynth = () => {
    try {
      // Initialize Audio Context on user click
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
      }

      // Resume context if suspended
      if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;
      const now = ctx.currentTime;

      // Reset or setup audio nodes
      if (!masterGainRef.current) {
        masterGainRef.current = ctx.createGain();
        masterGainRef.current.gain.setValueAtTime(volume / 100 * 0.15, now);
        masterGainRef.current.connect(ctx.destination);
      }

      if (!filterNodeRef.current) {
        filterNodeRef.current = ctx.createBiquadFilter();
        // default allpass
        filterNodeRef.current.type = soundMode === "street" ? "bandpass" : "allpass";
        if (soundMode === "street") {
          filterNodeRef.current.frequency.setValueAtTime(1200, now);
          filterNodeRef.current.Q.setValueAtTime(1.5, now);
        }
        filterNodeRef.current.connect(masterGainRef.current);
      }

      if (!delayNodeRef.current) {
        delayNodeRef.current = ctx.createDelay(1.0);
        delayNodeRef.current.delayTime.setValueAtTime(soundMode === "street" ? 0.22 : 0, now);
        
        // Connect nodes to create feedback delay
        const delayFeedback = ctx.createGain();
        delayFeedback.gain.setValueAtTime(0.2, now); // 20% feedback echo

        delayNodeRef.current.connect(delayFeedback);
        delayFeedback.connect(delayNodeRef.current); // loop

        // Connect input filter node into both dry master and echo delay
        filterNodeRef.current.connect(delayNodeRef.current);
        delayNodeRef.current.connect(masterGainRef.current);
      }

      // Procedural note synthesis interval based on spot type
      let step = 0;
      const beatInterval = currentSpotData.bgBeatType === "cars" ? 180 
        : currentSpotData.bgBeatType === "clothing" ? 220
        : currentSpotData.bgBeatType === "political" ? 400
        : currentSpotData.bgBeatType === "pharmacy" ? 500
        : 300; // supermarket

      synthIntervalRef.current = setInterval(() => {
        if (!audioCtxRef.current || !filterNodeRef.current) return;
        const c = audioCtxRef.current;
        const beatTime = c.currentTime;

        // Create oscillator for pleasant melodic notes simulating radio backing
        const osc = c.createOscillator();
        const nodeGain = c.createGain();
        osc.connect(nodeGain);
        nodeGain.connect(filterNodeRef.current);

        step++;

        // Procedural music styling based on niche
        if (currentSpotData.bgBeatType === "supermarket") {
          // Melodic happy chord notes
          const scale = [261.63, 329.63, 392.00, 523.25]; // C major chord
          const freq = scale[step % scale.length];
          osc.type = "triangle";
          osc.frequency.setValueAtTime(freq, beatTime);
          nodeGain.gain.setValueAtTime(0.3, beatTime);
          nodeGain.gain.exponentialRampToValueAtTime(0.001, beatTime + 0.25);
          osc.start(beatTime);
          osc.stop(beatTime + 0.3);
        } 
        else if (currentSpotData.bgBeatType === "clothing") {
          // Fast upbeat house bass pulse
          const scale = [110.00, 110.00, 165.00, 130.81]; // A minor electronic bass
          const freq = scale[step % scale.length];
          osc.type = "sawtooth";
          osc.frequency.setValueAtTime(freq, beatTime);
          nodeGain.gain.setValueAtTime(0.25, beatTime);
          nodeGain.gain.exponentialRampToValueAtTime(0.001, beatTime + 0.15);
          osc.start(beatTime);
          osc.stop(beatTime + 0.18);
        }
        else if (currentSpotData.bgBeatType === "cars") {
          // Aggressive high impact synthesizer buzz
          const scale = [87.31, 130.81, 98.00, 146.83]; // Fast metal synth
          const freq = scale[step % scale.length];
          osc.type = "sawtooth";
          osc.frequency.setValueAtTime(freq, beatTime);
          nodeGain.gain.setValueAtTime(0.35, beatTime);
          nodeGain.gain.exponentialRampToValueAtTime(0.001, beatTime + 0.12);
          osc.start(beatTime);
          osc.stop(beatTime + 0.15);
        }
        else if (currentSpotData.bgBeatType === "pharmacy") {
          // Relaxing slow sine waves
          const scale = [293.66, 349.23, 440.00, 587.33]; // D minor warm soft notes
          const freq = scale[step % scale.length];
          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, beatTime);
          nodeGain.gain.setValueAtTime(0.4, beatTime);
          nodeGain.gain.exponentialRampToValueAtTime(0.001, beatTime + 0.45);
          osc.start(beatTime);
          osc.stop(beatTime + 0.5);
        }
        else if (currentSpotData.bgBeatType === "political") {
          // Slow solene major triad
          const scale = [196.00, 246.94, 293.66, 392.00]; // G major brass-like sound
          const freq = scale[step % scale.length];
          osc.type = "triangle";
          osc.frequency.setValueAtTime(freq, beatTime);
          nodeGain.gain.setValueAtTime(0.3, beatTime);
          nodeGain.gain.exponentialRampToValueAtTime(0.001, beatTime + 0.35);
          osc.start(beatTime);
          osc.stop(beatTime + 0.4);
        }

      }, beatInterval);

      // Playback progress simulation
      const totalTimeMs = 12000; // 12 seconds loop
      const updateIntervalMs = 100;
      const progressStep = (updateIntervalMs / totalTimeMs) * 100;

      progressIntervalRef.current = setInterval(() => {
        setCurrentProgress((prev) => {
          if (prev >= 100) {
            return 0; // loop back
          }
          return prev + progressStep;
        });
      }, updateIntervalMs);

    } catch (e) {
      console.warn("Web Audio API not fully available or blocked:", e);
    }
  };

  const stopProceduralSynth = () => {
    if (synthIntervalRef.current) {
      clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = null;
    }
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
  };

  const handlePlayToggle = () => {
    if (isPlaying) {
      stopProceduralSynth();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      startProceduralSynth();
    }
  };

  const handleSpotSelect = (id: string) => {
    setActiveSpot(id);
    setCurrentProgress(0);
    setCurrentSubtitleIdx(0);
    if (isPlaying) {
      stopProceduralSynth();
      // start immediately with new spot properties
      setTimeout(() => {
        startProceduralSynth();
      }, 50);
    }
  };

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden bg-midnight-carbon">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-yellow/3 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-white/2 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Title Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-xs font-semibold text-brand-yellow mb-4">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            SHOWROOM DE LOCUÇÃO E ÁUDIO
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 font-display">
            Demonstrador Interativo de Spots
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-xs sm:text-sm font-light">
            Teste e ouça a diferença técnica dos nossos spots! Use o console abaixo para alternar entre os nichos comerciais e simular o efeito acústico de uma corneta de carro de som real.
          </p>
        </div>

        {/* Interactive Soundboard Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Select Spots (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="bg-white/[0.01] border border-white/5 rounded-3xl p-6" id="spot-selection-box">
              <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4 border-b border-white/5 pb-2">
                Selecione o Nicho de Mercado
              </h3>

              <div className="space-y-2.5">
                {spotsList.map((spot) => {
                  const isSelected = spot.id === activeSpot;
                  return (
                    <button
                      key={spot.id}
                      onClick={() => handleSpotSelect(spot.id)}
                      className={`w-full text-left p-3.5 rounded-xl transition-all border flex items-center justify-between cursor-pointer group ${
                        isSelected
                          ? "bg-brand-yellow text-black border-transparent font-bold shadow-md shadow-brand-yellow/5"
                          : "bg-black/30 border-white/5 text-slate-300 hover:border-white/15"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          isSelected ? "bg-black/10 text-black" : "bg-white/5 text-brand-yellow group-hover:bg-white/10"
                        }`}>
                          <Mic className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold leading-none">{spot.niche}</p>
                          <span className={`text-[9px] block mt-1 ${isSelected ? "text-neutral-800" : "text-slate-500"}`}>
                            Voz: {spot.voiceStyle.split(",")[0]}
                          </span>
                        </div>
                      </div>
                      <div className={`w-2 h-2 rounded-full ${isSelected ? "bg-black animate-pulse" : "bg-slate-700"}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Explanatory Info Card */}
            <div className="bg-[#0B0B0E] border border-white/5 rounded-2xl p-5 flex items-start gap-3 text-xs text-slate-400">
              <HelpCircle className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
              <div>
                <strong className="text-white font-semibold block mb-0.5">Como ouvir?</strong>
                Aperte <strong className="text-white">"Ouvir Spot Demo"</strong> no console ao lado. Um som sintetizado rítmico será gerado pelo seu navegador em tempo real para representar a música de fundo e as legendas vão simular a voz do locutor!
              </div>
            </div>
          </div>

          {/* Right Column: Premium Audio Player Console (7 columns) */}
          <div className="lg:col-span-7">
            <div className="bg-black/45 border border-white/10 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between h-full shadow-2xl" id="audio-console-card">
              <div className="absolute top-0 right-0 w-36 h-36 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />
              
              {/* Top Row: Track Meta */}
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-brand-yellow animate-ping" />
                    <span className="text-[10px] font-mono text-brand-yellow uppercase tracking-wider font-bold">AÇÃO STUDIO ENGINE</span>
                  </div>
                  
                  {/* Studio vs Street acoustic selector */}
                  <div className="flex bg-white/5 p-1 rounded-xl border border-white/10">
                    <button
                      onClick={() => setSoundMode("studio")}
                      className={`px-3 py-1.5 rounded-lg text-[9px] font-extrabold uppercase tracking-widest transition-all cursor-pointer flex items-center gap-1 ${
                        soundMode === "studio"
                          ? "bg-brand-yellow text-black font-black"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      <Headphones className="w-3 h-3" />
                      Estúdio
                    </button>
                    <button
                      onClick={() => setSoundMode("street")}
                      className={`px-3 py-1.5 rounded-lg text-[9px] font-extrabold uppercase tracking-widest transition-all cursor-pointer flex items-center gap-1 ${
                        soundMode === "street"
                          ? "bg-brand-yellow text-black font-black"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      <Sliders className="w-3 h-3" />
                      Megafone Rua
                    </button>
                  </div>
                </div>

                <div className="mb-6">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{currentSpotData.niche}</span>
                  <h2 className="text-xl sm:text-2xl font-black text-white mt-1 font-display leading-tight">{currentSpotData.title}</h2>
                  <p className="text-xs text-slate-400 mt-1.5 flex items-center gap-1">
                    <Mic className="w-3.5 h-3.5 text-brand-yellow" />
                    Estilo de Locução: <strong className="text-slate-200">{currentSpotData.voiceStyle}</strong>
                  </p>
                </div>
              </div>

              {/* Middle Section: Animated Dynamic Subtitles Box representing the voiceover track */}
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 min-h-[140px] flex items-center justify-center text-center relative overflow-hidden mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/[0.02] to-transparent pointer-events-none" />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeSpot}-${currentSubtitleIdx}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    <p className="text-sm sm:text-base font-bold text-white max-w-md mx-auto leading-relaxed">
                      "{currentSpotData.subtitleText[currentSubtitleIdx]}"
                    </p>
                    <span className="text-[9px] font-mono uppercase tracking-widest text-brand-yellow inline-block bg-brand-yellow/10 px-2 py-0.5 rounded">
                      Legenda do Locutor • Sincronizado
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Section: Equalizer Wave + Progress bar + Audio Controls */}
              <div className="space-y-6">
                {/* Visualizer Wave */}
                <div className="h-10 flex items-end justify-center gap-1 bg-black/40 rounded-xl p-2 border border-white/5">
                  {Array.from({ length: 28 }).map((_, i) => {
                    // Randomizer tied to playback
                    const randomMultiplier = isPlaying ? (0.2 + Math.random() * 0.8) : 0.08;
                    const heightVal = Math.floor(randomMultiplier * 100);
                    return (
                      <div
                        key={i}
                        className={`w-1 rounded-full transition-all duration-100 ${
                          isPlaying ? "bg-brand-yellow" : "bg-slate-700"
                        }`}
                        style={{ height: `${heightVal}%` }}
                      />
                    );
                  })}
                </div>

                {/* Progress bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>{isPlaying ? `0:${Math.floor(currentProgress * 0.12).toString().padStart(2, "0")}` : "0:00"}</span>
                    <span>0:12</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden relative cursor-pointer">
                    <div
                      className="h-full bg-brand-yellow transition-all duration-100"
                      style={{ width: `${currentProgress}%` }}
                    />
                  </div>
                </div>

                {/* Main controls row */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pt-6">
                  {/* Left Side: Volume slider */}
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <Volume2 className="w-4 h-4 text-slate-500" />
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={volume}
                      onChange={(e) => setVolume(Number(e.target.value))}
                      className="w-full sm:w-24 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-yellow"
                    />
                    <span className="text-[10px] font-mono text-slate-500 w-6">{volume}%</span>
                  </div>

                  {/* Center/Right: Play Button */}
                  <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                    <button
                      onClick={handlePlayToggle}
                      className={`w-full sm:w-auto px-6 py-3 rounded-xl font-extrabold text-xs uppercase tracking-widest cursor-pointer flex items-center justify-center gap-2 transition-all ${
                        isPlaying
                          ? "bg-white/10 text-white hover:bg-white/15 border border-white/15"
                          : "bg-brand-yellow text-black hover:bg-[#ffd633] shadow-lg shadow-brand-yellow/10 border border-transparent"
                      }`}
                    >
                      {isPlaying ? (
                        <>
                          <Square className="w-3.5 h-3.5 fill-current text-white stroke-none" />
                          Pausar Spot
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 fill-current text-black stroke-none" />
                          Ouvir Spot Demo
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Accoustic mode notice */}
                <p className="text-[10px] text-center text-slate-500 font-light italic mt-2">
                  {soundMode === "street" 
                    ? "🔊 Simulação de Corneta Ativa: Adicionado filtro passa-banda de 1.2kHz e eco ambiente de rua." 
                    : "🎧 Estúdio Flat Ativo: Áudio original limpo, de alta definição diretamente da mesa."}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
