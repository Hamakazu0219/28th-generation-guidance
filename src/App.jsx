import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import AppleGuidance from './AppleGuidance';

function Home() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      {/* Hero Section */}
      <header className="hero container">
        <div className="reveal">
          <span className="number-badge">Guidance 2026</span>
          <h1 className="hero-title">
            28期生 学年開きガイダンス<br />
            <span style={{ fontSize: '0.5em', fontWeight: 300, display: 'block', marginTop: '1rem' }}>
              ――知性の「気高さ」と、身体化される学びについて
            </span>
          </h1>
          <p className="subtitle">
            約束された場所で、あえて困難を選ぶ意味。
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link to="/apple-style" className="apple-btn">
              探究論文特別ガイダンス（Apple Style）を見る
            </Link>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll down</span>
        </div>
      </header>

      <main className="container">
        {/* Section 1 */}
        <section className="card reveal">
          <span className="number-badge">01. Nobility</span>
          <h2 className="section-title">「約束された場所」で、あえて困難を選ぶ意味</h2>
          <p>
            皆さんは中等教育学校の生徒であり、後期課程への進学が約束されています。<br />
            しかし、今取り組んでいるのは高校1年生の内容。決して楽ではない道に今、皆さんは立っています。
          </p>
          <div className="reflection-box">
            <p className="strong-text">
              私は、皆さんが「それができる人たち」だと信じている。<br />
              この恵まれた環境を、自分の知性を磨くために使い倒してほしい（<span className="emphasis">ノブレス・オブリージュ</span>）。
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="card reveal">
          <span className="number-badge">02. Mirror</span>
          <h2 className="section-title">「鏡」としての生成AI</h2>
          <p>
            AIは便利ですが、使う側が「空っぽ」なら、出てくるものも「空っぽ」です。<br />
            単に体裁の整った論文を出すことが目的なら、AIに任せればいい。だが、そこに「あなた」はいない。
          </p>
          <div className="reflection-box">
            <p className="strong-text">
              AIを、自分の思考を深めるための<span className="emphasis">「鏡」</span>として使え。<br />
              自分の思考の限界を突破するための道具として使いこなす「気概」を持ってほしい。
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="card reveal">
          <span className="number-badge">03. Embodiment</span>
          <h2 className="section-title">「成果物」よりも「身体化された学び」を</h2>
          <p>
            1年後、手元には「論文」という成果物が残る。しかし、それは極論すれば「抜け殻」に過ぎない。<br />
            最も価値があるのは、それを作る過程で皆さんの身体の中に何が残ったかだ。
          </p>
          <div className="process-grid">
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>身体化された学びとは</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                スポーツで鍛えられた筋肉、楽器の修練で得た指先の感覚。一度身につけば、一生離れない<span className="strong-text">「知性の冴え」</span>のこと。
              </p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>学びの価値</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                頭が熱くならず、身体が冴えるような感覚がなければ、その学びには価値がない。
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="card reveal">
          <span className="number-badge">04. Process</span>
          <h2 className="section-title">試行錯誤のプロセスこそが「気高さ」</h2>
          <p>
            Brisk Teachingの導入により、私は皆さんのドキュメントを書き進める記録をすべて確認する。<br />
            これは監視ではない。皆さんの<span className="emphasis">「孤独な格闘」</span>を、一つも見落とさないためだ。
          </p>
          <div className="reflection-box">
            <p className="strong-text">
              どの言葉を選び、どの文章を消し、どう悩み抜いたか。<br />
              スラスラ書けた100行よりも、悩み抜いて何度も書き直した<span className="emphasis">1行</span>を、私は高く評価する。
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="card reveal">
          <span className="number-badge">05. Declaration</span>
          <h2 className="section-title">宣戦布告：先生を「敗北」させてほしい</h2>
          <p>
            今年度の終わりに、皆さんの姿を見て、私が「負けた」と思わされることを願っている。
          </p>
          <div className="reflection-box" style={{ borderLeftColor: '#0071e3' }}>
            <p className="strong-text" style={{ fontSize: '1.2rem' }}>
              「28期生はなんと尊敬すべき集団か」と私に言わせてほしい。<br />
              私の過去を、軽々と超えていけ。
            </p>
          </div>
        </section>
      </main>

      <footer className="reveal">
        <p>© 2026 Guidance for 28th Generation Students</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apple-style" element={<AppleGuidance />} />
      </Routes>
    </Router>
  );
}

export default App;
