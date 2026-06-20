'use client'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DeepSlateLogo from '@/components/DeepSlateLogo'

const ARTICLES: Record<string, {
  cat: string; date: string; readTime: string; title: string; excerpt: string
  body: Array<{ type: 'p' | 'h2' | 'pull' | 'ul'; text?: string; items?: string[] }>
}> = {
  'ai-leadership': {
    cat: 'AI Strategy',
    date: '14 February 2025',
    readTime: '8 min read',
    title: "AI strategy is not an IT question. It's a leadership question.",
    excerpt: 'Most organisations approach AI as a technology deployment problem. The ones that succeed treat it as a leadership challenge first — and a technology challenge second.',
    body: [
      { type: 'p', text: 'Every week, a new AI tool launches. Every month, another survey tells us that organisations are either "behind on AI" or "ahead on AI" based on how many tools they have deployed. And every quarter, leadership teams are asked to sign off on AI investments they don\'t fully understand.' },
      { type: 'p', text: 'This is the wrong frame entirely. The question is not how many AI tools you have. The question is whether you know what you\'re trying to achieve, have the right people to get there, and have built the governance structures to make good decisions along the way.' },
      { type: 'h2', text: 'Why technology-first AI strategies fail' },
      { type: 'p', text: 'When AI is positioned as an IT question, the decision-making naturally falls to technology teams. But AI decisions — about where to apply it, how to govern it, what risks to accept — are fundamentally strategic decisions. They require domain expertise, risk judgement, and organisational authority that technology teams often don\'t have.' },
      { type: 'ul', items: ['AI use cases that don\'t connect to real business priorities', 'Governance structures that exist on paper but not in practice', 'Investment decisions made without a coherent framework for evaluation', 'A widening gap between AI experimentation and organisational capability'] },
      { type: 'pull', text: '"The organisations that succeed with AI are the ones where the CEO has a point of view — not just the CTO."' },
      { type: 'h2', text: 'What a leadership-first AI strategy looks like' },
      { type: 'p', text: 'A leadership-first AI strategy begins with three questions: Where are the highest-value opportunities for AI in our organisation? What are the risks we\'re willing to accept, and which are we not? And what capability do we need to build — not just in technology, but in governance, culture, and leadership?' },
      { type: 'p', text: 'These are not questions with universal answers. They require your leadership team to do the hard work of thinking through your specific context. That\'s uncomfortable. It\'s also the only way to build an AI strategy that will actually work.' },
    ],
  },
  'edu-fails': {
    cat: 'Education',
    date: '3 February 2025',
    readTime: '5 min read',
    title: 'Why executive AI education fails — and what to do about it.',
    excerpt: "Too much AI training talks about the technology. Not enough trains leaders on the decisions they'll actually face.",
    body: [
      { type: 'p', text: 'Executive AI education is a booming market. Programmes, workshops, bootcamps, and certificates promise to make senior leaders "AI-ready". Most of them fail to deliver on that promise — not because the content is wrong, but because it addresses the wrong questions.' },
      { type: 'h2', text: 'The typical approach' },
      { type: 'p', text: 'Most AI programmes for executives focus on demystifying the technology: what machine learning is, how large language models work, what the difference between narrow and general AI is. This is useful context. But it doesn\'t prepare leaders for the decisions they will actually face.' },
      { type: 'pull', text: '"Understanding how a neural network works is not what helps a CEO decide whether to commission an AI project."' },
      { type: 'h2', text: 'What leaders actually need' },
      { type: 'ul', items: ['Frameworks for evaluating AI investment proposals', 'Language to ask good questions of their technical teams', 'Mental models for AI risk — not just opportunity', 'Understanding of how AI governance works in practice', 'Confidence to challenge AI vendors'] },
      { type: 'p', text: 'The best executive AI education is decision-focused, not technology-focused. It works backwards from the specific decisions that senior leaders will face, and builds the knowledge and frameworks they need to make those decisions well.' },
    ],
  },
  'slide-deck': {
    cat: 'Digital Transformation',
    date: '22 January 2025',
    readTime: '6 min read',
    title: 'Digital transformation fails when strategy stops at the slide deck.',
    excerpt: "Execution is where transformation lives or dies. Here's how to close the gap between ambition and action.",
    body: [
      { type: 'p', text: 'Organisations are remarkably good at producing digital transformation strategies. They are significantly less good at executing them. The gap between the beautiful slide deck presented to the board and the reality of what changes in practice is one of the most persistent failures in business.' },
      { type: 'h2', text: 'Why the gap exists' },
      { type: 'p', text: 'The slide deck is produced at a moment of maximum energy and commitment. It is shaped by external consultants who leave after delivery. It is approved by a leadership team who have many other priorities. And it lands in an organisation that is simultaneously trying to run the business and change it.' },
      { type: 'pull', text: '"A transformation strategy that cannot be executed is not a strategy. It is a wish list."' },
      { type: 'h2', text: 'Closing the gap' },
      { type: 'ul', items: ['Build execution capability before you announce the strategy', 'Appoint accountable owners for each workstream — not just sponsors', 'Create governance structures with real authority to make decisions', 'Measure progress in outcomes, not activities', 'Plan for resistance — it is not a failure, it is a data point'] },
      { type: 'p', text: 'The organisations that close this gap are the ones that treat execution as part of strategy, not an afterthought. They invest as much in implementation capability as they do in strategy development. And they create the conditions for sustained change, not just the initial impulse.' },
    ],
  },
  'board-ai': {
    cat: 'AI Strategy',
    date: '10 January 2025',
    readTime: '7 min read',
    title: "The board's AI blind spot: governance without understanding.",
    excerpt: "Boards are increasingly being asked to govern AI. Most aren't yet equipped to do so.",
    body: [
      { type: 'p', text: 'The regulators are arriving. In the UK, the EU, and increasingly globally, AI governance is becoming a board-level responsibility. Directors will be expected to demonstrate that their organisations are using AI responsibly, that risks are managed, and that accountability is clear.' },
      { type: 'h2', text: 'The challenge' },
      { type: 'p', text: 'Most boards are not equipped to govern AI. The average board has limited exposure to the technology, limited frameworks for evaluating AI risk, and limited vocabulary to ask good questions of management. This is not a criticism — it is a structural gap that needs to be closed urgently.' },
      { type: 'pull', text: '"You cannot govern what you do not understand. And you cannot understand AI through one slide in a board pack."' },
      { type: 'h2', text: 'What good AI governance looks like' },
      { type: 'ul', items: ['A clear AI policy approved by the board', 'An AI risk register reviewed regularly', 'A named executive accountable for AI governance', 'Board education on AI risk and ethics — not technology', 'External assurance on AI governance at least annually'] },
      { type: 'p', text: 'The boards that will navigate this well are the ones that invest in their own education now — before the regulators require it, before an incident forces the conversation, and while there is still time to build governance structures thoughtfully rather than reactively.' },
    ],
  },
  'culture': {
    cat: 'Digital Transformation',
    date: '5 January 2025',
    readTime: '4 min read',
    title: 'The quiet failure of digital transformation: why culture beats technology every time.',
    excerpt: 'The hardest part of transformation was never the tech. It was always the people — and that matters more than ever.',
    body: [
      { type: 'p', text: 'Ask any experienced transformation leader what caused their most painful failures, and they will rarely say "the technology was wrong". They will say: "the culture wasn\'t ready." Or: "we didn\'t bring people with us." Or: "the leadership said the right things but didn\'t change how they behaved."' },
      { type: 'h2', text: 'What culture means in practice' },
      { type: 'p', text: 'Culture is not an abstract concept. It is the specific patterns of behaviour, decision-making, and communication that exist in an organisation. It is what actually happens, not what the values statement says should happen.' },
      { type: 'pull', text: '"The technology is rarely the limiting factor in digital transformation. The culture almost always is."' },
      { type: 'ul', items: ['How quickly decisions are made — and by whom', 'Whether people feel safe to raise problems early', 'How failure is treated — as data or as blame', 'Whether learning is rewarded or just performance', 'How cross-functional collaboration actually works (not in theory)'] },
      { type: 'p', text: 'Transformation programmes that invest in culture — through leadership behaviour modelling, genuine engagement with frontline staff, and sustained communication — outperform those that treat culture as a communications exercise. The technology will follow. The culture must lead.' },
    ],
  },
  'stop-buying': {
    cat: 'Opinion',
    date: '18 December 2024',
    readTime: '5 min read',
    title: 'Stop buying AI. Start thinking about AI.',
    excerpt: 'The rush to adopt AI tools is producing a new kind of organisational debt. Slow down, think strategically, then move with purpose.',
    body: [
      { type: 'p', text: 'There is enormous pressure on organisations to adopt AI. The pressure comes from the technology vendors (understandably), from the press (predictably), and increasingly from boards who have read the same headlines and want to know "what are we doing on AI?"' },
      { type: 'p', text: 'The result is a wave of AI adoption that is fast, fragmented, and largely unstrategic. Individual teams are buying tools. IT departments are deploying platforms. Executives are commissioning pilots. And almost nobody is asking whether this adds up to something coherent.' },
      { type: 'h2', text: 'The cost of thoughtless adoption' },
      { type: 'ul', items: ['Technical debt as tools proliferate without integration', 'Governance gaps as AI systems operate without oversight', 'Talent confusion as roles and responsibilities blur', 'Wasted investment as tools are deployed that don\'t connect to real needs', 'Risk accumulation as AI is used in ways no policy covers'] },
      { type: 'pull', text: '"Moving fast with AI sounds smart until you\'re moving fast in the wrong direction."' },
      { type: 'h2', text: 'A better approach' },
      { type: 'p', text: 'The organisations that will get the most from AI are not the ones who adopted the most tools the fastest. They are the ones who stopped, asked hard questions, built a coherent strategy, established governance structures — and then moved with purpose. Slower at first. Significantly faster, and more effectively, after.' },
    ],
  },
}

const RELATED = [
  { slug: 'ai-leadership', cat: 'AI Strategy', title: "AI strategy is not an IT question. It's a leadership question." },
  { slug: 'board-ai', cat: 'AI Strategy', title: "The board's AI blind spot: governance without understanding." },
  { slug: 'edu-fails', cat: 'Education', title: 'Why executive AI education fails — and what to do about it.' },
]

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = ARTICLES[params.slug]
  if (!article) notFound()

  const related = RELATED.filter((r) => r.slug !== params.slug).slice(0, 2)

  return (
    <main>
      <Navbar />

      {/* Article hero */}
      <section style={{ background: '#000', color: '#fff', padding: '128px 0 64px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 60% 40%, rgba(118,185,0,0.06) 0%, transparent 60%)' }} />
        <div style={{ maxWidth: 780, margin: '0 auto', padding: '0 48px', position: 'relative', zIndex: 1 }}>
          <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#000', background: '#76b900', borderRadius: 2, padding: '5px 12px', marginBottom: 22 }}>{article.cat}</span>
          <h1 style={{ margin: '0 0 20px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(26px, 4vw, 44px)', lineHeight: 1.1 }}>{article.title}</h1>
          <p style={{ margin: '0 0 24px', fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,0.65)' }}>{article.excerpt}</p>
          <p style={{ margin: 0, fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
            {article.date} · {article.readTime}
          </p>
        </div>
      </section>

      {/* Article body */}
      <article style={{ maxWidth: 780, margin: '0 auto', padding: '64px 48px 80px' }}>
        <div className="article-body">
          {article.body.map((block, i) => {
            if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>
            if (block.type === 'p') return <p key={i}>{block.text}</p>
            if (block.type === 'pull') return (
              <div key={i} className="article-pull">{block.text}</div>
            )
            if (block.type === 'ul') return (
              <ul key={i}>
                {block.items?.map((item) => <li key={item}>{item}</li>)}
              </ul>
            )
            return null
          })}
        </div>

        {/* Bio */}
        <div style={{ borderTop: '1px solid #e8e8e8', paddingTop: 32, marginTop: 56, display: 'flex', gap: 20, alignItems: 'center' }}>
          <div style={{ width: 56, height: 56, background: '#060606', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <DeepSlateLogo size={32} />
          </div>
          <div>
            <p style={{ margin: '0 0 3px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 15, color: '#000' }}>DeepSlate</p>
            <p style={{ margin: 0, fontSize: 13, color: '#757575' }}>AI strategy, digital transformation, and executive education.</p>
          </div>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section style={{ borderTop: '1px solid #e8e8e8', padding: '64px 0 80px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#76b900', marginBottom: 24 }}>More insights</div>
            <div className="related-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              {related.map((r) => (
                <Link key={r.slug} href={`/insights/${r.slug}`} style={{ textDecoration: 'none', border: '1px solid #e8e8e8', borderRadius: 2, padding: 28, display: 'block', transition: 'border-color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#76b900')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#e8e8e8')}>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#76b900', display: 'block', marginBottom: 12 }}>{r.cat}</span>
                  <h4 style={{ margin: '0 0 12px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 18, lineHeight: 1.3, color: '#000' }}>{r.title}</h4>
                  <span className="btn-ghost-link" style={{ fontSize: 13 }}>Read more</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
