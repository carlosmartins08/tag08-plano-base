
import { Language, TranslationSchema } from './types';

export const translations: Record<Language, TranslationSchema> = {
  pt: {
    hero: {
      badge: "Plano Base Studio",
      title: "Venda mais.",
      titleAccent: "Apareça melhor.",
      description: "Transformamos empresas estagnadas em marcas dominantes através de gestão estratégica de marketing e design de elite.",
      cta: "Agendar Diagnóstico",
      limited: "Vagas Limitadas",
      welcomeBack: "Bem-vindo de volta",
      sourceMeta: "Domine o Social.",
      sourceGoogle: "Apareça no Topo.",
      sourceLinkedin: "Conquiste o B2B.",
      heroAlt: "Equipe de consultoria estratégica da TAG08 planejando o crescimento de uma marca premium",
      headlines: {
        data: "Decisões baseadas em lucro real.",
        vision: "O futuro da sua marca, hoje.",
        default: "Venda mais. Apareça melhor.",
      }
    },
    navbar: {
      diagnosis: "Diagnóstico",
      free: "Gratuito",
      menu: {
        problem: "Problema",
        solution: "Solução",
        plan: "O Plano",
        cycle: "Ciclo",
      }
    },
    problem: {
      label: "O Cenário Atual",
      title: "Sua empresa está estagnada no \"quase\"?",
      description: "O marketing amador é o maior dreno de caixa da sua empresa. Sem uma gestão de estúdio, você está apenas queimando recursos sem construir patrimônio digital.",
      items: [
        "Falta de constância na comunicação",
        "Tráfego pago sem estratégia de conversão",
        "Incerteza sobre o retorno do investimento",
        "Sobrecarga operacional do sócio"
      ],
      cards: {
        posts: "Postagens Irregulares",
        leads: "Leads Desqualificados",
        money: "Dinheiro Perdido",
        brand: "Marca Invisível",
      }
    },
    pillars: {
      title: "Os 4 Pilares da Entrega",
      subtitle: "Uma solução completa e integrada para sua consolidação digital.",
      items: {
        strategy: { title: "Planejamento Estratégico", desc: "Definição de canais, personas, linha editorial e cronograma de ações trimestrais focado em conversão." },
        content: { title: "Produção de Conteúdo", desc: "Criação de criativos para redes sociais e anúncios, mantendo o padrão visual premium da sua marca." },
        ads: { title: "Gestão de Tráfego Pago", desc: "Configuração e otimização diária de campanhas em Meta Ads e Google Ads para maximizar o ROI." },
        analysis: { title: "Análise e Reporting", desc: "Dashboard em tempo real e reuniões mensais de alinhamento com especialistas de marketing." },
      }
    },
    faq: {
      badge: "Knowledge Base",
      title: "Perguntas",
      titleAccent: "Frequentes.",
      subtitle: "Transparência radical é um dos nossos pilares. Entenda os detalhes antes de dar o próximo passo.",
      supportTitle: "Ainda com dúvida?",
      supportBody: "Nossa equipe de consultores está disponível no WhatsApp para responder questões específicas do seu nicho.",
      supportCta: "Falar com Consultor",
      items: [
        { question: "O Plano Base é indicado para qualquer tipo de empresa?", answer: "O Plano Base é indicado para empresas que já validaram seu modelo de negócio e estão em fase de consolidação digital, mas ainda não possuem uma equipe interna de marketing. Não é um plano para negócios em estágio inicial ou que buscam apenas postagens pontuais." },
        { question: "Esse plano é apenas gestão de redes sociais?", answer: "Não. O Plano Base vai além da gestão de redes sociais. Ele inclui diagnóstico estratégico, planejamento de pauta, produção, publicação e análise mensal, formando um sistema contínuo de posicionamento e crescimento digital, e não apenas execução de conteúdo." },
        { question: "Em quais canais os conteúdos são publicados?", answer: "Os conteúdos são publicados no Instagram e Facebook, conforme definido no planejamento mensal. Outros canais podem ser avaliados em propostas específicas ou planos complementares." },
        { question: "Quem cria os temas e ideias dos conteúdos?", answer: "A TAG08 propõe os temas e diretrizes estratégicas, e o cliente pode contribuir com sugestões e informações do negócio. O planejamento final é sempre validado em conjunto antes do início da produção." },
        { question: "Os vídeos precisam ser gravados pela TAG08?", answer: "Não necessariamente. Os vídeos podem ser gravados pela TAG08 ou fornecidos pelo cliente, desde que sigam os direcionamentos definidos no planejamento para garantir qualidade e coerência com a estratégia." },
        { question: "Como funciona o acompanhamento dos resultados?", answer: "Mensalmente, realizamos uma reunião de acompanhamento e entregamos um relatório com análises de engajamento, permitindo compreender o desempenho dos conteúdos e ajustar o direcionamento estratégico quando necessário." },
        { question: "Existe contrato de fidelidade?", answer: "Não. O Plano Base não possui fidelidade contratual. Caso o cliente decida cancelar, é necessário apenas um aviso prévio de 30 dias." },
        { question: "Posso contratar conteúdos ou serviços extras?", answer: "Sim. Quando houver necessidade, é possível contratar conteúdos extras ou serviços complementares, de forma avulsa, sem alterar o formato do Plano Base." },
        { question: "O Plano Base garante resultados específicos?", answer: "Não trabalhamos com promessas irreais. O Plano Base oferece estrutura, método, constância e clareza estratégica. Resultados dependem de mercado, produto, engajamento e participação do cliente." },
        { question: "O que é esperado do cliente durante o plano?", answer: "Para o bom andamento, o cliente deve: Fornecer materiais nos prazos, indicar um ponto focal para aprovações e participar das reuniões mensais de alinhamento. Isso garante fluidez e qualidade." },
        { question: "Em quanto tempo começo a ver os conteúdos no ar?", answer: "Após a aprovação do planejamento, iniciamos a produção. Todo mês, um novo ciclo começa no dia 15, garantindo previsibilidade e organização do calendário." },
        { question: "Esse plano pode evoluir conforme meu negócio cresce?", answer: "Sim. O Plano Base foi pensado como porta de entrada para soluções escaláveis. À medida que o negócio evolui, novas estratégias, formatos e serviços podem ser incorporados." }
      ]
    },
    cta: {
      title: "Pronto para o próximo nível?",
      desc: "Clique no botão abaixo para agendar uma reunião de diagnóstico gratuita com nosso time sênior.",
      button: "Agendar Agora via WhatsApp",
      highValueTitle: "Leve sua operação ao topo.",
      highValueButton: "Falar com um Sócio Sênior",
      disclaimer: "* Ao iniciar o contato, você autoriza a TAG08 a tratar seus dados para fins de diagnóstico comercial, conforme a LGPD e nossa política de privacidade.",
      urgency: "Vagas limitadas para novos parceiros este mês",
    },
    cookie: {
      title: "Privacidade & Dados",
      desc: "Utilizamos cookies para otimizar sua experiência e analisar nosso tráfego.",
      accept: "Aceitar",
      policy: "Política de Privacidade",
    },
    privacy: {
      title: "Política de Privacidade",
      close: "Fechar",
      intro: "A TAG08 Studio respeita sua privacidade e se compromete a proteger seus dados pessoais.",
      sections: {
        data: { title: "Coleta de Dados", text: "Coletamos informações básicas de contato (nome, e-mail, telefone) apenas quando você inicia voluntariamente uma consultoria ou contato via WhatsApp." },
        cookies: { title: "Uso de Cookies", text: "Utilizamos cookies técnicos para garantir o funcionamento do site e cookies analíticos (Google Analytics) para entender como melhorar nossa entrega de conteúdo." },
        rights: { title: "Seus Direitos", text: "Você tem o direito de acessar, corrigir ou solicitar a exclusão de seus dados a qualquer momento, conforme previsto na LGPD." },
        security: { title: "Segurança", text: "Implementamos protocolos de criptografia e acesso restrito para garantir que suas informações estratégicas nunca sejam compartilhadas com terceiros sem autorização." }
      }
    },
    cookiePolicy: {
      title: "Política de Cookies",
      intro: "Esta política explica como a TAG08 utiliza cookies para melhorar sua navegação e análise de performance.",
      sections: {
        necessary: { title: "Cookies Necessários", text: "Essenciais para o funcionamento básico do site, como navegação em páginas e acesso a áreas seguras. O site não pode funcionar corretamente sem eles." },
        analytical: { title: "Cookies de Desempenho", text: "Ajudam-nos a entender como os visitantes interagem com o site, coletando e reportando informações de forma anônima via Google Analytics." },
        marketing: { title: "Cookies de Marketing", text: "Utilizados para rastrear visitantes em sites. A intenção é exibir anúncios relevantes e envolventes para o usuário individual." },
        management: { title: "Gestão de Preferências", text: "Você pode gerenciar ou desativar cookies através das configurações do seu navegador a qualquer momento. Note que a desativação pode afetar sua experiência no site." }
      }
    },
    monthlyCycle: {
      title: "Ciclo de Execução Recorrente",
      subtitle: "Marketing não é um evento, é um processo contínuo.",
      steps: {
        step1: { title: "Semana 1: Alinhamento", desc: "Reunião de kickoff mensal para definir os temas e objetivos estratégicos." },
        step2: { title: "Semana 2: Produção", desc: "Desenvolvimento de artes, legendas e configuração técnica das campanhas." },
        step3: { title: "Crescimento", desc: "Acompanhamento diário e otimização em tempo real." },
        step4: { title: "Escala", desc: "Análise de KPIs e expansão agressiva de resultados." },
      },
      footerText: "Repetimos o sucesso todos os meses",
    },
    testimonials: {
      title: "Reconhecimento de Elite",
      subtitle: "O que nossos parceiros dizem sobre a experiência TAG08 no Google.",
      googleRating: "5.0",
      reviewCount: "mais de 40 avaliações",
      viewAll: "Ver todas no Google",
      items: [
        { name: "Ricardo Almeida", role: "CEO, TechFlux", content: "A TAG08 transformou nossa presença digital. O Plano Base nos deu a constância que faltava e o ROI foi visível já no segundo mês.", date: "há 2 meses" },
        { name: "Fernanda Costa", role: "Dir. de Marketing, Lumina", content: "Design de altíssimo nível e estratégia real. Não é apenas postagem, é construção de marca. Recomendo para quem busca o topo.", date: "há 1 mês" },
        { name: "Bruno Mantovani", role: "Sócio, Nexus Invest", content: "O profissionalismo da equipe é impressionante. O ciclo mensal de entrega é muito organizado e nos dá total clareza do crescimento.", date: "há 3 semanas" }
      ]
    },
    strategicBenefits: {
      title: "O Padrão Studio TAG08",
      subtitle: "Diferenciais que nos colocam no topo da cadeia do marketing estratégico.",
      items: [
        { title: "Consistência Absoluta", desc: "Presença digital ininterrupta e profissional que constrói autoridade real." },
        { title: "ROI Focado", desc: "Campanhas otimizadas para gerar lucro e escala, fugindo de métricas de vaidade." },
        { title: "Time Sênior", desc: "Acesso direto a consultores especialistas, sem intermediários ou estagiários." },
        { title: "Agilidade", desc: "Execução veloz e adaptação constante às mudanças do mercado digital." }
      ]
    },
    calculator: {
      badge: "ROI Calculator",
      title: "Quanto você está",
      titleAccent: "deixando na mesa?",
      description: "O custo da inércia é o imposto mais caro que sua empresa paga. Calcule agora o potencial de crescimento negligenciado.",
      revenueLabel: "Faturamento Mensal",
      growthLabel: "Meta de Crescimento",
      lossLabel: "Oportunidade Perdida Anual",
      monthlyLossLabel: "Crescimento Mensal",
      newCeilingLabel: "Novo Teto Mensal",
      cta: "Capturar Oportunidade",
      disclaimer: "Análise baseada em benchmarking sênior"
    },
    investment: {
      badge: "Safety First",
      title: "Investimento",
      titleAccent: "Estratégico.",
      subtitle: "Clareza total sobre o valor da sua transformação. Sem letras miúdas, apenas performance de elite.",
      cardTitle: "Segurança de Studio",
      fideleityTitle: "Zero Fidelidade",
      fidelityTag: "ELITE",
      fidelityDesc: "Foque nos resultados. Não prendemos nossos clientes com contratos longos; nossa retenção é baseada em performance real.",
      cancelTitle: "Cancelamento Flexível",
      cancelDesc: "Precisa ajustar o rumo? Basta um aviso prévio de 30 dias. Simplicidade e ética em todas as pontas da nossa operação.",
      offerTitle: "Sua marca,",
      offerTitleAccent: "nosso foco.",
      offerDesc: "Operações de alto nível exigem personalização. O valor do Plano Base é adaptado à sua necessidade de escala.",
      offerCta: "Solicitar Proposta"
    },
    responsibilities: {
      badge: "The Partnership",
      title: "Sua responsabilidade",
      titleAccent: "no sucesso.",
      subtitle: "Marketing de elite é uma via de mão dupla. Para alcançarmos o topo, precisamos que sua equipe esteja em sincronia conosco:",
      items: [
        "Agilidade nas aprovações de criativos.",
        "Sincronia entre marketing e comercial.",
        "Participação ativa na reunião mensal.",
        "Feedback constante sobre leads gerados."
      ]
    },
    footer: {
      badge: "Consultoria de Elite",
      title: "Sua empresa pronta para o",
      titleAccent: "próximo nível de maturidade.",
      description: "A TAG08 une estratégia de negócios, engenharia de processos e tecnologia para transformar o caos operacional em máquinas de crescimento autogerenciáveis.",
      ctaDiagnosis: "AGENDAR DIAGNÓSTICO",
      ctaDirection: "FALAR COM A DIREÇÃO",
      about: "Consultoria especializada em alavancagem de negócios. Substituímos o 'achismo' por dados e o caos por processos validados.",
      ecosystem: "Ecossistema TAG08",
      institutional: "Institucional",
      social: "Redes Sociais",
      socialDesc: "Acompanhe os bastidores das consultorias e insights diários de gestão.",
      rights: "TAG08 Estratégia Digital",
      allRights: "Todos os direitos reservados.",
      privacy: "Privacidade",
      cookies: "Política de Cookies",
      preferences: "Preferências de Privacidade"
    },
    growthRoadmap: {
      title: "O Caminho para o",
      titleAccent: "Próximo Nível",
      subtitle: "Não é sobre um serviço mensal, é sobre uma jornada de escala previsível e lucrativa.",
      steps: {
        step1: { stage: "Fase 01", title: "Consolidação", desc: "Ajuste de fundação, branding de elite e estrutura de tráfego inicial." },
        step2: { stage: "Fase 02", title: "Escala", desc: "Expansão de budgets, otimização de funis e domínio de audiência." },
        step3: { stage: "Fase 03", title: "Aceleração", desc: "Lançamentos e escala vertical para atingir o teto do mercado." },
        step4: { stage: "Fase 04", title: "Domínio", desc: "Autoridade inquestionável e liderança absoluta no seu nicho." }
      }
    },
    strategyNotes: {
      hero: "Engenharia visual focada em reduzir o esforço cognitivo.",
      metrics: "Otimização baseada em heurísticas de usabilidade sênior.",
      roadmap: "Visão 360 do LTV para máxima previsibilidade.",
      roi: "Previsão de perda anual por estagnação digital.",
      design: "Grid de elite para harmonia visual absoluta.",
      blueprint: "Blueprint Mode: Visualizando as camadas estratégicas."
    }
  },
  en: {
    hero: {
      badge: "Studio Base Plan",
      title: "Sell more.",
      titleAccent: "Look better.",
      description: "We transform stagnant companies into dominant brands through strategic marketing management and elite design.",
      cta: "Schedule Diagnosis",
      limited: "Limited Spots",
      welcomeBack: "Welcome back",
      sourceMeta: "Master Social Media.",
      sourceGoogle: "Be at the Top.",
      sourceLinkedin: "Conquer B2B.",
      heroAlt: "TAG08 strategic consulting team planning the growth of a premium brand",
      headlines: {
        data: "Decisions based on real profit.",
        vision: "The future of your brand, today.",
        default: "Sell more. Look better.",
      }
    },
    navbar: {
      diagnosis: "Diagnosis",
      free: "Free",
      menu: {
        problem: "Problem",
        solution: "Solution",
        plan: "The Plan",
        cycle: "Cycle",
      }
    },
    problem: {
      label: "The Current Scenario",
      title: "Is your company stuck in \"almost\"?",
      description: "Amateur marketing is the biggest cash drain on your business. Without studio management, you're just burning resources without building digital equity.",
      items: [
        "Lack of consistency in communication",
        "Paid media without conversion strategy",
        "Uncertainty about return on investment",
        "Partner operational overload"
      ],
      cards: {
        posts: "Irregular Posts",
        leads: "Unqualified Leads",
        money: "Wasted Money",
        brand: "Invisible Brand",
      }
    },
    pillars: {
      title: "The 4 Pillars of Delivery",
      subtitle: "A complete and integrated solution for your digital consolidation.",
      items: {
        strategy: { title: "Strategic Planning", desc: "Definition of channels, personas, editorial line, and quarterly action schedule focused on conversion." },
        content: { title: "Content Production", desc: "Creation of creative assets for social media and ads, maintaining your brand's premium visual standard." },
        ads: { title: "Paid Media Management", desc: "Daily configuration and optimization of Meta Ads and Google Ads campaigns to maximize ROI." },
        analysis: { title: "Analysis & Reporting", desc: "Real-time dashboard and monthly alignment meetings with marketing specialists." },
      }
    },
    faq: {
      badge: "Knowledge Base",
      title: "Questions",
      titleAccent: "Frequently Asked.",
      subtitle: "Radical transparency is one of our pillars. Understand the details before taking the next step.",
      supportTitle: "Still have questions?",
      supportBody: "Our consulting team is available via WhatsApp to answer niche-specific questions.",
      supportCta: "Talk to a Consultant",
      items: [
        { question: "Is the Base Plan suitable for any type of company?", answer: "The Base Plan is indicated for companies that have already validated their business model and are in a digital consolidation phase but do not yet have an internal marketing team. It is not for early-stage startups or one-off posts." },
        { question: "Is this plan just social media management?", answer: "No. The Base Plan goes beyond social media management. It includes strategic diagnosis, content planning, production, publishing, and monthly analysis for a continuous growth system." },
        { question: "On which channels is the content published?", answer: "Content is published on Instagram and Facebook, as defined in the monthly planning. Other channels can be evaluated in specific proposals or complementary plans." },
        { question: "Who creates the themes and ideas for the content?", answer: "TAG08 proposes the themes and strategic guidelines, and the client can contribute with business suggestions. Final planning is always validated together before production starts." },
        { question: "Do the videos need to be recorded by TAG08?", answer: "Not necessarily. Videos can be recorded by TAG08 or provided by the client, as long as they follow the planning guidelines to ensure quality and coherence." },
        { question: "How does the results tracking work?", answer: "Every month, we hold a follow-up meeting and deliver a report with engagement analysis, allowing us to adjust the strategic direction when necessary." },
        { question: "Is there a loyalty contract?", answer: "No. The Base Plan has no contractual loyalty. If the client decides to cancel, only a 30-day notice is required." },
        { question: "Can I hire extra content or services?", answer: "Yes. When needed, extra content or complementary services can be hired on a one-off basis without changing the Base Plan format." },
        { question: "Does the Base Plan guarantee specific results?", answer: "We don't work with unrealistic promises. We offer structure, method, and consistency. Results depend on market, product, and client participation." },
        { question: "What is expected from the client during the plan?", answer: "Clients should provide materials on time, appoint a focal point for approvals, and participate in monthly alignment meetings to ensure fluidity." },
        { question: "How soon will I see the content live?", answer: "After planning approval, we start production. Every month, a new cycle begins on the 15th, ensuring predictability and organization." },
        { question: "Can this plan evolve as my business grows?", answer: "Yes. The Base Plan was designed as an entry point for scalable solutions. As the business evolves, new strategies and services can be incorporated." }
      ]
    },
    cta: {
      title: "Ready for the next level?",
      desc: "Click the button below to schedule a free diagnostic meeting with our senior team.",
      button: "Schedule Now via WhatsApp",
      highValueTitle: "Take your operation to the top.",
      highValueButton: "Talk to a Senior Partner",
      disclaimer: "By clicking, you agree to the processing of your data for commercial contact purposes as per our privacy policy.",
      urgency: "Limited spots for new partners this month",
    },
    cookie: {
      title: "Privacy & Data",
      desc: "We use cookies to optimize your experience and analyze our traffic.",
      accept: "Accept",
      policy: "Privacy Policy",
    },
    privacy: {
      title: "Privacy Policy",
      close: "Close",
      intro: "TAG08 Studio respects your privacy and is committed to protecting your personal data.",
      sections: {
        data: { title: "Data Collection", text: "We collect basic contact information (name, email, phone) only when you voluntarily start a consultation or contact via WhatsApp." },
        cookies: { title: "Use of Cookies", text: "We use technical cookies to ensure site functionality and analytical cookies (Google Analytics) to understand how to improve our content delivery." },
        rights: { title: "Your Rights", text: "You have the right to access, correct, or request the deletion of your data at any time, as provided by GDPR." },
        security: { title: "Security", text: "We implement encryption protocols and restricted access to ensure your strategic information is never shared without authorization." }
      }
    },
    cookiePolicy: {
      title: "Cookie Policy",
      intro: "This policy explains how TAG08 uses cookies to improve your browsing experience and performance analysis.",
      sections: {
        necessary: { title: "Necessary Cookies", text: "Essential for the basic functioning of the site, such as page navigation and access to secure areas. The site cannot function properly without them." },
        analytical: { title: "Performance Cookies", text: "Help us understand how visitors interact with the site by collecting and reporting information anonymously via Google Analytics." },
        marketing: { title: "Marketing Cookies", text: "Used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user." },
        management: { title: "Preference Management", text: "You can manage or disable cookies through your browser settings at any time. Note that disabling them may affect your experience on the site." }
      }
    },
    monthlyCycle: {
      title: "Recurring Execution Cycle",
      subtitle: "Marketing is not an event, it's a continuous process.",
      steps: {
        step1: { title: "Week 1: Alignment", desc: "Monthly kickoff meeting to define themes and strategic objectives." },
        step2: { title: "Week 2: Production", desc: "Creation of visuals, captions, and technical campaign setup." },
        step3: { title: "Growth", desc: "Daily monitoring and real-time optimization." },
        step4: { title: "Scaling", desc: "KPI analysis and aggressive result expansion." },
      },
      footerText: "We repeat the success every month",
    },
    testimonials: {
      title: "Elite Recognition",
      subtitle: "What our partners say about the TAG08 experience on Google.",
      googleRating: "5.0",
      reviewCount: "over 40 reviews",
      viewAll: "View all on Google",
      items: [
        { name: "Ricardo Almeida", role: "CEO, TechFlux", content: "TAG08 transformed our digital presence. The Base Plan gave us the consistency we lacked, and the ROI was visible by the second month.", date: "2 months ago" },
        { name: "Fernanda Costa", role: "Marketing Dir., Lumina", content: "Top-tier design and real strategy. It's not just posting; it's brand building. I recommend it for those seeking the top.", date: "1 month ago" },
        { name: "Bruno Mantovani", role: "Partner, Nexus Invest", content: "The team's professionalism is impressive. The monthly delivery cycle is very organized and gives us total clarity on growth.", date: "3 weeks ago" }
      ]
    },
    calculator: {
      badge: "ROI Calculator",
      title: "How much are you",
      titleAccent: "leaving on the table?",
      description: "The cost of inertia is the most expensive tax your company pays. Calculate the neglected growth potential now.",
      revenueLabel: "Monthly Revenue",
      growthLabel: "Growth Goal",
      lossLabel: "Annual Lost Opportunity",
      monthlyLossLabel: "Monthly Growth",
      newCeilingLabel: "New Monthly Ceiling",
      cta: "Capture Opportunity",
      disclaimer: "Analysis based on senior benchmarking"
    },
    investment: {
      badge: "Safety First",
      title: "Strategic",
      titleAccent: "Investment.",
      subtitle: "Total clarity on the value of your transformation. No fine print, just elite performance.",
      cardTitle: "Studio Safety",
      fideleityTitle: "Zero Loyalty",
      fidelityTag: "ELITE",
      fidelityDesc: "Focus on results. We don't trap our clients with long contracts; our retention is based on real performance.",
      cancelTitle: "Flexible Cancellation",
      cancelDesc: "Need to adjust course? Just a 30-day notice. Simplicity and ethics at all ends of our operation.",
      offerTitle: "Your brand,",
      offerTitleAccent: "our focus.",
      offerDesc: "High-level operations require personalization. The Base Plan value is adapted to your scale needs.",
      offerCta: "Request Proposal"
    },
    responsibilities: {
      badge: "The Partnership",
      title: "Your responsibility",
      titleAccent: "in success.",
      subtitle: "Elite marketing is a two-way street. To reach the top, we need your team to be in sync with us:",
      items: [
        "Agility in creative approvals.",
        "Sync between marketing and sales.",
        "Active participation in the monthly meeting.",
        "Constant feedback on generated leads."
      ]
    },
    strategicBenefits: {
      title: "The TAG08 Studio Standard",
      subtitle: "Differentials that place us at the top of the strategic marketing chain.",
      items: [
        { title: "Absolute Consistency", desc: "Uninterrupted and professional digital presence that builds real authority." },
        { title: "Focused ROI", desc: "Campaigns optimized to generate profit and scale, avoiding vanity metrics." },
        { title: "Senior Team", desc: "Direct access to expert consultants, without intermediaries or interns." },
        { title: "Agility", desc: "Fast execution and constant adaptation to digital market changes." }
      ]
    },
    footer: {
      badge: "Elite Consulting",
      title: "Your company ready for the",
      titleAccent: "next level of maturity.",
      description: "TAG08 unites business strategy, process engineering, and technology to transform operational chaos into self-managed growth machines.",
      ctaDiagnosis: "SCHEDULE DIAGNOSIS",
      ctaDirection: "TALK TO DIRECTION",
      about: "Specialized consulting in business leverage. We replace 'guesswork' with data and chaos with validated processes.",
      ecosystem: "TAG08 Ecosystem",
      institutional: "Institutional",
      social: "Social Media",
      socialDesc: "Follow the backstage of consulting and daily management insights.",
      rights: "TAG08 Digital Strategy",
      allRights: "All rights reserved.",
      privacy: "Privacy",
      cookies: "Cookie Policy",
      preferences: "Privacy Preferences"
    },
    growthRoadmap: {
      title: "The Path to the",
      titleAccent: "Next Level",
      subtitle: "It's not about a monthly service, it's about a journey of predictable and profitable scale.",
      steps: {
        step1: { stage: "Phase 01", title: "Consolidation", desc: "Foundation adjustment, elite branding and initial traffic structure." },
        step2: { stage: "Phase 02", title: "Scaling", desc: "Budget expansion, funnel optimization and audience dominance." },
        step3: { stage: "Phase 03", title: "Acceleration", desc: "Launches and vertical scale to reach the market ceiling." },
        step4: { stage: "Phase 04", title: "Dominance", desc: "Unquestionable authority and absolute leadership in your niche." }
      }
    },
    strategyNotes: {
      hero: "Visual engineering focused on reducing guest effort.",
      metrics: "Optimization based on senior usability heuristics.",
      roadmap: "360 vision of LTV for maximum predictability.",
      roi: "Annual loss projection due to digital stagnation.",
      design: "Elite grid for absolute visual harmony.",
      blueprint: "Blueprint Mode: Visualizing strategic layers."
    }
  },
  es: {
    hero: {
      badge: "Plan Base Studio",
      title: "Venda más.",
      titleAccent: "Luzca mejor.",
      description: "Transformamos empresas estancadas en marcas dominantes a través de gestión estratégica de marketing y diseño de élite.",
      cta: "Agendar Diagnóstico",
      limited: "Cupos Limitados",
      welcomeBack: "Bienvenido de nuevo",
      sourceMeta: "Domine lo Social.",
      sourceGoogle: "Aparezca en el Top.",
      sourceLinkedin: "Conquiste el B2B.",
      heroAlt: "Equipo de consultoría estratégica de TAG08 planificando el crecimiento de una marca premium",
      headlines: {
        data: "Decisiones basadas en beneficios reales.",
        vision: "El futuro de su marca, hoy.",
        default: "Venda más. Luzca melhor.",
      }
    },
    navbar: {
      diagnosis: "Diagnóstico",
      free: "Gratis",
      menu: {
        problem: "Problema",
        solution: "Solución",
        plan: "El Plan",
        cycle: "Ciclo",
      }
    },
    problem: {
      label: "El Escenario Actual",
      title: "¿Su empresa está estancada en el \"casi\"?",
      description: "El marketing amateur es el mayor drenaje de efectivo de su empresa. Sin una gestión de estudio, solo está quemando recursos sin construir patrimonio digital.",
      items: [
        "Falta de constancia en la comunicación",
        "Tráfico pagado sin estratégia de conversión",
        "Incertidumbre sobre el retorno de inversión",
        "Sobrecarga operativa del socio"
      ],
      cards: {
        posts: "Posteos Irregulares",
        leads: "Leads Desqualificados",
        money: "Dinero Perdido",
        brand: "Marca Invisible",
      }
    },
    pillars: {
      title: "Los 4 Pilares de la Entrega",
      subtitle: "Una solución completa e integrada para su consolidación digital.",
      items: {
        strategy: { title: "Planeación Estratégica", desc: "Definição de canais, personas, linha editorial e cronograma de ações trimestrais focado em conversão." },
        content: { title: "Producción de Conteúdo", desc: "Creación de creativos para redes sociales y anuncios, manteniendo el estándar visual premium de su marca." },
        ads: { title: "Gestión de Tráfico Pago", desc: "Configuración y optimización diaria de campañas en Meta Ads y Google Ads para maximizar o ROI." },
        analysis: { title: "Análise e Reportes", desc: "Dashboard em tempo real e reuniões mensais de alinhamento com especialistas de marketing." },
      }
    },
    faq: {
      badge: "Knowledge Base",
      title: "Preguntas",
      titleAccent: "Frecuentes.",
      subtitle: "La transparencia radical es uno de nuestros pilares. Entiende los detalles antes de dar el siguiente paso.",
      supportTitle: "¿Aún con dudas?",
      supportBody: "Nuestro equipo de consultores está disponible en WhatsApp para resolver consultas específicas de tu nicho.",
      supportCta: "Hablar con un Consultor",
      items: [
        { question: "¿El Plan Base es adecuado para cualquier tipo de empresa?", answer: "El Plan Base está indicado para empresas que ya validaron su modelo de negocio y están en fase de consolidación digital, pero aún no tienen equipo interno. No es para negocios iniciales o publicaciones puntuales." },
        { question: "¿Este plan es solo gestión de redes sociales?", answer: "No. El Plan Base va más allá. Incluye diagnóstico estratégico, planificación de contenido, producción, publicación y análisis mensual para un crecimiento digital continuo." },
        { question: "¿En qué canales se publican los contenidos?", answer: "Se publican en Instagram y Facebook, según lo definido en la planificación mensual. Otros canales pueden evaluarse en propuestas específicas." },
        { question: "¿Quién crea los temas e ideas de los contenidos?", answer: "TAG08 propone los temas y el cliente puede contribuir con sugerencias. La planificación final siempre se valida en conjunto antes de la producción." },
        { question: "¿Los vídeos deben ser grabados por TAG08?", answer: "No necesariamente. Pueden ser grabados por TAG08 o proporcionados por el cliente, siempre que sigan las directrices de planificación para asegurar calidad y coherencia." },
        { question: "¿Cómo funciona el seguimiento de resultados?", answer: "Mensualmente realizamos una reunión de seguimiento y entregamos un informe de rendimiento para ajustar la dirección estratégica si es necesario." },
        { question: "¿Existe contrato de permanencia?", answer: "No. El Plan Base no tiene permanencia contractual. Si el cliente decide cancelar, solo se requiere un aviso previo de 30 días." },
        { question: "¿Puedo contratar contenidos o servicios extras?", answer: "Sí. Cuando sea necesario, se pueden contratar contenidos o servicios extras de forma individual, sin alterar el formato del Plan Base." },
        { question: "¿El Plan Base garantiza resultados específicos?", answer: "No trabajamos con promesas irreales. Ofrecemos estructura, método y constancia. Los resultados dependen del mercado, producto y participación del cliente." },
        { question: "¿Qué se espera del cliente durante el plan?", answer: "El cliente debe entregar materiales a tiempo, asignar un punto focal para aprobaciones y participar en reuniones mensuales para asegurar la calidad." },
        { question: "¿En cuánto tiempo veré el contenido al aire?", answer: "Tras aprobar la planificación, iniciamos la producción. Cada mes, un nuevo ciclo comienza el día 15, asegurando previsibilidad y organización." },
        { question: "¿Puede este plan evolucionar conforme crece mi negocio?", answer: "Sí. El Plan Base es la puerta de entrada para soluciones escalables. A medida que el negocio evoluciona, se incorporan nuevas estrategias y servicios." }
      ]
    },
    cta: {
      title: "¿Listo para el siguiente nivel?",
      desc: "Haga clic en el botón de abajo para agendar una reunión de diagnóstico gratuita con nuestro equipo sénior.",
      button: "Agendar Agora por WhatsApp",
      highValueTitle: "Lleve su operación a la cima.",
      highValueButton: "Hablar con un Socio Sénior",
      disclaimer: "Al hacer clic, acepta el procesamiento de sus datos para fines de contacto comercial según nuestra política de privacidad.",
      urgency: "Cupos limitados para nuevos socios este mes",
    },
    cookie: {
      title: "Privacidad y Datos",
      desc: "Utilizamos cookies para optimizar su experiencia e analizar nuestro tráfico.",
      accept: "Aceptar",
      policy: "Política de Privacidad",
    },
    privacy: {
      title: "Política de Privacidad",
      close: "Cerrar",
      intro: "TAG08 Studio respeta su privacidad y se compromete a proteger sus datos personales.",
      sections: {
        data: { title: "Recopilación de Datos", text: "Recopilamos información básica de contacto (nombre, email, teléfono) solo cuando inicia voluntariamente una consultoría o contacto vía WhatsApp." },
        cookies: { title: "Uso de Cookies", text: "Utilizamos cookies técnicas para garantizar el funcionamiento del sitio y cookies analíticas (Google Analytics) para entender cómo mejorar nuestra entrega de contenido." },
        rights: { title: "Sus Derechos", text: "Tiene derecho a acceder, corregir o solicitar la eliminación de sus datos en cualquier momento, según lo previsto en las leyes de protección de datos." },
        security: { title: "Seguridad", text: "Implementamos protocolos de cifrado y acceso restringido para garantizar que su información estratégica nunca se comparta con terceros sin autorización." }
      }
    },
    cookiePolicy: {
      title: "Política de Cookies",
      intro: "Esta política explica cómo TAG08 utiliza cookies para mejorar su experiencia de navegación y análisis de rendimiento.",
      sections: {
        necessary: { title: "Cookies Necesarias", text: "Esenciales para el funcionamiento básico del sitio, como la navegación por páginas y el acceso a áreas seguras. El sitio no puede funcionar correctamente sin ellos." },
        analytical: { title: "Cookies de Rendimiento", text: "Nos ayudan a entender cómo los visitantes interactúan con el sitio mediante la recopilación y el reporte de información de forma anônima a través de Google Analytics." },
        marketing: { title: "Cookies de Marketing", text: "Se utilizan para rastrear a los visitantes en los sitios web. La intención es mostrar anuncios que sean relevantes y atractivos para el usuario individual." },
        management: { title: "Gestão de Preferências", text: "Puede gestionar o desactivar as cookies a través de la configuración de su navegador en cualquier momento. Tenga en cuenta que desactivarlas puede afectar a su experiencia en el sitio." }
      }
    },
    monthlyCycle: {
      title: "Ciclo de Ejecución Recurrente",
      subtitle: "El marketing no es un evento, es un proceso continuo.",
      steps: {
        step1: { title: "Semana 1: Alineación", desc: "Reunión de inicio mensual para definir temas y objetivos estratégicos." },
        step2: { title: "Semana 2: Producción", desc: "Desarrollo de artes, subtítulos y configuración técnica de campañas." },
        step3: { title: "Semana 3: Lanzamiento", desc: "Activación de acciones e inicio de recolección de datos de rendimiento en tiempo real." },
        step4: { title: "Semana 4: Análisis", desc: "Cierre del informe con insights y sugerencias de mejora para el próximo ciclo." },
      },
      footerText: "Repetimos el éxito todos los meses",
    },
    testimonials: {
      title: "Reconocimiento de Élite",
      subtitle: "Lo que dicen nuestros socios sobre la experiencia TAG08 en Google.",
      googleRating: "5.0",
      reviewCount: "más de 40 reseñas",
      viewAll: "Ver todas en Google",
      items: [
        { name: "Ricardo Almeida", role: "CEO, TechFlux", content: "TAG08 transformó nuestra presencia digital. El Plan Base nos dio a constancia que faltaba y el ROI foi visible ya en el segundo mes.", date: "hace 2 meses" },
        { name: "Fernanda Costa", role: "Dir. de Marketing, Lumina", content: "Diseño de altísimo nivel y estrategia real. No es solo publicación, es construcción de marca. Lo recomiendo para quienes buscan la cima.", date: "hace 1 mes" },
        { name: "Bruno Mantovani", role: "Socio, Nexus Invest", content: "El profesionalismo del equipo es impresionante. El ciclo mensual de entrega está muy organizado y nos da total claridad del crecimiento.", date: "hace 3 semanas" }
      ]
    },
    strategicBenefits: {
      title: "El Estándar Studio TAG08",
      subtitle: "Diferenciales que nos colocan en la cima de la cadena del marketing estratégico.",
      items: [
        { title: "Consistencia Absoluta", desc: "Presencia digital ininterrumpida y profesional que construye autoridad real." },
        { title: "ROI Enfocado", desc: "Campañas optimizadas para generar lucro y escala, huyendo de métricas de vanidad." },
        { title: "Equipo Sénior", desc: "Acceso directo a consultores expertos, sin intermediarios ni pasantes." },
        { title: "Agilidad", desc: "Ejecución veloz y adaptación constante a los cambios del mercado digital." }
      ]
    },
    calculator: {
      badge: "Calculadora de ROI",
      title: "¿Cuánto estás",
      titleAccent: "dejando en la mesa?",
      description: "El costo de la inercia es el impuesto más caro que paga su empresa. Calcule ahora el potencial de crecimiento descuidado.",
      revenueLabel: "Facturación Mensual",
      growthLabel: "Meta de Crecimiento",
      lossLabel: "Oportunidade Perdida Anual",
      monthlyLossLabel: "Crecimiento Mensual",
      newCeilingLabel: "Nuevo Techo Mensual",
      cta: "Capturar Oportunidad",
      disclaimer: "Análisis basado en benchmarking sénior"
    },
    investment: {
      badge: "Safety First",
      title: "Inversión",
      titleAccent: "Estratégica.",
      subtitle: "Claridad total sobre el valor de su transformación. Sin letra pequeña, solo desempeño de élite.",
      cardTitle: "Seguridad de Studio",
      fideleityTitle: "Cero Fidelidad",
      fidelityTag: "ELITE",
      fidelityDesc: "Enfoque en resultados. No atrapamos a nuestros clientes con contratos largos; nuestra retención se basa en el desempeño real.",
      cancelTitle: "Cancelación Flexible",
      cancelDesc: "¿Necesitas ajustar el rumbo? Basta con un aviso de 30 días. Simplicidad y ética en todos los extremos de nuestra operación.",
      offerTitle: "Su marca,",
      offerTitleAccent: "nuestro enfoque.",
      offerDesc: "Las operaciones de alto nivel requieren personalización. El valor del Plan Base se adapta a su necesidad de escala.",
      offerCta: "Solicitar Propuesta"
    },
    responsibilities: {
      badge: "The Partnership",
      title: "Su responsabilidad",
      titleAccent: "en el éxito.",
      subtitle: "El marketing de élite es una vía de doble sentido. Para llegar a la cima, necesitamos que su equipo esté sincronizado con nosotros:",
      items: [
        "Agilidad en las aprobaciones de creativos.",
        "Sincronía entre marketing e comercial.",
        "Participació ativa na reunião mensal.",
        "Feedback constante sobre los leads generados."
      ]
    },
    footer: {
      badge: "Consultoría de Élite",
      title: "Su empresa lista para el",
      titleAccent: "próximo nivel de madurez.",
      description: "TAG08 une estrategia de negocios, ingeniería de procesos y tecnología para transformar el caos operativo en máquinas de crecimiento autogestionadas.",
      ctaDiagnosis: "AGENDAR DIAGNÓSTICO",
      ctaDirection: "HABLAR CON LA DIRECCIÓN",
      about: "Consultoría especializada en apalancamiento de negocios. Reemplazamos las 'conjeturas' con datos y el caos con procesos validados.",
      ecosystem: "Ecosistema TAG08",
      institutional: "Institucional",
      social: "Redes Sociales",
      socialDesc: "Siga el backstage de las consultorías e insights diarios de gestión.",
      rights: "TAG08 Estrategia Digital",
      allRights: "Todos los derechos reservados.",
      privacy: "Privacidad",
      cookies: "Política de Cookies",
      preferences: "Preferencias de Privacidad"
    },
    growthRoadmap: {
      title: "El Camino hacia el",
      titleAccent: "Próximo Nivel",
      subtitle: "No se trata de un servicio mensual, se trata de un viaje de escala predecible y rentable.",
      steps: {
        step1: { stage: "Fase 01", title: "Consolidación", desc: "Ajuste de cimientos, branding de élite y estructura de tráfico inicial." },
        step2: { stage: "Fase 02", title: "Escala", desc: "Expansión de presupuestos, optimización de embudos y dominio de audiencia." },
        step3: { stage: "Fase 03", title: "Aceleración", desc: "Lanzamientos y escala vertical para alcanzar el techo del mercado." },
        step4: { stage: "Fase 04", title: "Dominio", desc: "Autoridad incuestionable y liderazgo absoluto en su nicho." }
      }
    },
    strategyNotes: {
      hero: "Ingeniería visual enfocada en reducir el esfuerzo cognitivo.",
      metrics: "Optimización basada en heurísticas de usabilidad senior.",
      roadmap: "Visión 360 del LTV para máxima previsibilidade.",
      roi: "Predicción de pérdida anual por estancamento digital.",
      design: "Grid de elite para armonía visual absoluta.",
      blueprint: "Blueprint Mode: Visualizando las capas estratégicas."
    }
  },
  fr: {
    hero: {
      badge: "Plan de Base Studio",
      title: "Vendez plus.",
      titleAccent: "Paraissez mieux.",
      description: "Nous transformons les entreprises stagnantes en marques dominantes grâce à une gestion stratégique du marketing et un design d'élite.",
      cta: "Prendre Rendez-vous",
      limited: "Places Limitées",
      welcomeBack: "Bon retour",
      sourceMeta: "Maîtrisez le Social.",
      sourceGoogle: "Soyez au Sommet.",
      sourceLinkedin: "Conquérez le B2B.",
      heroAlt: "L'équipe de conseil stratégique de TAG08 planifie la croissance d'une marque premium",
      headlines: {
        data: "Des décisions basées sur des profits réels.",
        vision: "L'avenir de votre marque, aujourd'hui.",
        default: "Vendez plus. Paraissez mieux.",
      }
    },
    navbar: {
      diagnosis: "Diagnostic",
      free: "Gratuit",
      menu: {
        problem: "Problème",
        solution: "Solution",
        plan: "Le Plan",
        cycle: "Cycle",
      }
    },
    problem: {
      label: "Le Scénario Actuel",
      title: "Votre entreprise est-elle bloquée au stade du \"presque\" ?",
      description: "Le marketing amateur est la plus grande perte de liquidités pour votre entreprise. Sans gestion de studio, vous brûlez des ressources sans bâtir de patrimoine numérique.",
      items: [
        "Manque de cohérence dans la communication",
        "Publicité payante sans stratégie de conversion",
        "Incertitude sur le retour sur investissement",
        "Surcharge opérationnelle de l'associé"
      ],
      cards: {
        posts: "Publications Irrégulières",
        leads: "Leads Non Qualifiés",
        money: "Argent Gaspillé",
        brand: "Marque Invisible",
      }
    },
    pillars: {
      title: "Les 4 Piliers de la Prestation",
      subtitle: "Une solution complète et intégrée pour votre consolidation numérique.",
      items: {
        strategy: { title: "Planification Stratégique", desc: "Définition des canaux, des personas, de la ligne éditoriale et du calendrier d'actions trimestriel axé sur la conversion." },
        content: { title: "Production de Contenu", desc: "Création de visuels pour les réseaux sociaux et les publicités, tout en maintenant le standard visuel premium de votre marque." },
        ads: { title: "Gestion de la Publicité Payante", desc: "Configuration et optimisation quotidienne des campagnes Meta Ads et Google Ads pour maximiser le ROI." },
        analysis: { title: "Analyse et Rapports", desc: "Tableau de bord en tempo réel et réunions mensuelles d'alignement avec des experts en marketing." },
      }
    },
    faq: {
      badge: "Knowledge Base",
      title: "Questions",
      titleAccent: "Fréquentes.",
      subtitle: "Une transparence radicale est l'un de nos piliers. Comprenez les détails avant de passer à l'étape suivante.",
      supportTitle: "Vous avez encore des questions ?",
      supportBody: "Notre équipe de consultants est disponible sur WhatsApp pour répondre aux demandes spécifiques de votre secteur.",
      supportCta: "Parler à un Consultant",
      items: [
        { question: "Le Plan de Base convient-il à tout type d'entreprise ?", answer: "Le Plan de Base est destiné aux entreprises ayant déjà validé leur modèle d'affaires et étant en phase de consolidation numérique, mais n'ayant pas d'équipe interne. Pas pour les débutants." },
        { question: "S'agit-il uniquement de gestion des réseaux sociaux ?", answer: "Non. Le Plan de Base va plus loin : diagnostic stratégique, planification, production, publication et analyse mensuelle pour une croissance numérique continue." },
        { question: "Sur quels canaux les contenus sont-il publiés ?", answer: "Le contenu est publié sur Instagram et Facebook, selon le planning mensuel. D'autres canaux peuvent être évalués dans des propositions spécifiques." },
        { question: "Qui crée les thèmes et les idées de contenu ?", answer: "TAG08 propose les thèmes stratégiques et le client peut contribuer avec ses suggestions. Le planning final est toujours validé ensemble avant la production." },
        { question: "Les vidéos doivent-elles être enregistrées par TAG08 ?", answer: "Pas nécessairement. Elles peuvent être enregistrées par TAG08 ou fournies par le client, à condition de respecter les directives pour assurer la cohérence." },
        { question: "Comment fonctionne le suivi des résultats ?", answer: "Chaque mois, nous organisons une réunion de suivi et livrons un rapport d'engagement, permettant d'ajuster la direction stratégique si nécessaire." },
        { question: "Existe-t-il un contrat d'engagement ?", answer: "Non. Le Plan de Base n'a pas d'engagement contractuel. En cas d'annulation, un simple préavis de 30 jours est requis." },
        { question: "Puis-je commander du contenu ou des services supplémentaires ?", answer: "Oui. Si nécessaire, des services ou contenus extras peuvent être commandés à la carte, sans modifier le format du Plan de Base." },
        { question: "Le Plan de Base garantit-il des résultats spécifiques ?", answer: "Nous ne faisons pas de promesses irréalistes. Nous offrons structure, méthode et constance. Les résultats dépendent du marché, du produit et du client." },
        { question: "Qu'est-ce qui est attendu du client pendant le plan ?", answer: "Le client doit fournir les matériaux dans les délais, désigner un point focal pour les validations et participer aux réunions mensuelles pour garantir la qualité." },
        { question: "Dans quel délai le contenu sera-t-il en ligne ?", answer: "Après validation du planning, nous lançons la production. Chaque mois, un nouveau cycle commence le 15, assurant prévisibilité et organisation." },
        { question: "Ce plan peut-il évoluer avec la croissance de mon entreprise ?", answer: "Oui. Le Plan de Base est conçu comme une porte d'entrée évolutive. À mesure que l'entreprise grandit, de nouvelles stratégies peuvent être intégrées." }
      ]
    },
    cta: {
      title: "Prêt pour le niveau suivant ?",
      desc: "Cliquez sur le bouton ci-dessous pour planifier une réunion de diagnostic gratuite avec notre équipe senior.",
      button: "Réserver via WhatsApp",
      highValueTitle: "Portez votre opération au sommet.",
      highValueButton: "Parler à un Associé Senior",
      disclaimer: "En cliquant, vous acceptez le traitement de vos données à des fins de contact commercial conformément à notre politique de confidentialité.",
      urgency: "Places limitées pour de nouveaux partenaires ce mois-ci",
    },
    cookie: {
      title: "Confidentialité & Données",
      desc: "Nous utilisons des cookies pour optimiser votre experiência et analyser notre trafic.",
      accept: "Aceiter",
      policy: "Politique de Confidentialité",
    },
    privacy: {
      title: "Politique de Confidentialité",
      close: "Fermer",
      intro: "TAG08 Studio respecte votre vie privée et s'engage à proteger vos données personnelles.",
      sections: {
        data: { title: "Collecte de Données", text: "Nous collectons des informations de contact de base (nom, e-mail, téléphone) uniquement lorsque vous lancez volontairement une consultation ou un contact via WhatsApp." },
        cookies: { title: "Utilisation des Cookies", text: "Nous utilisons des cookies techniques pour assurer le fonctionnement du site et des cookies analitiques (Google Analytics) pour comprendre how to improve our diffusion de contenu." },
        rights: { title: "Vos Droits", text: "Vous avez le droit d'accéder, de corriger ou de demander la suppression de vos données à tout moment, comme prévu par le RGPD." },
        security: { title: "Sécurité", text: "Nous mettons en œuvre des protocoles de cryptage et un accès restreint pour garantir que vos informations stratégiques ne soient jamais partagées avec des tiers sans autorisation." }
      }
    },
    cookiePolicy: {
      title: "Politique relative aux cookies",
      intro: "Cette politique explique comment TAG08 utilise des cookies pour améliorer votre expérience de navigation et l'analyse des performances.",
      sections: {
        necessary: { title: "Cookies nécessaires", text: "Essentiels au fonctionnement de base du site, comme la navigation sur les pages et l'accès aux zones sécurisées. Le site ne peut pas fonctionner correctement sans eux." },
        analytical: { title: "Cookies de performance", text: "Nous aident à comprendre comment les visiteurs interagissent avec le site en collectant et en signalant des informations de manière anonyme via Google Analytics." },
        marketing: { title: "Cookies de marketing", text: "Utilisés pour suivre les visiteurs sur les sites web. L'intention est d'afficher des publicités qui soient relevantes et attrayantes para l'utilisateur individuel." },
        management: { title: "Gestion des préférences", text: "Vous pouvez gérer ou désactiver les cookies via les paramètres de votre navigateur à tout moment. Notez que la désactivation peut affecter votre expérience sur le site." }
      }
    },
    monthlyCycle: {
      title: "Cycle d'Exécution Récurrent",
      subtitle: "Le marketing n'est pas un événement, c'est un processus continu.",
      steps: {
        step1: { title: "Semaine 1 : Alignement", desc: "Réunion de lancement mensuelle pour définir les thèmes et objectifs stratégiques." },
        step2: { title: "Semaine 2 : Production", desc: "Développement des visuels, légendes et configuration technique des campagnes." },
        step3: { title: "Semaine 3 : Lancement", desc: "Activation des actions et début de la collecte des données de performance en temps réel." },
        step4: { title: "Semaine 4 : Analyse", desc: "Clôture du rapport avec des insights et des suggestions d'amélioration pour le cycle suivant." },
      },
      footerText: "Nous répétons le succès chaque mois",
    },
    testimonials: {
      title: "Reconnaissance d'Élite",
      subtitle: "Ce que nos partenaires disent de l'expérience TAG08 sur Google.",
      googleRating: "5.0",
      reviewCount: "plus de 40 avis",
      viewAll: "Tout voir sur Google",
      items: [
        { name: "Ricardo Almeida", role: "CEO, TechFlux", content: "TAG08 a transformé notre présence numérique. Le Plan de Base nous a donné la constance qui nous manquait e le ROI était visible dès le deuxième mois.", date: "il y a 2 mois" },
        { name: "Fernanda Costa", role: "Dir. Marketing, Lumina", content: "Design de haut niveau et stratégie réelle. Ce n'est pas juste de l'affichage, c'est de la construction de marque. Je recommande pour ceux qui visent le sommet.", date: "il y a 1 mois" },
        { name: "Bruno Mantovani", role: "Associé, Nexus Invest", content: "Le professionnalisme de l'équipe est impressionnant. Le cycle de livraison mensuel est très organisé et nous donne une clarté totale sur la croissance.", date: "il y a 3 semaines" }
      ]
    },
    strategicBenefits: {
      title: "Le Standard Studio TAG08",
      subtitle: "Des différentiels qui nous placent au sommet de la chaîne du marketing stratégique.",
      items: [
        { title: "Consistance Absolue", desc: "Présence numérique ininterrompue et professionnelle qui renforce l'autorité réelle." },
        { title: "ROI Focalisé", desc: "Campagnes optimisées pour générer profit et échelle, évitant les métriques de vanité." },
        { title: "Équipe Senior", desc: "Accès direct à des consultants experts, sans intermédiaires ni stagiaires." },
        { title: "Agilité", desc: "Exécution rapide et adaptation constante aux évolutions du marché numérique." }
      ]
    },
    calculator: {
      badge: "ROI Calculator",
      title: "Combien vous",
      titleAccent: "laissez sur la table ?",
      description: "Le coût de l'inertie est l'impôt le plus cher que votre entreprise paie. Calculez dès maintenant le potentiel de croissance négligé.",
      revenueLabel: "Chiffre d'Affaires Mensuel",
      growthLabel: "Objectif de Croissance",
      lossLabel: "Opportunité Perdue Annuelle",
      monthlyLossLabel: "Croissance Mensuelle",
      newCeilingLabel: "Nouveau Plafond Mensuel",
      cta: "Saisir l'Opportunité",
      disclaimer: "Analyse basée sur un benchmarking senior"
    },
    investment: {
      badge: "Safety First",
      title: "Investissement",
      titleAccent: "Stratégique.",
      subtitle: "Clarté totale sur la valeur de votre transformation. Pas de petits caractères, juste une performance d'élite.",
      cardTitle: "Sécurité du Studio",
      fideleityTitle: "Zéro Fidélité",
      fidelityTag: "ÉLITE",
      fidelityDesc: "Concentrez-vous sur les résultats. Nous n'enfermons pas nos clients avec des contrats longs ; notre rétention est basée sur la performance réelle.",
      cancelTitle: "Annulation Flexible",
      cancelDesc: "Besoin d'ajuster le cap ? Un simple préavis de 30 jours suffit. Simplicité et éthique à tous les niveaux de notre opération.",
      offerTitle: "Votre marque,",
      offerTitleAccent: "notre priorité.",
      offerDesc: "Les opérations de haut niveau exigent une personnalisation. La valeur du Plan de Base est adaptée à votre besoin d'échelle.",
      offerCta: "Demander une Proposition"
    },
    responsibilities: {
      badge: "The Partnership",
      title: "Votre responsabilité",
      titleAccent: "dans le succès.",
      subtitle: "Le marketing d'élite est une rue à double sens. Pour atteindre le sommet, nous avons besoin que votre équipe soit en phase avec nous :",
      items: [
        "Agilité dans les approbations de créations.",
        "Synchronisation entre le marketing et le commercial.",
        "Participation active à la réunion mensuelle.",
        "Feedback constant sur les leads générés."
      ]
    },
    footer: {
      badge: "Conseil d'Élite",
      title: "Votre entreprise prête pour le",
      titleAccent: "prochain niveau de maturité.",
      description: "TAG08 unit stratégie d'entreprise, ingénierie des processus et technologie pour transformer le chaos opérationnel en machines de croissance autogérées.",
      ctaDiagnosis: "PROGRAMMER UN DIAGNOSTIC",
      ctaDirection: "PARLER À LA DIRECTION",
      about: "Conseil spécialisé en levier commercial. Nous remplaçons les 'conjectures' par des données et le chaos par des processus validés.",
      ecosystem: "Écosystème TAG08",
      institutional: "Institutionnel",
      social: "Réseaux Sociaux",
      socialDesc: "Suivez les coulisses du conseil et les insights quotidiens sur la gestion.",
      rights: "TAG08 Stratégie Digitale",
      allRights: "Tous droits réservés.",
      privacy: "Confidentialité",
      cookies: "Politique relative aux cookies",
      preferences: "Préférences de confidentialité"
    },
    growthRoadmap: {
      title: "Le Chemin vers le",
      titleAccent: "Prochain Niveau",
      subtitle: "Il ne s'agit pas d'un service mensuel, mais d'un voyage vers une échelle prévisible et rentable.",
      steps: {
        step1: { stage: "Phase 01", title: "Consolidation", desc: "Ajustement des fondations, branding d'élite et structure de trafic initiale." },
        step2: { stage: "Phase 02", title: "Mise à l'échelle", desc: "Expansion des budgets, optimisation des entonnoirs et domination de l'audience." },
        step3: { stage: "Phase 03", title: "Accélération", desc: "Lancements et mise à l'échelle verticale pour atteindre le plafond du marché." },
        step4: { stage: "Phase 04", title: "Domination", desc: "Autorité incontestable et leadership absolu dans votre niche." }
      }
    },
    strategyNotes: {
      hero: "Ingénierie visuelle axée sur la réduction de l'effort cognitif.",
      metrics: "Optimisation basée sur les heuristiques d'utilisabilité senior.",
      roadmap: "Vision 360 du LTV pour une prévisibilité maximale.",
      roi: "Prévision de perte annuelle due à la stagnation numérique.",
      design: "Grille d'élite pour une harmonie visuelle absolue.",
      blueprint: "Blueprint Mode: Visualisation des couches stratégiques."
    }
  }
};
