import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [currentChapter, setCurrentChapter] = useState(0)
  const [showNotes, setShowNotes] = useState(false)
  const [notes, setNotes] = useState({})

  const chapters = [
    {
      title: "Introduction: The Foundation of Excellence",
      content: `Success is not an accident. It is not luck, circumstance, or fate. Success is the inevitable result of disciplined action, unwavering focus, and adherence to proven principles.

This book is your blueprint—a comprehensive guide to building an extraordinary life through mastery of the fundamentals. Within these pages, you will discover the timeless pillars that support every achievement, from the mundane to the magnificent.

The journey ahead demands commitment. It requires you to look honestly at where you are and courageously step toward where you want to be. But know this: the path to success is accessible to anyone willing to walk it.

Are you ready to transform your potential into reality?`,
      keyTakeaways: [
        "Success is built, not stumbled upon",
        "Commitment precedes achievement",
        "The path is clear for those willing to walk it"
      ]
    },
    {
      title: "Chapter 1: The Power of Discipline",
      content: `Discipline is the bridge between goals and accomplishment. It is the force that propels you forward when motivation fades and obstacles arise.

THE DISCIPLINE EQUATION

Discipline = (Clear Vision × Consistent Action) / Resistance

Many mistake discipline for punishment or deprivation. True discipline is freedom—freedom from chaos, from mediocrity, from the tyranny of your own excuses.

BUILDING YOUR DISCIPLINE MUSCLE

1. Start Small, Build Daily
   Begin with one non-negotiable habit. Make your bed every morning. Take a 10-minute walk. Read five pages. The habit matters less than the consistency.

2. Remove Decision Fatigue
   Discipline thrives on routine. Establish systems that eliminate the need for willpower. Lay out your clothes the night before. Prep your meals on Sunday. Design your environment for success.

3. Embrace Discomfort
   Growth lives outside your comfort zone. Deliberately do hard things: cold showers, difficult conversations, challenging workouts. Each act strengthens your discipline muscle.

4. Track Your Commitments
   What gets measured gets managed. Use a simple journal or app to mark each day you honor your commitments. Never break the chain.

THE 72-HOUR RULE

When you commit to something, take action within 72 hours. Ideas and intentions decay rapidly. Discipline requires immediate implementation.

Remember: You don't need to be perfect. You need to be persistent. One percent better each day compounds into extraordinary results over time.`,
      keyTakeaways: [
        "Discipline is freedom, not restriction",
        "Start small and build consistency",
        "Take action within 72 hours of any commitment",
        "Track your progress relentlessly"
      ]
    },
    {
      title: "Chapter 2: Mastering Focus in a Distracted World",
      content: `In an age of infinite distraction, focus is your competitive advantage. The ability to direct sustained attention toward meaningful work separates the exceptional from the ordinary.

THE ATTENTION ECONOMY

Your attention is being harvested, monetized, and sold. Every notification, every algorithm, every infinite scroll is engineered to fragment your focus and capture your time.

Reclaiming your attention is not optional—it's essential.

THE DEEP WORK PROTOCOL

1. Protect Your Peak Hours
   Identify your 3-4 hours of highest mental energy each day. Guard this time ruthlessly. No meetings, no email, no interruptions. This is your sacred space for meaningful work.

2. Single-Tasking Mastery
   Multitasking is a myth. Your brain cannot effectively focus on multiple complex tasks simultaneously. Choose one thing. Complete it. Then move to the next.

3. The 90-Minute Focus Block
   Human attention operates in cycles. Work in focused 90-minute blocks followed by 15-20 minute recovery periods. Set a timer. Eliminate all distractions. Dive deep.

4. Create a Focus Ritual
   Signal to your brain that it's time for deep work. Make tea. Put on specific music. Move to a dedicated space. Consistency creates momentum.

DIGITAL MINIMALISM

- Delete social media apps from your phone
- Turn off all non-essential notifications
- Use website blockers during focus time
- Implement "airplane mode" hours
- Create phone-free zones in your home

THE FOCUS FORMULA

Quality of Work = Time Spent × Intensity of Focus

You can work 12 distracted hours or 4 deeply focused hours. The latter produces exponentially better results.

Train your focus like an athlete trains their body. It's a skill, and skills improve with practice.`,
      keyTakeaways: [
        "Focus is your competitive advantage",
        "Protect your peak hours ruthlessly",
        "Work in 90-minute deep focus blocks",
        "Eliminate digital distractions systematically"
      ]
    },
    {
      title: "Chapter 3: The Non-Negotiable Rules",
      content: `Rules create freedom. They eliminate decision fatigue, establish boundaries, and provide structure within which creativity and excellence flourish.

THE 10 COMMANDMENTS OF SUCCESS

1. SHOW UP EVERY DAY
   Consistency beats intensity. The person who shows up every day will outlast the person who occasionally gives 100%.

2. DO THE WORK, ESPECIALLY WHEN YOU DON'T FEEL LIKE IT
   Feelings are unreliable guides. Professionals don't wait for inspiration—they create through discipline.

3. NEVER COMPROMISE YOUR INTEGRITY
   Your reputation takes years to build and moments to destroy. Choose character over convenience, always.

4. INVEST IN YOURSELF RELENTLESSLY
   Spend money on books, courses, mentors, and experiences that expand your capabilities. You are your greatest asset.

5. CONTROL YOUR INPUTS
   What you consume shapes who you become. Curate your information diet as carefully as your food. Read quality books. Listen to educational podcasts. Surround yourself with excellence.

6. EMBRACE FAILURE AS FEEDBACK
   You will fail. Often. View each failure as data, not defeat. Extract the lesson and apply it.

7. GUARD YOUR TIME AS YOUR LIFE
   Time is the only non-renewable resource. Say no to good opportunities so you can say yes to great ones.

8. BUILD SYSTEMS, NOT JUST GOALS
   Goals provide direction. Systems create progress. Focus on building habits and processes that generate results automatically.

9. REST IS PRODUCTIVE
   Recovery is not weakness—it's strategy. Schedule rest as rigorously as you schedule work. Sleep 7-8 hours. Take breaks. Prevent burnout before it starts.

10. NEVER STOP LEARNING
   The moment you stop growing, you start dying. Read daily. Ask questions. Stay curious. Remain humble.

PERSONAL OPERATING PRINCIPLES

Beyond these universal rules, create your own operating principles—3-5 statements that define how you approach life and work.

Examples:
- "I do what I say I'm going to do"
- "I make decisions based on my 10-year self"
- "I treat every person with respect"
- "I optimize for learning, not comfort"

Write them down. Review them weekly. Let them guide your decisions.`,
      keyTakeaways: [
        "Consistency beats intensity every time",
        "Build systems that create automatic progress",
        "Guard your time as your most precious resource",
        "Rest is productive, not weakness"
      ]
    },
    {
      title: "Chapter 4: The Five Pillars of Success",
      content: `True success rests on five foundational pillars. Neglect one, and the entire structure weakens. Master all five, and you build an unshakeable life.

PILLAR 1: PHYSICAL HEALTH

Your body is the vehicle that carries you through life. Treat it accordingly.

- Exercise 4-6 times per week (strength, cardio, mobility)
- Sleep 7-8 hours consistently
- Eat whole foods, mostly plants
- Hydrate properly (half your body weight in ounces daily)
- Limit alcohol, eliminate smoking
- Annual health screenings

Physical energy is the foundation of mental energy. You cannot think clearly, work effectively, or lead powerfully in a body that's broken down.

PILLAR 2: MENTAL CLARITY

Your mind is your most powerful tool—or your most destructive enemy.

- Daily meditation or mindfulness practice (10-20 minutes)
- Regular journaling to process thoughts
- Therapy or coaching when needed
- Continuous learning through books and courses
- Mental challenges (puzzles, strategy games, learning new skills)
- Digital detox periods

Protect your mental health as fiercely as your physical health. Anxiety, depression, and burnout are not badges of honor—they're warning signs.

PILLAR 3: MEANINGFUL RELATIONSHIPS

Success without connection is hollow. Humans are social beings who thrive in community.

- Prioritize family and close friendships
- Schedule regular quality time with loved ones
- Communicate openly and honestly
- Ask for help when you need it
- Offer help without expectation
- Build a network of mentors and peers
- Contribute to something larger than yourself

Your relationships will sustain you through dark times and amplify your brightest moments. Invest accordingly.

PILLAR 4: FINANCIAL STABILITY

Money doesn't buy happiness, but financial stress destroys peace.

- Live below your means
- Save 20% of every dollar earned
- Invest in index funds for long-term growth
- Build 6-12 months of emergency savings
- Eliminate high-interest debt aggressively
- Increase your income through skill development
- Give generously when able

Financial freedom creates options. Options create freedom. Freedom enables purpose.

PILLAR 5: PURPOSE AND CONTRIBUTION

The deepest satisfaction comes from contributing something meaningful to the world.

- Identify your unique strengths and talents
- Solve problems that matter to you
- Create value for others
- Build something that outlasts you
- Mentor and teach when possible
- Align your work with your values
- Define success on your own terms

Purpose transforms work from obligation to calling. When you connect your daily actions to a meaningful mission, motivation becomes infinite.

INTEGRATION, NOT BALANCE

Don't seek balance—seek integration. These pillars support each other. Physical health improves mental clarity. Strong relationships enhance purpose. Financial stability reduces stress.

Audit these five areas quarterly. Strengthen what's weak. Maintain what's strong. Build a life of sustainable excellence.`,
      keyTakeaways: [
        "Physical health is the foundation of everything",
        "Mental clarity requires daily practice",
        "Relationships sustain you through challenges",
        "Financial stability creates freedom and options",
        "Purpose transforms obligation into calling"
      ]
    },
    {
      title: "Chapter 5: Implementation—Your 90-Day Transformation",
      content: `Knowledge without action is merely entertainment. This chapter provides your roadmap to implement everything you've learned.

THE 90-DAY SUCCESS SPRINT

Transformation happens in focused sprints, not gradual meandering. Commit to 90 days of disciplined implementation.

WEEK 1-2: FOUNDATION

Day 1-3: Audit Your Life
- Rate each pillar (1-10)
- Identify your biggest weakness
- List your current daily habits

Day 4-7: Design Your System
- Choose ONE keystone habit per pillar
- Schedule your deep work blocks
- Create your personal operating principles

Week 2: Implement Your Morning Routine
- Wake at the same time daily (6 AM recommended)
- No phone for first 60 minutes
- Move your body (10-30 minutes)
- Journal or meditate (10 minutes)
- Review your goals and principles

WEEK 3-6: BUILDING MOMENTUM

Focus on consistency, not perfection. Your only goal is to show up every single day.

- Track your habits in a journal or app
- Do your deep work during peak hours
- Exercise 4+ times per week
- Connect meaningfully with one person daily
- Read 20+ pages daily

When you slip (and you will), recover immediately. Don't let one missed day become two.

WEEK 7-10: INCREASING INTENSITY

You've built the foundation. Now push harder.

- Increase workout intensity or duration
- Add a second deep work block
- Take on a challenging project
- Eliminate one major time-waster
- Deepen one key relationship

WEEK 11-13: OPTIMIZATION AND INTEGRATION

- Review what's working, eliminate what isn't
- Increase difficulty of your habits
- Document your progress and lessons
- Plan your next 90-day sprint
- Celebrate your transformation

THE DAILY DASHBOARD

Answer these questions every evening:

1. Did I do my most important work today?
2. Did I move my body and fuel it properly?
3. Did I connect meaningfully with someone?
4. Did I learn something new?
5. Am I closer to my goals than yesterday?

If you answer yes to 4 of 5, you're winning. String together 90 winning days, and your life transforms.

ACCOUNTABILITY MECHANISMS

- Share your commitment publicly
- Find an accountability partner
- Join a mastermind or community
- Hire a coach if possible
- Review your progress weekly

THE COMMITMENT

Success requires sacrifice—not someday, but right now. You must sacrifice:

- Comfort for growth
- Distraction for focus
- Excuses for responsibility
- Mediocrity for excellence

The question is not whether you can do this. The question is whether you will.

Will you?`,
      keyTakeaways: [
        "Commit to 90 focused days of transformation",
        "Build one keystone habit per pillar",
        "Track daily progress with the 5-question dashboard",
        "Recovery is instant—never miss two days",
        "Sacrifice comfort for the life you want"
      ]
    },
    {
      title: "Conclusion: The Beginning of Your Journey",
      content: `You now possess the blueprint for extraordinary success. You understand discipline, focus, rules, and the five pillars. You have a 90-day implementation plan.

But knowledge is not power. Applied knowledge is power.

THE TRUTH ABOUT TRANSFORMATION

Most people who read this book will do nothing. They'll feel inspired for 48 hours, then return to their default patterns. The excitement will fade, and life will resume as usual.

Don't be most people.

YOUR DECISION POINT

You stand at a fork in the road. One path is familiar—comfortable, safe, and predictable. It leads to the same place you've always been.

The other path is challenging. It demands discipline when you're tired, focus when you're distracted, and commitment when you're uncertain.

But it leads to the person you're capable of becoming.

Which path will you choose?

THE 72-HOUR CHALLENGE

This book means nothing unless you take immediate action. Remember the 72-hour rule.

Within the next 72 hours, you must:

1. Complete your life audit (rate each pillar)
2. Design your morning routine
3. Choose your five keystone habits
4. Share your commitment with someone
5. Show up for Day 1

If you do these five things, you're not just reading—you're transforming.

A FINAL WORD

Excellence is not an act but a habit. Success is not a destination but a way of traveling.

The person you'll be in five years is determined by the choices you make today, the habits you build this week, the discipline you demonstrate this month.

Every morning, you get to choose who you're becoming.

Choose greatness.

Choose discipline.

Choose focus.

Choose success.

The world needs what you're capable of building. Your family needs the best version of you. You deserve to see what you can become.

Now close this book and begin.

Your 90 days start now.`,
      keyTakeaways: [
        "Knowledge without action is worthless",
        "Most people will do nothing—don't be most people",
        "Take action within 72 hours",
        "Excellence is a habit, not an act",
        "Your transformation begins now"
      ]
    }
  ]

  const handleNoteChange = (chapterIndex, value) => {
    setNotes(prev => ({
      ...prev,
      [chapterIndex]: value
    }))
  }

  const downloadNotes = () => {
    const allNotes = chapters.map((chapter, index) => {
      const note = notes[index] || ''
      return `${chapter.title}\n${'='.repeat(chapter.title.length)}\n\n${note}\n\n`
    }).join('\n')

    const blob = new Blob([allNotes], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'my-success-notes.txt'
    a.click()
  }

  const progress = ((currentChapter + 1) / chapters.length) * 100

  return (
    <>
      <Head>
        <title>Pillars of Success - Your Guide to Discipline, Focus & Achievement</title>
        <meta name="description" content="A comprehensive self-help book about discipline, focus, rules, and pillars for success" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="app-container">
        <header className="header">
          <div className="header-content">
            <h1 className="main-title">PILLARS OF SUCCESS</h1>
            <p className="subtitle">Your Blueprint for Discipline, Focus & Achievement</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="progress-text">Chapter {currentChapter + 1} of {chapters.length}</p>
          </div>
        </header>

        <div className="content-wrapper">
          <nav className="sidebar">
            <h2 className="sidebar-title">Chapters</h2>
            {chapters.map((chapter, index) => (
              <button
                key={index}
                className={`chapter-nav-button ${currentChapter === index ? 'active' : ''}`}
                onClick={() => setCurrentChapter(index)}
              >
                <span className="chapter-number">{index === 0 ? '📖' : index === chapters.length - 1 ? '🎯' : `${index}`}</span>
                <span className="chapter-nav-title">{chapter.title.replace(/^(Introduction|Chapter \d+|Conclusion): /, '')}</span>
              </button>
            ))}
            <button className="notes-toggle" onClick={() => setShowNotes(!showNotes)}>
              {showNotes ? '📖 Hide Notes' : '📝 Show Notes'}
            </button>
            {Object.keys(notes).length > 0 && (
              <button className="download-button" onClick={downloadNotes}>
                💾 Download Notes
              </button>
            )}
          </nav>

          <main className="main-content">
            <article className="chapter">
              <h2 className="chapter-title">{chapters[currentChapter].title}</h2>
              <div className="chapter-content">
                {chapters[currentChapter].content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className={paragraph.match(/^[A-Z\s]+$/) ? 'section-header' : ''}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="key-takeaways">
                <h3>Key Takeaways</h3>
                <ul>
                  {chapters[currentChapter].keyTakeaways.map((takeaway, index) => (
                    <li key={index}>{takeaway}</li>
                  ))}
                </ul>
              </div>

              {showNotes && (
                <div className="notes-section">
                  <h3>Your Notes</h3>
                  <textarea
                    className="notes-textarea"
                    placeholder="Write your thoughts, reflections, and action items here..."
                    value={notes[currentChapter] || ''}
                    onChange={(e) => handleNoteChange(currentChapter, e.target.value)}
                  />
                </div>
              )}

              <div className="navigation">
                <button
                  className="nav-button"
                  onClick={() => setCurrentChapter(Math.max(0, currentChapter - 1))}
                  disabled={currentChapter === 0}
                >
                  ← Previous
                </button>
                <button
                  className="nav-button primary"
                  onClick={() => setCurrentChapter(Math.min(chapters.length - 1, currentChapter + 1))}
                  disabled={currentChapter === chapters.length - 1}
                >
                  Next →
                </button>
              </div>
            </article>
          </main>
        </div>

        <footer className="footer">
          <p>© 2025 Pillars of Success. Begin your transformation today.</p>
        </footer>
      </div>
    </>
  )
}
