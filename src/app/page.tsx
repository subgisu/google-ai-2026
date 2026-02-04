import React from 'react';
import { ChevronRight, Zap, Database, PlayCircle, Layout, Globe, Code, CheckCircle2, Clock } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white selection:bg-blue-500 font-sans">
      
      {/* 1. 상단 알림 바 */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-2 text-center text-sm font-bold">
        📢 2월 8일(일) 저녁 8시, 선착순 100명 무료 특강 오픈!
      </div>

      {/* 2. Hero Section */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[700px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent opacity-50 blur-3xl" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-7xl font-black tracking-tight mb-8 leading-[1.15]">
            구글 AI 생태계를 손에 쥔 사람이 <br/> 
            <span className="bg-gradient-to-r from-[#4285f4] via-[#ea4335] to-[#fbbc04] bg-clip-text text-transparent">
              2026년 AI를 지배합니다
            </span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            매일 쏟아지는 도구를 쫓아가는 삶은 오늘로 끝내십시오. <br/>
            이제는 도구가 아닌 <strong>'생태계'</strong>를 설계할 시간입니다.
          </p>
          
          {/* 카운트다운 타이머 UI (첨부파일 스타일 반영) */}
          <div className="flex justify-center gap-4 mb-12">
            <TimerUnit label="DAYS" value="04" />
            <TimerUnit label="HOURS" value="12" />
            <TimerUnit label="MINS" value="45" />
            <TimerUnit label="SECS" value="32" />
          </div>

          <button className="group bg-white text-black px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-all flex items-center justify-center mx-auto gap-3 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            무료 특강 지금 신청하기 <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* 3. 문제 제기 (Storytelling Section) */}
      <section className="max-w-3xl mx-auto px-6 py-20 border-y border-zinc-900">
        <div className="space-y-8 text-zinc-300 text-lg leading-loose">
          <p className="text-2xl font-bold text-white text-center mb-12 italic">"새로운 도구가 나올 때마다 불안하지 않으셨나요?"</p>
          <p>어제는 이미지 AI, 오늘은 영상 AI... 도구는 늘어나는데 정작 내 비즈니스에 어떻게 쓸지 몰라 멈칫하게 됩니다.</p>
          <p className="bg-zinc-900/50 p-6 rounded-2xl border-l-4 border-blue-500">
            <strong>전환점은 구글의 행보에 있습니다.</strong> 구글은 단순히 도구를 만드는 것이 아니라, 기획부터 제작, 배포까지 하나로 이어지는 '거대한 줄기'를 완성했습니다.
          </p>
          <p>2026년, 도구를 수집하는 사람은 지치고, 흐름을 설계하는 사람은 압도적인 격차를 벌릴 것입니다.</p>
        </div>
      </section>

      {/* 4. 구글 AI 생태계 상세 (Grid) */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">우리가 다룰 핵심 생태계</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DetailCard 
            title="기획 & 지식 베이스" 
            items={["Gemini: 비즈니스 의사결정 브레인", "NotebookLM: 나만의 지식 자산화"]}
            color="border-blue-500/30"
          />
          <DetailCard 
            title="콘텐츠 크리에이티브" 
            items={["Imagen 3: 고해상도 이미지 생성", "Veo: 영화급 영상 제작 시스템"]}
            color="border-red-500/30"
          />
          <DetailCard 
            title="자동화 & 에이전트" 
            items={["Opal: 스스로 움직이는 지능형 비서", "Flow: 복합 업무 자동화 워크플로우"]}
            color="border-yellow-500/30"
          />
          <DetailCard 
            title="웹 & 앱 빌더" 
            items={["Anti-Gravity: 초고속 웹 빌딩", "Stitch: 노코드 비즈니스 앱 구현"]}
            color="border-green-500/30"
          />
        </div>
      </section>

      {/* 5. 최종 CTA 섹션 */}
      <section className="bg-zinc-900/30 py-24 px-6 text-center border-t border-zinc-900">
        <h2 className="text-4xl font-bold mb-6">판을 읽는 사람만이 살아남습니다</h2>
        <p className="text-zinc-400 mb-10">이 모든 것을 연결하는 실전 비즈니스 전략, 2월 8일에 공개합니다.</p>
        <div className="inline-flex flex-col items-center">
          <button className="bg-blue-600 text-white px-12 py-5 rounded-full font-black text-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20">
            선착순 무료 참가 신청
          </button>
          <p className="mt-4 text-sm text-zinc-500 flex items-center gap-2">
            <CheckCircle2 size={16} /> 2026년 최신 데이터 기준 커리큘럼
          </p>
        </div>
      </section>

      {/* 하단 푸터 */}
      <footer className="py-10 text-center text-zinc-600 text-sm">
        &copy; 2026 구글 AI 생태계 마스터 클래스. All rights reserved.
      </footer>
    </div>
  );
}

function TimerUnit({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 md:w-20 md:h-20 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black mb-2">
        {value}
      </div>
      <span className="text-[10px] md:text-xs font-bold text-zinc-500 tracking-widest">{label}</span>
    </div>
  );
}

function DetailCard({ title, items, color }: { title: string, items: string[], color: string }) {
  return (
    <div className={`p-8 rounded-[2rem] bg-zinc-900/30 border ${color} hover:bg-zinc-900/50 transition-all`}>
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-current" /> {title}
      </h3>
      <ul className="space-y-4 text-zinc-400">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <CheckCircle2 size={18} className="text-blue-500 mt-1 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}