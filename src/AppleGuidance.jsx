import React, { useEffect } from 'react';
import './AppleGuidance.css';

const AppleGuidance = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.apple-guidance .reveal').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 44,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="apple-guidance">
      <header className="apple-header">
        <nav className="apple-nav">
          <a href="#hero" onClick={(e) => scrollToSection(e, 'apple-hero')}>Overview</a>
          <a href="#vision" onClick={(e) => scrollToSection(e, 'vision')}>Vision</a>
          <a href="#pillars" onClick={(e) => scrollToSection(e, 'pillars')}>Pillars</a>
          <a href="#paradigm" onClick={(e) => scrollToSection(e, 'paradigm')}>Paradigm</a>
          <a href="#redteam" onClick={(e) => scrollToSection(e, 'redteam')}>Red Team</a>
          <a href="#physicality" onClick={(e) => scrollToSection(e, 'physicality')}>Physicality</a>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="apple-hero" className="apple-hero container">
          <h1 className="title-large reveal gradient-text">論文、その先へ。</h1>
          <p className="subtitle reveal">28期生 学年開きガイダンス ――知性の「気高さ」と、身体化される学び</p>
        </section>

        {/* Vision Section */}
        <section id="vision" className="container">
          <h2 className="title-large reveal">知の楽しみ</h2>
          <p className="subtitle reveal" style={{ maxWidth: '700px' }}>
            探究とは、まだ見ぬ自分に出会うこと。
            教科書の枠を超え、あなたの溢れ出す好奇心を、一編の論文へと昇華させる。
            それは苦行ではなく、知的な「気高さ」をまとう旅です。
          </p>
        </section>

        {/* The Pillars */}
        <section id="pillars" className="container">
          <h2 className="title-large reveal">自律・創造・対話</h2>
          <div className="grid">
            <div className="card reveal">
              <h3>自律</h3>
              <p>誰かに言われた問いではなく、自分自身の内側から湧き出る問いを大切にする。</p>
            </div>
            <div className="card reveal">
              <h3>創造</h3>
              <p>既存の情報の継ぎ接ぎではなく、独自の視点で新しい意味を生み出す。</p>
            </div>
            <div className="card reveal">
              <h3>対話</h3>
              <p>他者との議論、そして過去の知性との対話を通じて、思考を鋭く研ぎ澄ます。</p>
            </div>
          </div>
        </section>

        {/* New Paradigm Section */}
        <section id="paradigm" className="container" style={{ padding: '100px 20px', background: 'rgba(0,102,204,0.03)', borderRadius: '40px', margin: '40px auto' }}>
          <h2 className="title-large reveal">New Paradigm: 伴走と対話</h2>
          <p className="subtitle reveal">昨日までの「論文」を、軽々と超えるために。</p>
          <div className="grid">
            <div className="card reveal" style={{ border: 'none', background: 'transparent' }}>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--secondary-text)' }}>これまで</h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-color)' }}>教員からの「指導」を受けながら、一人で調べ、書き上げるプロセス。</p>
            </div>
            <div className="card reveal" style={{ border: 'none', background: 'transparent' }}>
              <h3 style={{ fontSize: '1.4rem', color: '#0066cc' }}>今年度</h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-color)' }}>教員が「伴走」し、生成AIとの「対話」を通じて、多角的な視点から自分の真の関心（Core Issue）を掘り下げる。自分たちが本当に解決したい課題を見つけ、自分たちなりの答えを導き出す共創のプロセスへ。</p>
            </div>
          </div>
        </section>

        {/* Red Team & AI */}
        <section id="redteam" className="container" style={{ backgroundColor: '#000', color: '#fff', borderRadius: '40px', marginBottom: '80px' }}>
          <h2 className="title-large reveal gradient-text" style={{ background: 'linear-gradient(135deg, #fff 0%, #a1a1a6 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>Red Team: AIとの対峙</h2>
          <p className="subtitle reveal" style={{ color: '#a1a1a6' }}>
            AIはあなたの代筆者ではありません。<br />
            あなたの仮説に「徹底的に反論する」最強の敵であり、<br />
            思考の広がりを提示する智のパートナーです。
          </p>
          <div className="card reveal" style={{ backgroundColor: '#1c1c1e', width: '100%', border: '1px solid #333' }}>
            <h3 style={{ color: '#fff' }}>批判的思考の拡張</h3>
            <p style={{ color: '#a1a1a6' }}>
              AIを使って「答え」を出すのではなく、AIが出した「答え」の死角を突く。<br />
              そのプロセスが、あなたの論理に血を通わせ、血肉（身体性）となります。
            </p>
          </div>
        </section>

        {/* Physicality Section */}
        <section id="physicality" className="container">
          <h2 className="title-large reveal">身体化される学び</h2>
          <p className="subtitle reveal">
            知識は、出力（アウトプット）されて初めてあなたの血肉となる。
            書くこと、語ること、そして反論に晒されること。
            そのすべての「震える体験」が、あなただけの知性を形作ります。
          </p>
          <div className="grid">
            <div className="card reveal">
              <h3>書く身体</h3>
              <p>指先から紡がれる言葉が、曖昧な思考を強固な論理へと変えていく。</p>
            </div>
            <div className="card reveal">
              <h3>語る身体</h3>
              <p>声を出し、他者に届けることで、あなたの思想は社会の中に居場所を見つける。</p>
            </div>
          </div>
        </section>

        <section className="container" style={{ paddingBottom: '120px' }}>
          <h2 className="title-large reveal">探究の旅を、ここから。</h2>
          <p className="subtitle reveal">好奇心に、翼を。</p>
        </section>
      </main>

      <footer>
        <p style={{ textAlign: 'center', padding: '40px', color: 'var(--secondary-text)', fontSize: '12px' }}>
          &copy; 2026 Saitow High School 28th Generation. Designed by AntiGravity.
        </p>
      </footer>
    </div>
  );
};

export default AppleGuidance;
