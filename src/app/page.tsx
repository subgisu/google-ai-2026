import React from 'react';
import { ChevronRight, Zap, Database, PlayCircle, Layout, Globe, Code, CheckCircle2, Gift, BookOpen, Users } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white selection:bg-blue-500 font-sans">
      
      {/* 1. 상단 긴급 공지 바 */}
      <div className="bg-gradient-to-r from-red-600 to-blue-600 py-2 text-center text-sm font-bold animate-pulse">
        ⚠️ 현재 신청 폭주 중! 선착순 100명 마감 임박
      </div>

      {/* 2. Hero Section */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[700px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent opacity-50 blur-3xl" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-7xl font-black tracking-tight mb-8 leading-[1.15]">
            구글 AI 생태계를 쥔 사람이 <br/> 
            <span className="bg-gradient-to-r from-[#4285f4] via-[#ea4335] to-[#fbbc04] bg-clip-text text-transparent">
              2026년 AI를 지배합니다
            </span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            도구를 하나씩 쫓아다니면 영원히 따라잡을 수 없습니다.<br/>
            이제는 <strong>'흐름을 설계하는 사람'</strong>이 이기는 시대입니다.
          </p>
          
          <button className="group bg-white text-black px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-all flex items-center justify-center mx-auto gap-3 shadow-[0_0_30px_rgba(66,133,244,0.4)]">
            2/8(일) 무료특강 신청하기 <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* 3. 참여 혜택 섹션 (PDF 내용 반영) */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-[3rem] p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center flex items-center justify-center gap-3">
            <Gift className="text-yellow-400" /> 참여자 전원 15만원 상당 선물 증정
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <GiftItem title="나노바나나 활용법" desc="AI 이미지 생성 실전 가이드" price="29,000원" />
            <GiftItem title="지식창업 로드맵" desc="수익화 단계별 전략 가이드" price="39,000원" />
            <GiftItem title="창업 적합도 리스트" desc="시장성 진단 핵심 체크리스트" price="19,000원" />
            <GiftItem title="비즈니스 앱 템플릿" desc="Stitch 활용 업무 자동화 툴" price="59,000원" />
          </div>
        </div>
      </section>

      {/* 4. 스토리텔링 섹션 */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-zinc-300 text-lg leading-loose space-y-8">
        <p className="text-2xl font-bold text-white text-center mb-12 italic">"배우면 배울수록 오히려 목이 마르지 않나요?"</p>
        <p>새 도구를 익히면 앞서가는 것 같지만, 막상 "그래서 이걸로 뭘 하지?"라는 질문 앞에 멈칫하게 됩니다.</p>
        <p className="bg-blue-900/10 border-l-4 border-blue-500 p-6 rounded-r-2xl">
          구글은 지금 <strong>제미나이, 노트북LM, 베오, 플로우, 안티그래비티</strong>를 하나로 잇는 거대한 생태계를 구축했습니다. 개별 도구가 아닌 이 '연결'의 흐름을 아는 사람만이 2026년을 선점합니다.
        </p>
      </section>

      {/* 5. 커리큘럼 섹션 (PDF 1차~4차 수업 내용 반영) */}
      <section className="max-w-6xl mx-auto px-6 py-24 bg-zinc-950 rounded-[4rem]">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">특강 커리큘럼</h2>
        <div className="space-y-6">
          <CurriculumRow step="1단계" title="2026 AI 시장의 판을 읽는 법" detail="구글이 설계한 생태계의 구조적 이해와 변화" />
          <CurriculumRow step="2단계" title="압도적 퀄리티의 콘텐츠 생산" detail="제미나이 + 베오 + 나노바나나 워크플로우" />
          <CurriculumRow step="3단계" title="나만의 지식 베이스 구축" detail="노트북LM을 활용한 비즈니스 자산화" />
          <CurriculumRow step="4단계" title="수익화 자동화 시스템 구축" detail="스티치 & 안티그래비티 기반 무자본 창업" />
        </div>
      </section>

      {/* 6. 최종 CTA */}
      <section className="py-32 px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-8">기회는 준비된 사람에게만 <br className="hidden md:block"/> 선물을 줍니다.</h2>
        <p className="text-zinc-500 mb-12 text-xl">이 강의는 무료이지만, 강의 내용은 결코 가볍지 않습니다.</p>
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-16 py-6 rounded-full font-black text-2xl hover:scale-105 transition-all shadow-[0_20px_50px_rgba(37,99,235,0.3)]">
          무료 신청하고 혜택 받기
        </button>
        <p className="mt-6 text-zinc-600 font-medium italic">2/8(일) 저녁 8시 | ZOOM 라이브 진행</p>
      </section>

      <footer className="py-10 text-center text-zinc-800 border-t border-zinc-900">
        &copy; 2026 Google AI Ecosystem Masterclass
      </footer>
    </div>
  );
}

function GiftItem({ title, desc, price }: { title: string, desc: string, price: string }) {
  return (
    <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 text-center">
      <div className="text-zinc-500 line-through text-xs mb-1">{price}</div>
      <div className="font-bold text-lg mb-2 text-white">{title}</div>
      <div className="text-zinc-400 text-xs leading-tight">{desc}</div>
    </div>
  );
}

function CurriculumRow({ step, title, detail }: { step: string, title: string, detail: string }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 p-8 bg-zinc-900/30 border border-zinc-900 rounded-3xl hover:border-blue-500/50 transition-colors">
      <div className="text-blue-500 font-black text-xl shrink-0 uppercase">{step}</div>
      <div className="h-px md:h-10 md:w-px bg-zinc-800" />
      <div>
        <div className="text-xl font-bold mb-1">{title}</div>
        <div className="text-zinc-500">{detail}</div>
      </div>
    </div>
  );
}