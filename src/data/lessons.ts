export interface LessonDetailSection {
  heading: string;
  paragraphs: string[];
}

export interface LessonSource {
  title: string;
  authorOrPublisher: string;
  url: string;
  type: "video" | "article" | "social";
}

export interface LessonDetail {
  id: string;
  title: string;
  subtitle: string;
  readTime: string;
  author: string;
  publishedDate: string;
  introduction: string;
  sections: LessonDetailSection[];
  keyTakeaways: string[];
  sources: LessonSource[];
  quiz: {
    question: string;
    options: string[];
    answerIndex: number;
    explanation: string;
  };
}

export const lessonsDetails: Record<"en" | "as", Record<string, LessonDetail>> = {
  en: {
    "exp-01": {
      id: "exp-01",
      title: "Defining Automation",
      subtitle: "Understanding the difference between smart tools and human thinking",
      readTime: "5 min read",
      author: "Curated by Rakibul with AI",
      publishedDate: "June 2026",
      introduction: "Have you ever wondered how a toaster knows when to pop up your toast, or how a robotic vacuum cleaner navigates around your toys? These are examples of automation—machines following set instructions to do tasks without needing a human to guide them every second.",
      sections: [
        {
          heading: "What is Automation?",
          paragraphs: [
            "Automation is when we use machines and computers to perform tasks that used to be done by hand. Think of it like a train running on a track: it follows the steel rails exactly. It cannot turn left or right on its own. It only goes where the tracks lead.",
            "Deterministic software works just like that train. It follows strict, pre-written rules. For example, if you press the 'Defrost' button on a microwave, it runs for exactly three minutes at 30% heat. It does not think about whether the food is defrosted; it simply obeys the timer."
          ]
        },
        {
          heading: "Human Control vs. Machine Execution",
          paragraphs: [
            "Humans are creative and can adapt to new situations. If a sudden obstacle appears in front of you, your brain figures out how to climb over it, walk around it, or wait. Traditional automated machines cannot do this. If a robotic arm gets stuck, it will keep trying to push through until it hits an error.",
            "AI is a special type of automation that tries to mimic how humans learn, but it still runs on code and mathematics. It doesn't have feelings, consciousness, or real understanding. It is just very fast at finding patterns."
          ]
        }
      ],
      keyTakeaways: [
        "Automation means machines running tasks by following fixed instructions.",
        "Traditional software is deterministic—it always yields the same output for the same input.",
        "Humans possess cognitive flexibility, whereas automated systems strictly follow logic boundaries."
      ],
      sources: [
        {
          title: "What is automation?",
          authorOrPublisher: "IBM Topics",
          url: "https://www.ibm.com/topics/automation",
          type: "article"
        },
        {
          title: "How Computers Work: What is Software?",
          authorOrPublisher: "Code.org (YouTube)",
          url: "https://www.youtube.com/watch?v=OAx_6-wdslM",
          type: "video"
        }
      ],
      quiz: {
        question: "Which of the following is the best example of deterministic automation?",
        options: [
          "A cat deciding which toy to play with",
          "A digital watch ticking every second and updating the numbers",
          "A human paint artist painting a sunset",
          "A student deciding what to eat for lunch"
        ],
        answerIndex: 1,
        explanation: "A digital watch follows strict, unchanging code rules to update its numbers every second. This makes it a deterministic automated system."
      }
    },
    "exp-02": {
      id: "exp-02",
      title: "Real vs. Synthetic",
      subtitle: "How to spot computer-generated images in the digital world",
      readTime: "7 min read",
      author: "Curated by Rakibul with AI",
      publishedDate: "June 2026",
      introduction: "Imagine looking at a photo of an astronaut riding a horse on the moon, or a purple cat flying through the clouds. A few years ago, you would know immediately that these were paintings. Today, computers can create photos that look incredibly real. We call these computer-made pictures 'synthetic media'.",
      sections: [
        {
          heading: "What is Synthetic Imagery?",
          paragraphs: [
            "Synthetic images are pictures created from scratch by artificial intelligence models. Instead of using a camera to capture light from the real world, the AI model uses mathematics to predict what pixels should look like based on thousands of real photos it studied.",
            "Because these models are just guessing what pixels look like, they often make mistakes in details that humans naturally understand, like the number of fingers on a hand, or how light reflects in someone's eyes."
          ]
        },
        {
          heading: "How to Spot AI-Generated Pictures",
          paragraphs: [
            "To identify synthetic pictures, look closely at the background. AI models often make backgrounds blurry or warp lines (like fence posts or window frames).",
            "Next, check symmetrical details. Look at earrings (are they matching?), glasses frames (do they align correctly?), and eyes (do the pupils look round and have identical reflections?). Looking closely at these fine elements is how you train your mind to spot the difference."
          ]
        }
      ],
      keyTakeaways: [
        "Synthetic media refers to images, videos, or text generated by AI models.",
        "AI generates images by guessing pixels, not by understanding physical reality.",
        "You can spot synthetic images by looking for errors in fingers, symmetry, and warped backgrounds."
      ],
      sources: [
        {
          title: "How to Spot a Deepfake",
          authorOrPublisher: "TED-Ed (YouTube)",
          url: "https://www.youtube.com/watch?v=gloikrtjxu4",
          type: "video"
        },
        {
          title: "Detecting AI-Generated Images",
          authorOrPublisher: "MIT Technology Review",
          url: "https://www.technologyreview.com/2023/06/26/1075380/ai-generated-images-detection/",
          type: "article"
        }
      ],
      quiz: {
        question: "What is a common visual error found in AI-generated photos of humans?",
        options: [
          "Perfect lighting on all surfaces",
          "Anatomical glitches, like hands with six fingers",
          "Watermarks from traditional cameras",
          "The pictures are always black and white"
        ],
        answerIndex: 1,
        explanation: "AI models struggle with fine structural details and often create hands with incorrect numbers of fingers or merged features."
      }
    },
    "exp-03": {
      id: "exp-03",
      title: "Basic Logic Gates",
      subtitle: "The building blocks of machine thinking",
      readTime: "8 min read",
      author: "Curated by Rakibul with AI",
      publishedDate: "June 2026",
      introduction: "At the very core of every smart device, supercomputer, and AI model is a simple concept: logic. Logic gates are the tiny decision-makers inside a computer chip. They take electrical signals and check them against simple rules to decide what happens next.",
      sections: [
        {
          heading: "The Rules of IF and THEN",
          paragraphs: [
            "Computers understand the world in binary—everything is either 'True' (1) or 'False' (0). We build decisions by combining these inputs.",
            "An AND gate only gives a True output if all inputs are True. Think of it like this: IF you have a key AND you turn the key, THEN the car starts.",
            "An OR gate gives a True output if at least one input is True: IF it rains OR you turn on the garden sprinkler, THEN the grass gets wet."
          ]
        },
        {
          heading: "Connecting Simple Rules to Big Brains",
          paragraphs: [
            "By layering millions of these simple logic gates together, we build complex chips. AI models perform millions of mathematical logic steps every second to guess your next word or translate a language.",
            "No matter how smart an AI seems, it is just millions of tiny switches executing basic True/False checks."
          ]
        }
      ],
      keyTakeaways: [
        "Computers operate entirely using binary logic: 1 (True) and 0 (False).",
        "Logic gates (like AND, OR, NOT) are the fundamental hardware tools that perform calculations.",
        "AI models are built upon millions of these basic logical decisions working simultaneously."
      ],
      sources: [
        {
          title: "How Logic Gates Work",
          authorOrPublisher: "Computerphile (YouTube)",
          url: "https://www.youtube.com/watch?v=gI-qXk7XojA",
          type: "video"
        },
        {
          title: "Logic Gates in Digital Electronics",
          authorOrPublisher: "GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/logic-gates-in-digital-electronics/",
          type: "article"
        }
      ],
      quiz: {
        question: "If an automated door opens ONLY when a person is standing in front of it AND the security code is correct, which logic gate is it using?",
        options: [
          "OR gate",
          "NOT gate",
          "AND gate",
          "XOR gate"
        ],
        answerIndex: 2,
        explanation: "Because both conditions must be met (person present AND code correct) for the output to occur (door opens), it uses an AND gate."
      }
    },
    "cre-01": {
      id: "cre-01",
      title: "Prompt Engineering Basics",
      subtitle: "Learning to communicate effectively with generative models",
      readTime: "8 min read",
      author: "Curated by Rakibul with AI",
      publishedDate: "June 2026",
      introduction: "When you ask an AI model to write a poem or design a game, the quality of its response depends entirely on what you wrote. The words you type are called a 'prompt', and learning to construct these prompts to get the best results is a crucial skill called prompt engineering.",
      sections: [
        {
          heading: "The Structure of a Perfect Prompt",
          paragraphs: [
            "Generative AI models do not read minds; they predict likely sequences of words. If you write a generic prompt like 'write a story,' you will get a generic, boring response.",
            "A well-structured prompt contains four main components: Role (who the AI should act as), Context (the background information), Instruction (what you want it to do), and Output Format (how you want the result styled)."
          ]
        },
        {
          heading: "Iterative Refinement",
          paragraphs: [
            "Prompt engineering is an experimental science. If the first answer is not what you wanted, don't start over. Prompt the AI to edit its own output by giving it corrections, such as: 'Remove the second paragraph and make the tone more professional.'"
          ]
        }
      ],
      keyTakeaways: [
        "A prompt is the set of inputs or instructions given to an AI system.",
        "Effective prompts incorporate Roles, Context, Instructions, and Constraints.",
        "Refining outputs through conversational follow-ups is key to getting high-quality results."
      ],
      sources: [
        {
          title: "Prompt Engineering Tutorial",
          authorOrPublisher: "freeCodeCamp (YouTube)",
          url: "https://www.youtube.com/watch?v=_ZvnD73m40o",
          type: "video"
        },
        {
          title: "Prompt Engineering Guide",
          authorOrPublisher: "DAIR.AI",
          url: "https://www.promptingguide.ai/",
          type: "article"
        }
      ],
      quiz: {
        question: "Which prompt is most likely to give a specific, high-quality summary of a text?",
        options: [
          "Summarize this text.",
          "Act as a science editor. Summarize this research text in three bullet points, focusing only on the water findings, for a high school student.",
          "Can you write about this file for me please?",
          "Read this and tell me what you think."
        ],
        answerIndex: 1,
        explanation: "The second option gives a specific role (science editor), clear constraints (three bullet points, focus on water), and defines the target audience (high school student)."
      }
    },
    "cre-02": {
      id: "cre-02",
      title: "Understanding Algorithm Bias",
      subtitle: "Why AI systems can make unfair decisions and how we fix them",
      readTime: "10 min read",
      author: "Curated by Rakibul with AI",
      publishedDate: "June 2026",
      introduction: "We often think of computers as completely objective and fair. However, because AI systems learn from data created by humans, they can inherit our biases, leading to automated systems making unfair or discriminatory decisions.",
      sections: [
        {
          heading: "Where Does Bias Come From?",
          paragraphs: [
            "AI models do not look at the real world; they look at 'training datasets.' If a model designed to screen resumes is trained on historical data from a company that only hired male engineers, the model learns that being male is a key feature of a successful engineer.",
            "This is called data bias. The algorithm is not mean; it is just a mirror reflecting the historical inequalities present in its training data."
          ]
        },
        {
          heading: "Identifying and Reducing Bias",
          paragraphs: [
            "Correcting bias requires auditing data. Engineers must check if datasets represent diverse groups fairly and tweak algorithms to prevent them from using protected attributes (like gender or race) to make decisions."
          ]
        }
      ],
      keyTakeaways: [
        "AI bias occurs when an algorithm produces systematically prejudiced results.",
        "Algorithms are trained on historical data, which often contains human biases.",
        "Auditing training data and model decisions is essential to build fair software."
      ],
      sources: [
        {
          title: "The Danger of Algorithmic Bias",
          authorOrPublisher: "Joy Buolamwini (TED Talks)",
          url: "https://www.youtube.com/watch?v=UG_X_7g63rY",
          type: "video"
        },
        {
          title: "Weapons of Math Destruction",
          authorOrPublisher: "Cathy O'Neil (Crown Books)",
          url: "https://weaponsofmathdestructionbook.com/",
          type: "article"
        }
      ],
      quiz: {
        question: "Why might an AI system designed to evaluate credit cards reject more female applicants?",
        options: [
          "The computer hates women.",
          "The training data contains historical lending records from an era when women faced systemic financial barriers.",
          "Women are naturally bad at managing money.",
          "The system is running on low electrical power."
        ],
        answerIndex: 1,
        explanation: "The system learns from historical records. If those records reflect historical societal biases against women, the AI reproduces that pattern."
      }
    },
    "cre-03": {
      id: "cre-03",
      title: "The Digital Footprint",
      subtitle: "How your data is collected, stored, and used to train AI",
      readTime: "8 min read",
      author: "Curated by Rakibul with AI",
      publishedDate: "June 2026",
      introduction: "Every search query you enter, video you watch, and post you like creates a trail of digital crumbs. This is your digital footprint. In the age of AI, this footprint is no longer just used to show you targeted ads—it has become the fuel used to build machine learning models.",
      sections: [
        {
          heading: "Your Data is Training Material",
          paragraphs: [
            "Generative AI models require petabytes of text, code, and images to learn. Companies collect this data by scraping websites, user uploads, and public files.",
            "This means your digital artwork, essays, and even public social media comments might have been used to train AI models without you even knowing it."
          ]
        },
        {
          heading: "Protecting Your Data Privacy",
          paragraphs: [
            "To control your digital footprint, use privacy settings on your accounts, opt out of data sharing where possible, and be mindful of what you upload publicly. Once data enters a model's weights, it is very difficult to remove."
          ]
        }
      ],
      keyTakeaways: [
        "A digital footprint is the trail of data you leave behind on the internet.",
        "Modern AI systems are trained by scraping vast amounts of user-generated content.",
        "Managing data privacy settings is crucial to control how your personal files are utilized."
      ],
      sources: [
        {
          title: "How to Opt Out of AI Training Data",
          authorOrPublisher: "Electronic Frontier Foundation (EFF)",
          url: "https://www.eff.org/deeplinks/2023/08/how-to-opt-out-of-ai-training-data",
          type: "article"
        },
        {
          title: "How AI companies scrape the entire internet",
          authorOrPublisher: "Vox (YouTube)",
          url: "https://www.youtube.com/watch?v=hM10yvPekvM",
          type: "video"
        }
      ],
      quiz: {
        question: "What does it mean when we say an AI model scraped your digital footprint?",
        options: [
          "It deleted all of your files from the internet.",
          "It collected public text, photos, or inputs you created to use as training data.",
          "It hacked your local computer hardware.",
          "It sent you a bill for using its services."
        ],
        answerIndex: 1,
        explanation: "AI scraping involves automated tools collecting publicly accessible internet content (images, writing, comments) to feed into training datasets."
      }
    },
    "str-01": {
      id: "str-01",
      title: "Deepfake Forensics",
      subtitle: "Techniques to detect synthetic media and defend the truth",
      readTime: "12 min read",
      author: "Curated by Rakibul with AI",
      publishedDate: "June 2026",
      introduction: "As generative video models become more sophisticated, it is becoming possible to create realistic videos of public figures saying things they never said. These are called deepfakes. Detecting deepfakes is an essential skill in forensic verification.",
      sections: [
        {
          heading: "How Deepfakes are Made",
          paragraphs: [
            "Deepfakes are typically generated using Generative Adversarial Networks (GANs) or diffusion models. One model generates synthetic faces, and another checks it against real photos, refining the image until the synthetic face looks indistinguishable from the real person."
          ]
        },
        {
          heading: "Forensic Analysis Techniques",
          paragraphs: [
            "Forensic specialists look for physical inconsistencies. Humans blink naturally every 2 to 8 seconds; early deepfakes rarely blinked. Look at the edges of the face (are there blur artifacts near the ears and chin?) and check the audio synchronization (does the mouth shape match the sound exactly?).",
            "In professional settings, we also use metadata analysis and cryptographic verification (like digital watermarking) to verify media authenticity."
          ]
        }
      ],
      keyTakeaways: [
        "Deepfakes are synthetic videos or audio clips generated by machine learning models.",
        "Detecting deepfakes involves looking for inconsistencies in blinking, audio alignment, and borders.",
        "Cryptographic signing is becoming the standard for verifying media origin."
      ],
      sources: [
        {
          title: "Deepfake Detection Challenge",
          authorOrPublisher: "Meta AI & Partnerships",
          url: "https://deepfakedetectionchallenge.ai/",
          type: "article"
        },
        {
          title: "Detecting Deepfakes: A Forensic Look",
          authorOrPublisher: "IEEE Spectrum",
          url: "https://spectrum.ieee.org/deepfake-detection",
          type: "article"
        }
      ],
      quiz: {
        question: "What is a common physical inconsistency to look for when analyzing a potential deepfake video?",
        options: [
          "The video file size is too small.",
          "Mismatch between mouth movements and vocal acoustics, or blurry artifacts along the jawline.",
          "The person is wearing sunglasses.",
          "The video only plays in fast forward."
        ],
        answerIndex: 1,
        explanation: "Generative models often struggle to sync audio phonemes with physical lip movements and leave blending glitches near structural boundaries like the jawline."
      }
    },
    "str-02": {
      id: "str-02",
      title: "Economic Automation",
      subtitle: "Analyzing the impact of AI on job markets and career prep",
      readTime: "10 min read",
      author: "Curated by Rakibul with AI",
      publishedDate: "June 2026",
      introduction: "AI will not simply replace humans; it will change how almost every job is done. From doctors to lawyers, and programmers to writers, those who know how to use AI are beginning to work faster and more efficiently than those who do not.",
      sections: [
        {
          heading: "Task Replacement vs. Job Displacement",
          paragraphs: [
            "A job is a collection of tasks. AI rarely replaces an entire job; it replaces specific tasks. For example, a doctor won't be replaced, but the task of reading X-ray scans might be handled by an AI assistant first, allowing the doctor to spend more time talking to patients."
          ]
        },
        {
          heading: "Designing a Resilient Career",
          paragraphs: [
            "To prepare for this shift, focus on developing skills that computers struggle with: high-level critical thinking, emotional intelligence, complex problem-solving, and creative execution. Understanding how to use AI as a tool is the best way to secure your career."
          ]
        }
      ],
      keyTakeaways: [
        "Automation changes the tasks within a job rather than displacing the entire profession.",
        "AI acts as an intelligence amplifier, increasing individual worker output.",
        "Skills like empathy, complex synthesis, and tool orchestration are highly resilient."
      ],
      sources: [
        {
          title: "The Rise of the Machines – Why Automation is Different",
          authorOrPublisher: "Kurzgesagt (YouTube)",
          url: "https://www.youtube.com/watch?v=yqgY8dO4s8M",
          type: "video"
        },
        {
          title: "The Future of Jobs Report 2023",
          authorOrPublisher: "World Economic Forum",
          url: "https://www.weforum.org/publications/the-future-of-jobs-report-2023/",
          type: "article"
        }
      ],
      quiz: {
        question: "Which skill is most resilient to automation in the foreseeable future?",
        options: [
          "Data entry and basic copy writing",
          "Empathy, high-stakes negotiation, and ethical reasoning",
          "Translating documents from one language to another",
          "Running basic database queries"
        ],
        answerIndex: 1,
        explanation: "Computers struggle with emotional intelligence, complex human relations, and understanding the social context of ethics, making these human skills highly resilient."
      }
    },
    "str-03": {
      id: "str-03",
      title: "AI Ethics & Policy",
      subtitle: "Governing intelligent machines and defining developer responsibility",
      readTime: "11 min read",
      author: "Curated by Rakibul with AI",
      publishedDate: "June 2026",
      introduction: "When an automated car crashes, who is responsible? The driver? The programmer? The car company? As AI systems make decisions that impact human lives, building ethical frameworks and policies is critical.",
      sections: [
        {
          heading: "The Core Dilemmas of AI Ethics",
          paragraphs: [
            "We must establish rules for transparency (understanding why a model made a decision), accountability (who is responsible for errors), and safety (preventing systems from causing harm).",
            "Without policy, systems can be deployed that violate privacy rights or generate dangerous content without consequences."
          ]
        },
        {
          heading: "Global AI Policy Frameworks",
          paragraphs: [
            "Governments are passing laws like the EU AI Act, which categorizes systems by risk. High-risk systems (like medical software or credit scoring) face strict compliance audits before they can be used."
          ]
        }
      ],
      keyTakeaways: [
        "AI ethics addresses the moral implications and responsibilities of AI developers.",
        "Transparency and accountability are the foundations of trustworthy AI deployment.",
        "Modern regulation frameworks classify AI risks to apply proportional rules."
      ],
      sources: [
        {
          title: "The EU AI Act Portal",
          authorOrPublisher: "European Union Compliance",
          url: "https://www.artificialintelligenceact.eu/",
          type: "article"
        },
        {
          title: "AI Ethics and Governance",
          authorOrPublisher: "Harvard Berkman Klein Center",
          url: "https://cyber.harvard.edu/topics/artificial-intelligence",
          type: "article"
        }
      ],
      quiz: {
        question: "What is the primary goal of modern AI policy frameworks like the EU AI Act?",
        options: [
          "To ban all artificial intelligence research",
          "To categorize AI applications by risk level and enforce safety audits on high-risk systems",
          "To make AI software free for everyone",
          "To force computers to pay taxes"
        ],
        answerIndex: 1,
        explanation: "Modern AI policy aims to ensure safety and ethical alignment by classifying AI applications by risk and enforcing strict regulations on high-risk use cases."
      }
    }
  },
  as: {
    "exp-01": {
      id: "exp-01",
      title: "স্বয়ংক্ৰিয়কৰণৰ সংজ্ঞা",
      subtitle: "স্মাৰ্ট সঁজুলি আৰু মানুহৰ চিন্তাৰ মাজৰ পাৰ্থক্য বুজি পোৱা",
      readTime: "৫ মিনিট পঢ়ক",
      author: "ৰকিবুল আৰু AI-ৰ দ্বাৰা সংকলিত",
      publishedDate: "জুন ২০২৬",
      introduction: "আপুনি কেতিয়াবা ভাবিছেনে এটা টোষ্টাৰে কেনেকৈ গম পায় যেতিয়া টোষ্টটো সম্পূৰ্ণ হৈ যায়, বা এটা ৰবটিক ভেকুৱাম ক্লীনাৰে কেনেকৈ আপোনাৰ পুতলাবোৰৰ কাষেৰে পাৰ হৈ যায়? এইবোৰ হৈছে স্বয়ংক্ৰিয়কৰণৰ উদাহৰণ—যন্ত্ৰবোৰে মানুহৰ সহায় নোহোৱাকৈ নিৰ্দিষ্ট নিৰ্দেশনা অনুসৰণ কৰি কাম কৰে।",
      sections: [
        {
          heading: "স্বয়ংক্ৰিয়কৰণ কি?",
          paragraphs: [
            "স্বয়ংক্ৰিয়কৰণ মানে হ'ল আগতে হাতেৰে কৰা কামবোৰ এতিয়া যন্ত্ৰ আৰু কম্পিউটাৰৰ সহায়ত কৰা। ইয়াক এটা ৰে'ল গাড়ীৰ সৈতে তুলনা কৰিব পাৰি: ই নিজৰ ট্ৰেকৰ ওপৰেৰে চলে। ই নিজে বাওঁ বা সোঁফালে ঘূৰিব নোৱাৰে। ট্ৰেক যিফালে যায়, ই সিফালেই যায়।",
            "ছফ্টৱেৰসমূহ ঠিক সেই ৰে'লখনৰ দৰেই কাম কৰে। ই পূৰ্বতে লিখা নিয়মবোৰ কঠোৰভাৱে মানি চলে। উদাহৰণস্বৰূপ, মাইক্ৰ'ৱেভ এটাত 'ডিফ্ৰষ্ট' বুটাম টিপিলে ই ঠিক তিনি মিনিটৰ বাবে ৩০% উত্তাপত চলে। খাদ্যখিনি গৰম হ'ল নে নাই সেইয়া ই চিন্তা নকৰে; ই কেৱল টাইমাৰটোহে মানি চলে।"
          ]
        },
        {
          heading: "মানুহৰ নিয়ন্ত্ৰণ বনাম যন্ত্ৰৰ কাৰ্যপ্ৰণালী",
          paragraphs: [
            "মানুহ সৃষ্টিশীল আৰু নতুন পৰিস্থিতিৰ সৈতে খাপ খাব পাৰে। যদি আপোনাৰ আগত কোনো হठাত বাধা আহে, আপোনাৰ মগজুৱে তাৰ ওপৰেৰে বগাব পাৰে, কাষেৰে যাব পাৰে বা অপেক্ষা কৰিব পাৰে। পৰম্পৰাগত স্বয়ংক্ৰিয় যন্ত্ৰবোৰে এইটো কৰিব নোৱাৰে। যদি এটা ৰবটিক হাত ক'ৰবাত লাগি ধৰে, ই ভুল বুলি দেখুওৱালৈকে সেই ঠাইতে ঠেলা মাৰি থাকিব।",
            "AI হৈছে এক বিশেষ ধৰণৰ স্বয়ংক্ৰিয়কৰণ যিয়ে মানুহে কেনেকৈ শিকে তাৰ অনুকৰণ কৰিবলৈ চেষ্টা কৰে, কিন্তু ই এতিয়াও কোড আৰু গণিতৰ ওপৰতে চলে। ইয়াৰ কোনো অনুভূতি বা প্ৰকৃত বুজাবুজি নাই। ই কেৱল আৰ্হি বিচাৰি উলিওৱাত খুবেই দ্ৰুত।"
          ]
        }
      ],
      keyTakeaways: [
        "স্বয়ংক্ৰিয়কৰণ মানে হ'ল যন্ত্ৰই নিৰ্দিষ্ট নিৰ্দেশনা মানি কাম সম্পন্ন কৰা।",
        "পৰম্পৰাগত ছফ্টৱেৰবোৰ নিয়মভিত্তিক—ই একেটা ইনপুটৰ বাবে সদায় একেটাই আউটপুট দিয়ে।",
        "মানুহৰ মানসিক নমনীয়তা থাকে, কিন্তু স্বয়ংক্ৰিয় ব্যৱস্থাবোৰে কেৱল লজিক নিয়মহে মানি চলে।"
      ],
      sources: [
        {
          title: "স্বয়ংক্ৰিয়কৰণ কি?",
          authorOrPublisher: "IBM Topics (আই.বি.এম)",
          url: "https://www.ibm.com/topics/automation",
          type: "article"
        },
        {
          title: "কম্পিউটাৰে কেনেকৈ কাম কৰে: ছফ্টৱেৰ কি?",
          authorOrPublisher: "Code.org (YouTube)",
          url: "https://www.youtube.com/watch?v=OAx_6-wdslM",
          type: "video"
        }
      ],
      quiz: {
        question: "তলৰ কোনটো নিয়মভিত্তিক স্বয়ংক্ৰিয়কৰণৰ সৰ্বোত্তম উদাহৰণ?",
        options: [
          "মেকুৰী এটাই কোনটো পুতলাৰে খেলিব তাৰ সিদ্ধান্ত লোৱা",
          "ডিজিটেল ঘড়ী এটাই প্ৰতি ছেকেণ্ডত টিক-টিক কৰি নম্বৰ সলনি কৰা",
          "চিত্ৰশিল্পী এজনে সূৰ্যাস্তৰ ছবি অঁকা",
          "ছাত্ৰ এজনে দুপৰীয়া কি খাব তাৰ সিদ্ধান্ত লোৱা"
        ],
        answerIndex: 1,
        explanation: "ডিজিটেল ঘড়ী এটাই প্ৰতি ছেকেণ্ডত নিজৰ নম্বৰ সলনি কৰিবলৈ কঠোৰ কোড নিয়ম অনুসৰণ কৰে। ই সম্পূৰ্ণ স্বয়ংক্ৰিয় নিয়মত চলে।"
      }
    },
    "exp-02": {
      id: "exp-02",
      title: "প্ৰকৃত বনাম কৃত্ৰিম",
      subtitle: "ডিজিটেল জগতত কম্পিউটাৰে বনোৱা ছবি কেনেকৈ চিনাক্ত কৰিব",
      readTime: "৭ মিনিট পঢ়ক",
      author: "ৰকিবুল আৰু AI-ৰ দ্বাৰা সংকলিত",
      publishedDate: "জুন ২০২৬",
      introduction: "কল্পনা কৰক জোনত এজন মহাকাশচাৰীয়ে ঘোঁৰা চলাই থকা ফটো এখন, বা আকাশত উৰি ফুৰা এটা বেঙুনীয়া মেকুৰী। কেইবছৰমান আগতে আপুনি লগে লগে গম পালেহেঁতেন যে এইবোৰ অঁকা ছবি। কিন্তু আজি কম্পিউটাৰে এনেকুৱা ছবি বনাব পাৰে যিবোৰ দেখাত একেবাৰে সঁচা যেন লাগে। ইয়াকে আমি 'কৃত্ৰিম মিডিয়া' বুলি কওঁ।",
      sections: [
        {
          heading: "কৃত্ৰিম ছবি কি?",
          paragraphs: [
            "কৃত্ৰিম ছবিবোৰ কৃত্ৰিম বুদ্ধিমত্তা (AI) মডেলৰ সহায়ত একেবাৰে নতুনকৈ সৃষ্টি কৰা হয়। সঁচা কেমেৰা ব্যৱহাৰ কৰি পোহৰ ধৰি ৰখাৰ পৰিৱৰ্তে, AI মডেলে হাজাৰ হাজাৰ প্ৰকৃত ফটো অধ্যয়ন কৰি গণিতৰ সহায়ত অনুমান কৰে যে পিক্সেলবোৰ কেনেকুৱা হ'ব লাগে।",
            "যিহেতু এই মডেলবোৰে কেৱল অনুমানহে কৰে, সেয়েহে ইহঁতে মানুহে সহজে বুজি পোৱা কথাবোৰত ভুল কৰে, যেনে হাতৰ আঙুলিৰ সংখ্যা বা চকুৰ পোহৰৰ প্ৰতিফলন।"
          ]
        },
        {
          heading: "AI-য়ে বনোৱা ছবি কেনেকৈ ধৰা পেলাব",
          paragraphs: [
            "কৃত্ৰিম ছবিবোৰ চিনাক্ত কৰিবলৈ পিছফালৰ পৰিৱেশটো (background) ভালদৰে চাওক। AI মডেলে প্ৰায়ে পিছফালৰ অংশবোৰ অস্পষ্ট বা বেকা কৰি পেলায় (যেনে খিৰিকীৰ ফ্ৰেম বা বেৰৰ সীমা)।",
            "তাৰ পিছত সমমিতি (symmetry) পৰীক্ষা কৰক। কাণৰ ফুলি জোৰা মিলিছেনে? চশমাৰ ফ্ৰেমটো ঠিক আছে নে? চকুৰ মণি দুটা ঘূৰণীয়া আৰু তাত পোহৰৰ প্ৰতিফলন একে ধৰণৰ নে? এই সূক্ষ্ম কথাবোৰ মনোযোগেৰে চালেই আপুনি পাৰ্থক্য বুজি পাব।"
          ]
        }
      ],
      keyTakeaways: [
        "কৃত্ৰিম মিডিয়া মানে হ'ল AI মডেলৰ দ্বাৰা নিৰ্মিত ছবি, ভিডিঅ' বা লিখনী।",
        "AI-য়ে পিক্সেল অনুমান কৰি ছবি প্ৰস্তুত কৰে, বাস্তৱ জগতখন বুজি পাই নহয়।",
        "আঙুলিৰ সংখ্যা, কাণফুলি বা চশমাৰ অসঙ্গতি আৰু বেকা বেকগ্ৰাউণ্ড চাই কৃত্ৰিম ছবি ধৰা পেলাব পাৰি।"
      ],
      sources: [
        {
          title: "ডিপফেক কেনেকৈ ধৰা পেলাব",
          authorOrPublisher: "TED-Ed (YouTube)",
          url: "https://www.youtube.com/watch?v=gloikrtjxu4",
          type: "video"
        },
        {
          title: "AI-য়ে বনোৱা ছবি চিনাক্তকৰণ",
          authorOrPublisher: "MIT Technology Review (এম.আই.টি)",
          url: "https://www.technologyreview.com/2023/06/26/1075380/ai-generated-images-detection/",
          type: "article"
        }
      ],
      quiz: {
        question: "মানুহৰ AI-নিৰ্মিত ফটোবোৰত সাধাৰণতে কি ভুল দেখা যায়?",
        options: [
          "সকলো অংশতে সঠিক পোহৰ থাকে",
          "শৰীৰৰ গাঁথনিত ভুল, যেনে হাতত ছয়টা আঙুলি থকা",
          "পৰম্পৰাগত কেমেৰাৰ ৱাটাৰমাৰ্ক থকা",
          "ছবিবোৰ সদায় ক'লা-বগা হয়"
        ],
        answerIndex: 1,
        explanation: "AI মডেলে শৰীৰৰ সূক্ষ্ম গাঁথনিবোৰ সঠিকভাৱে বনাব নোৱাৰে, যাৰ বাবে আঙুলিৰ সংখ্যা ভুল হোৱা বা আঙুলিবোৰ মিলি যোৱা দেখা যায়।"
      }
    },
    "exp-03": {
      id: "exp-03",
      title: "মৌলিক লজিক গেট",
      subtitle: "যন্ত্ৰৰ চিন্তা কৰাৰ মূল উপাদানসমূহ",
      readTime: "৮ মিনিট পঢ়ক",
      author: "ৰকিবুল আৰু AI-ৰ দ্বাৰা সংকলিত",
      publishedDate: "জুন ২০২৬",
      introduction: "প্ৰতিটো স্মাৰ্ট সঁজুলি, চুপাৰ কম্পিউটাৰ আৰু AI মডেলৰ একেবাৰে কেন্দ্ৰবিন্দুত এটা সৰল ধাৰণা থাকে: লজিক বা যুক্তি। লজিক গেট হৈছে কম্পিউটাৰ চিপৰ ভিতৰত থকা সৰু সৰু সিদ্ধান্ত গ্ৰহণকাৰী সঁজুলি। ইহঁতে বৈদুতিক সংকেত গ্ৰহণ কৰে আৰু সৰল নিয়মৰ আধাৰত সিদ্ধান্ত লয়।",
      sections: [
        {
          heading: "IF আৰু THEN ৰ নিয়মসমূহ",
          paragraphs: [
            "컴্পিউটাৰে বাইনাৰী ভাষা বুজি পায়—য'ত সকলো বস্তু হয় 'True' (১) নহয় 'False' (০)। আমি এই ইনপুটবোৰ মিলাই সিদ্ধান্ত লওঁ।",
            "এটা AND গেটে কেৱল তেতিয়াহে True আউটপুট দিয়ে যেতিয়া সকলো ইনপুট True হয়। ধৰি লওক: IF আপোনাৰ হাতত চাবি আছে AND চাবিটো ঘূৰাইছে, THEN গাড়ীখন ষ্টাৰ্ট হ'ব।",
            "আৰু এটা OR গেটে True আউটপুট দিয়ে যদি কমেও এটা ইনপুট True হয়: IF বৰষুণ দিছে OR আপুনি ফুলনিৰ পাইপডাল খুলি দিছে, THEN ঘাঁহখিনি তিতি যাব।"
          ]
        },
        {
          heading: "সৰল নিয়মৰ পৰা ডাঙৰ মগজুলৈ",
          paragraphs: [
            "এনেকুৱা লাখ লাখ লজিক গেট একেলগে মিলাই আমি কম্পিউটাৰ চিপবোৰ সাজোঁ। AI মডেলে প্ৰতি ছেকেণ্ডত লাখ লাখ গাণিতিক লজিক খোজ ব্যৱহাৰ কৰি আপোনাৰ পৰৱৰ্তী শব্দটো অনুমান কৰে বা ভাষা অনুবাদ কৰে।",
            "AI যিমানেই স্মাৰ্ট যেন নালাগক কিয়, ই কেৱল লাখ লাখ সৰু ছুইচৰ দ্বাৰা কৰা True/False পৰীক্ষাহে।"
          ]
        }
      ],
      keyTakeaways: [
        "컴্পিউটাৰে সম্পূৰ্ণৰূপে বাইনাৰী লজিক: ১ (True) আৰু ০ (False) ব্যৱহাৰ কৰে।",
        "লজিক গেট (যেনে AND, OR, NOT) হ'ল হাৰ্ডৱেৰৰ মূল সঁজুলি যিবোৰে হিচাপ-নিকাচ কৰে।",
        "AI মডেলবোৰ এনেকুৱা লাখ লাখ লজিক সিদ্ধান্তৰ ওপৰতে নিৰ্মাণ কৰা হয়।"
      ],
      sources: [
        {
          title: "লজিক গেট কেনেকৈ কাম কৰে",
          authorOrPublisher: "Computerphile (YouTube)",
          url: "https://www.youtube.com/watch?v=gI-qXk7XojA",
          type: "video"
        },
        {
          title: "ডিজিটেল ইলেক্ট্ৰনিক্সত লজিক গেট",
          authorOrPublisher: "GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/logic-gates-in-digital-electronics/",
          type: "article"
        }
      ],
      quiz: {
        question: "যদি এটা স্বয়ংক্ৰিয় দুৱাৰ কেৱল তেতিয়াহে খোল খায় যেতিয়া কোনোবা মানুহ সন্মুখত থিয় হয় AND সুৰক্ষা ক'ডটো শুদ্ধ হয়, তেন্তে তাত কোনটো লজিক গেট ব্যৱহাৰ হৈছে?",
        options: [
          "OR গেট",
          "NOT গেট",
          "AND গেট",
          "XOR গেট"
        ],
        answerIndex: 2,
        explanation: "যিহেতু দুয়োটা চৰ্ত পুৰণ হ'ব লাগিব (মানুহ থকা AND ক'ড শুদ্ধ হোৱা) দুৱাৰখন খোল খাবলৈ, সেয়েহে ইয়াত AND গেট ব্যৱহাৰ কৰা হৈছে।"
      }
    },
    "cre-01": {
      id: "cre-01",
      title: "প্ৰম্প্ট ইঞ্জিনিয়াৰিং প্ৰাথমিক জ্ঞান",
      subtitle: "জেনেক্টিভ মডেলৰ সৈতে সঠিকভাৱে যোগাযোগ কৰিবলৈ শিকা",
      readTime: "৮ মিনিট পঢ়ক",
      author: "ৰকিবুল আৰু AI-ৰ দ্বাৰা সংকলিত",
      publishedDate: "জুন ২০২৬",
      introduction: "যেতিয়া আপুনি AI মডেল এটাক কবিতা এটা লিখিবলৈ বা গেম এটা ডিজাইন কৰিবলৈ কয়, তাৰ উত্তৰটো সম্পূৰ্ণ নিৰ্ভৰ কৰে আপুনি কি লিখিছে তাৰ ওপৰত। আপুনি লিখা শব্দবোৰক 'প্ৰম্প্ট' বোলা হয় আৰু সৰ্বোত্তম উত্তৰ পাবলৈ এই প্ৰম্প্টটো তৈয়াৰ কৰা কৌশলটোক প্ৰম্প্ট ইঞ্জিনিয়াৰিং বোলা হয়।",
      sections: [
        {
          heading: "এটা নিখুঁত প্ৰম্প্টৰ গাঁথনি",
          paragraphs: [
            "AI মডেলে আপোনাৰ মনৰ কথা পঢ়িব নোৱাৰে; ই কেৱল শব্দৰ পূৰ্বাভাসহে কৰে। যদি আপুনি সৰলকৈ লিখে 'এটা গল্প লিখা', আপুনি এটা আমোদহীন গল্প পাব।",
            "এটা ভাল প্ৰম্প্টৰ চাৰিটা মূল অংশ থাকে: Role (AI-য়ে কি ভূমিকা ল'ব), Context (পৃষ্ঠভূমিৰ তথ্য), Instruction (কি কৰিব লাগে), আৰু Output Format (আউটপুটটো কেনেকুৱা হ'ব লাগিব)।"
          ]
        },
        {
          heading: "প্ৰম্প্টৰ সংশোধন",
          paragraphs: [
            "প্ৰম্প্ট ইঞ্জিনিয়াৰিং হৈছে এক পৰীক্ষামূলক বিজ্ঞান। যদি প্ৰথম উত্তৰটো আপোনাৰ পছন্দ হোৱা নাই, তেন্তে আকৌ নতুনকৈ আৰম্ভ নকৰিব। বৰঞ্চ AI ক সংশোধন কৰিবলৈ কওক, যেনে: 'দ্বিতীয় পেৰাগ্ৰাফটো আঁতৰাই দিয়া আৰু কথা কোৱাৰ শৈলীটো অধিক পেছাদাৰী কৰা।'"
          ]
        }
      ],
      keyTakeaways: [
        "প্ৰম্প্ট হৈছে AI ব্যৱস্থাক দিয়া নিৰ্দেশনা বা ইনপুট।",
        "প্ৰম্প্টত Role, Context, Instruction আৰু Constraints থাকিলে ভাল ফল পোৱা যায়।",
        "প্ৰশ্নৰ সংশোধন কৰিলে আৰু অধিক উন্নতমানৰ ফলাফল লাভ কৰিব পাৰি।"
      ],
      sources: [
        {
          title: "প্ৰম্প্ট ইঞ্জিনিয়াৰিং টিউটৰিয়েল",
          authorOrPublisher: "freeCodeCamp (YouTube)",
          url: "https://www.youtube.com/watch?v=_ZvnD73m40o",
          type: "video"
        },
        {
          title: "প্ৰম্প্ট ইঞ্জিনিয়াৰিং গাইড",
          authorOrPublisher: "DAIR.AI",
          url: "https://www.promptingguide.ai/",
          type: "article"
        }
      ],
      quiz: {
        question: "তলৰ কোনটো প্ৰম্প্টে এটা লিখনীৰ আটাইতকৈ সঠিক সাৰাংশ দিব পাৰিব?",
        options: [
          "ইয়াৰ সাৰাংশ লিখা।",
          "বিজ্ঞান সম্পাদক হিচাপে কাম কৰা। এই গৱেষণা পত্ৰখন হাইস্কুলৰ শিক্ষাৰ্থীৰ বাবে তিনিটা পইণ্টত চমুকৈ বুজোৱা, কেৱল পানী সংক্ৰান্তীয় তথ্যত গুৰুত্ব দিবা।",
          "তুমি মোৰ বাবে এই ফাইলটোৰ বিষয়ে লিখিব পাৰিবা নেকি?",
          "এইটো পঢ়া আৰু কোৱা তুমি কি ভাবা।"
        ],
        answerIndex: 1,
        explanation: "দ্বিতীয় বিকল্পই এটা নিৰ্দিষ্ট ভূমিকা (বিজ্ঞান সম্পাদক), চৰ্ত (তিনিটা পইণ্ট, পানীৰ তথ্য) আৰু লক্ষ্য (হাইস্কুলৰ শিক্ষাৰ্থী) নিৰ্ধাৰণ কৰি দিছে।"
      }
    },
    "cre-02": {
      id: "cre-02",
      title: "এলগৰিডমৰ পক্ষপাতিত্ব বুজি পোৱা",
      subtitle: "AI ব্যৱস্থাই কিয় পক্ষপাতমূলক সিদ্ধান্ত ল'ব পাৰে আৰু আমি ইয়াক কেনেকৈ ঠিক কৰিম",
      readTime: "১০ মিনিট পঢ়ক",
      author: "ৰকিবুল আৰু AI-ৰ দ্বাৰা সংকলিত",
      publishedDate: "জুন ২০২৬",
      introduction: "আমি প্ৰায়ে ভাবোঁ যে কম্পিউটাৰে সদায় নিৰপেক্ষ সিদ্ধান্ত লয়। কিন্তু যিহেতু AI ব্যৱস্থাই মানুহে সৃষ্টি কৰা তথ্যৰ পৰাহে শিকে, সেয়েহে মানুহৰ পক্ষপাতিত্ব ইয়াৰ ভিতৰতো সোমাই পৰিব পাৰে, যাৰ ফলত ই পক্ষপাতমূলক সিদ্ধান্ত লয়।",
      sections: [
        {
          heading: "পক্ষপাতিত্ব ক'ৰ পৰা আহে?",
          paragraphs: [
            "AI মডেলে প্ৰকৃত জগতখন নাচায়; ই কেৱল 'ট্ৰেনিং ডাটাচেট' দেখে। যদি চাকৰিৰ বাবে আবেদন পত্ৰ বাছনি কৰা এটা মডেলক কেৱল পুৰুষ অভিযন্তাক নিয়োগ কৰা এটা কোম্পানীৰ পুৰণি তথ্য দিয়া হয়, মডেলে শিকিব যে পুৰুষ হোৱাটোৱেই এজন সফল অভিযন্তাৰ লক্ষণ।",
            "ইয়াক ডাটা বায়াস বা তথ্যৰ পক্ষপাতিত্ব বোলা হয়। কম্পিউটাৰটো বেয়া নহয়; ই কেৱল তাৰ ট্ৰেনিং ডাটা থকা সামাজিক অসমানতাৰ প্ৰতিফলনহে দেখুৱাইছে।"
          ]
        },
        {
          heading: "পক্ষপাতিত্ব কেনেকৈ হ্ৰাস কৰিব পাৰি",
          paragraphs: [
            "পক্ষপাতিত্ব দুৰ কৰিবলৈ তথ্যবোৰ পৰীক্ষা কৰিব লাগিব। অভিযন্তাসকলে চাব লাগিব যাতে সকলো শ্ৰেণীৰ মানুহৰ তথ্য তাত থাকে আৰু এলগৰিডমে যাতে লিংগ বা জাতিৰ দৰে বিষয়ৰ আধাৰত বৈষম্য নকৰে।"
          ]
        }
      ],
      keyTakeaways: [
        "AI পক্ষপাতিত্ব হ'ল যেতিয়া এলগৰিডমে পক্ষপাতমূলক ফলাফল দিয়ে।",
        "এলগৰিডমবোৰ পুৰণি তথ্যৰ সহায়ত প্ৰশিক্ষণ দিয়া হয়, য'ত মানুহৰ পক্ষপাতিত্ব থাকিব পাৰে।",
        "ন্যায্য ছফ্টৱেৰ বনাবলৈ ডাটা আৰু মডেলৰ সিদ্ধান্তসমূহ অডিট কৰাটো অতি প্ৰয়োজনীয়।"
      ],
      sources: [
        {
          title: "এলগৰিডমৰ পক্ষপাতিত্বৰ বিপদ",
          authorOrPublisher: "Joy Buolamwini (TED Talks)",
          url: "https://www.youtube.com/watch?v=UG_X_7g63rY",
          type: "video"
        },
        {
          title: "Weapons of Math Destruction (গণিতৰ ধ্বংসকাৰী অস্ত্ৰ)",
          authorOrPublisher: "Cathy O'Neil (কেথী অ'নিল)",
          url: "https://weaponsofmathdestructionbook.com/",
          type: "article"
        }
      ],
      quiz: {
        question: "ক্ৰেডিট কাৰ্ড বাছনি কৰা AI এটাই মহিলা আবেদনকাৰীক কিয় নাকচ কৰিব পাৰে?",
        options: [
          "কম্পিউটাৰে মহিলাক ভাল নাপায়।",
          "ট্ৰেনিং ডাটাত থকা পুৰণি ক্ৰেডিট ৰেকৰ্ডবোৰ এনেকুৱা সময়ৰ আছিল যেতিয়া মহিলাসকলে ক্ৰেডিট কাৰ্ড পোৱাত বাধাৰ সন্মুখীন হৈছিল।",
          "মহিলাসকলে স্বাভাৱিকতে বিত্তীয় ব্যৱস্থাপনাত দুৰ্বল।",
          "কম্পিউটাৰটো কম বিদ্যুতত চলি আছে।"
        ],
        answerIndex: 1,
        explanation: "AI-য়ে পুৰণি ৰেকৰ্ডৰ পৰা শিকে। যদি সেই ৰেকৰ্ডবোৰত মহিলাসকলৰ প্ৰতি থকা বৈষম্য প্ৰতিফলিত হয়, তেন্তে AI মডেলেও তাৰেই পুনৰাবৃত্তি কৰে।"
      }
    },
    "cre-03": {
      id: "cre-03",
      title: "ডিজিটেল পদচিহ্ন",
      subtitle: "আপোনাৰ ডাটা কেনেকৈ সংগ্ৰহ কৰা হয় আৰু AI প্ৰশিক্ষণত ব্যৱহাৰ কৰা হয়",
      readTime: "৮ মিনিট পঢ়ক",
      author: "ৰকিবুল আৰু AI-ৰ দ্বাৰা সংকলিত",
      publishedDate: "জুন ২০২৬",
      introduction: "আপুনি কৰা প্ৰতিটো চাৰ্চ, চোৱা ভিডিঅ' বা লাইক কৰা পোষ্টবোৰে ইণ্টাৰনেটত এটা চিন ৰাখি থৈ যায়। ইয়াকে আপোনাৰ ডিজিটেল পদচিহ্ন (Digital Footprint) বোলা হয়। আজিৰ দিনত এই পদচিহ্ন কেৱল বিজ্ঞাপন দেখুৱাবলৈ নহয়—বৰঞ্চ AI মডেল বনাবলৈও ব্যৱহাৰ কৰা হয়।",
      sections: [
        {
          heading: "আপোনাৰ ডাটা হ'ল AI-ৰ খাদ্য",
          paragraphs: [
            "জেনেক্টিভ AI মডেলবোৰক শিকিবলৈ প্ৰচুৰ পৰিমাণৰ টেক্সট, কোড আৰু ছবিৰ প্ৰয়োজন হয়। কোম্পানীবোৰে ৱেবছাইট স্ক্ৰেপ কৰি, ব্যৱহাৰকাৰীৰ আপলোড আৰু পাব্লিক ফাইলৰ পৰা এই তথ্য সংগ্ৰহ কৰে।",
            "ইয়াৰ অৰ্থ হ'ল আপুনি বনোৱা ছবি, লিখা ৰচনা বা পাব্লিক ছচিয়েল মিডিয়াৰ মন্তব্যবোৰো আপুনি গম নোপোৱাকৈ AI প্ৰশিক্ষণত ব্যৱহাৰ হ'ব পাৰে।"
          ]
        },
        {
          heading: "ডাটা গোপনীয়তা কেনেকৈ সুৰক্ষিত কৰিব",
          paragraphs: [
            "ডিজিটেল পদচিহ্ন নিয়ন্ত্ৰণ কৰিবলৈ, একাউণ্টত প্ৰাইভেচী ছেটিংছ ব্যৱহাৰ কৰক, ডাটা শ্বেয়াৰিং অপ্ট-আউট কৰক আৰু পাব্লিকলি কি আপলোড কৰিছে তাৰ প্ৰতি সচেতন হওক। এবাৰ ডাটা মডেলত সোমাই গ'লে তাক উলিয়াই অনাটো অতি কঠিন।"
          ]
        }
      ],
      keyTakeaways: [
        "ডিজিটেল পদচিহ্ন হ'ল ইণ্টাৰনেট ব্যৱহাৰ কৰোঁতে আপুনি ৰাখি থৈ যোৱা ডাটা।",
        "আজিকালি AI মডেলবোৰ ইণ্টাৰনেটৰ পৰা ডাটা সংগ্ৰহ বা স্ক্ৰেপ কৰি প্ৰস্তুত কৰা হয়।",
        "ব্যক্তিগত ডাটা সুৰক্ষিত কৰিবলৈ প্ৰাইভেচী ছেটিংছ নিয়ন্ত্ৰণ কৰাটো দৰকাৰী।"
      ],
      sources: [
        {
          title: "AI ট্ৰেনিং ডাটাৰ পৰা কেনেকৈ বাদ পৰিব",
          authorOrPublisher: "Electronic Frontier Foundation (EFF)",
          url: "https://www.eff.org/deeplinks/2023/08/how-to-opt-out-of-ai-training-data",
          type: "article"
        },
        {
          title: "AI কোম্পানীবোৰে কেনেকৈ গোটেই ইণ্টাৰনেট স্ক্ৰেপ কৰে",
          authorOrPublisher: "Vox (YouTube)",
          url: "https://www.youtube.com/watch?v=hM10yvPekvM",
          type: "video"
        }
      ],
      quiz: {
        question: "AI মডেলে আপোনাৰ ডিজিটেল পদচিহ্ন 'স্ক্ৰেপ' কৰাৰ অৰ্থ কি?",
        options: [
          "ই আপোনাৰ ইণ্টাৰনেটৰ পৰা সকলো ফাইল ডিলিট কৰি দিলে।",
          "ই আপুনি বনোৱা পাব্লিক লিখা, ফটো বা মন্তব্যবোৰ প্ৰশিক্ষণ ডাটা হিচাপে সংগ্ৰহ কৰিলে।",
          "ই আপোনাৰ ঘৰৰ কম্পিউটাৰটো হেক কৰিলে।",
          "ই আপোনাক বিল খন পঠিয়ালে।"
        ],
        answerIndex: 1,
        explanation: "AI স্ক্ৰেপিং মানে হ'ল ইণ্টাৰনেটত থকা পাব্লিক তথ্যবোৰ স্বয়ংক্ৰিয় সঁজুলিৰে সংগ্ৰহ কৰি ট্ৰেনিং ডাটাত ব্যৱহাৰ কৰা।"
      }
    },
    "str-01": {
      id: "str-01",
      title: "ডিপফেক ফৰেনছিক",
      subtitle: "কৃত্ৰিম মিডিয়া ধৰা পেলোৱা আৰু সত্যক সুৰক্ষিত কৰাৰ কৌশলসমূহ",
      readTime: "১২ মিনিট পঢ়ক",
      author: "ৰকিবুল আৰু AI-ৰ দ্বাৰা সংকলিত",
      publishedDate: "জুন ২০২৬",
      introduction: "জেনেক্টিভ ভিডিঅ' মডেলবোৰ যিমানেই উন্নত হৈছে, সিমানেই সঁচা যেন লগা ভুৱা ভিডিঅ' বনাব পৰা গৈছে। ইয়াক ডিপফেক (Deepfake) বোলা হয়। ডিপফেক ধৰা পেলোৱাটো সত্য নিৰূপণৰ বাবে এক অতি প্ৰয়োজনীয় দক্ষতা।",
      sections: [
        {
          heading: "ডিপফেক কেনেকৈ বনোৱা হয়",
          paragraphs: [
            "ডিপফেক সাধাৰণতে Generative Adversarial Networks (GANs) বা ডিফিউজন মডেল ব্যৱহাৰ কৰি বনোৱা হয়। এটা মডেলে কৃত্ৰিম মুখমণ্ডল সৃষ্টি কৰে আৰু আনটোৱে তাক সঁচা ফটোৰ সৈতে পৰীক্ষা কৰি সংশোধন কৰি থাকে, যেতিয়ালৈকে ই দেখাত একেবাৰে সঁচা যেন নালাগে।"
          ]
        },
        {
          heading: "ধৰা পেলোৱাৰ ফৰেনছিক কৌশল",
          paragraphs: [
            "ফৰেনছিক বিশেষজ্ঞসকলে শাৰীৰিক অসঙ্গতিবোৰ চায়। মানুহে স্বাভাৱিকতে প্ৰতি ২ ৰ পৰা ৮ ছেকেণ্ডৰ মূৰে মূৰে চকু জপিয়ায়; প্ৰথম পৰ্যায়ৰ ডিপফেকবোৰে চকু জপিওৱা নাছিল। মুখৰ কাষৰ অংশবোৰ মন কৰক (কাণ আৰু থুতৰিৰ ওচৰত অস্পষ্টতা আছে নেকি?) আৰু অডিঅ'টো মুখৰ লৰচৰৰ সৈতে মিলিছেনে পৰীক্ষা কৰক।",
            "পেছাদাৰী স্তৰত আমি মিডিয়াৰ সত্যতা প্ৰমাণ কৰিবলৈ মেটাডাটা বিশ্লেষণ আৰু ক্ৰিপ্টোগ্ৰাফিক ভেৰিফিকেচন (ডিজিটেল ৱাটাৰমাৰ্ক) ব্যৱহাৰ কৰোঁ।"
          ]
        }
      ],
      keyTakeaways: [
        "ডিপফেক হ'ল মেচিন লাৰ্নিং মডেলৰ সহায়ত নিৰ্মিত ভুৱা ভিডিঅ' বা অডিঅ।",
        "ডিপফেক ধৰা পেলাবলৈ চকু জপিওৱা, অডিঅ' আৰু মুখৰ মিল, আৰু থুতৰিৰ ওচৰৰ অসঙ্গতি চাব লাগে।",
        "মিডিয়াৰ উৎস নিশ্চিত কৰিবলৈ ক্ৰিপ্টোগ্ৰাফিক স্বাক্ষৰ কৰা পদ্ধতি এতিয়া ব্যৱহাৰ কৰা হৈছে।"
      ],
      sources: [
        {
          title: "ডিপফেক ডিটেকচন প্ৰত্যাহ্বান",
          authorOrPublisher: "Meta AI",
          url: "https://deepfakedetectionchallenge.ai/",
          type: "article"
        },
        {
          title: "ডিপফেক ধৰা পেলোৱা: এক ফৰেনছিক বিশ্লেষণ",
          authorOrPublisher: "IEEE Spectrum",
          url: "https://spectrum.ieee.org/deepfake-detection",
          type: "article"
        }
      ],
      quiz: {
        question: "ডিপফেক ভিডিঅ' বিশ্লেষণ কৰোঁতে সাধাৰণতে কি শাৰীৰিক অসঙ্গতি দেখা যায়?",
        options: [
          "ভিডিঅ' ফাইলৰ চাইজ বহুত সৰু হয়।",
          "মুখৰ লৰচৰ আৰু মাতৰ মাজত অমিল, অথবা থুতৰিৰ ওচৰত অস্পষ্ট দাগ থকা।",
          "মানুহজনে চশমা পিন্ধি আছে।",
          "ভিডিঅ'টো কেৱল ফাষ্ট ফৰৱাৰ্ডহে হয়।"
        ],
        answerIndex: 1,
        explanation: "জেনেক্টিভ মডেলবোৰে ওঁঠৰ লৰচৰৰ সৈতে মাতৰ তাল মিলাবলৈ অসুবিধা পায় আৰু মুখৰ কাষৰ অংশবোৰত কিছুমান অস্পষ্ট চিন এৰি থৈ যায়।"
      }
    },
    "str-02": {
      id: "str-02",
      title: "অৰ্থনৈতিক স্বয়ংক্ৰিয়কৰণ",
      subtitle: "কৰ্মক্ষেত্ৰত AI-ৰ প্ৰভাৱ আৰু কেৰিয়াৰৰ প্ৰস্তুতিৰ বিশ্লেষণ",
      readTime: "১০ মিনিট পঢ়ক",
      author: "ৰকিবুল আৰু AI-ৰ দ্বাৰা সংকলিত",
      publishedDate: "জুন ২০২৬",
      introduction: "AI-য়ে কেৱল মানুহৰ ঠাই নলয়; বৰঞ্চ ই প্ৰতিটো কাম কৰাৰ পদ্ধতি সলনি কৰিব। ডাক্তৰৰ পৰা উকীললৈ, আৰু প্ৰগ্ৰেমাৰৰ পৰা লেখকিলৈকে, যিসকলে AI ব্যৱহাৰ কৰিব জানে তেওঁলোকে আনতকৈ অধিক দ্ৰুত আৰু কাৰ্যক্ষমভাৱে কাম কৰিব পাৰিব।",
      sections: [
        {
          heading: "কামৰ পৰিৱৰ্তন বনাম চাকৰি হেৰুওৱা",
          paragraphs: [
            "একটা চাকৰিত বহুত কাম থাকে। AI-য়ে সাধাৰণতে গোটেই চাকৰিটো নাইকীয়া নকৰে, ই কেৱল কিছুমান কামহে কৰে। উদাহৰণস্বৰূপ, ডাক্তৰ এজনৰ চাকৰি নাইকীয়া নহয়, কিন্তু এক্স-ৰে পৰীক্ষা কৰা কামটো AI-য়ে কৰিব পাৰিব, যাৰ ফলত ডাক্তৰজনে ৰোগীৰ সৈতে কথা পাতিবলৈ বাবে বেছি সময় পাব।"
          ]
        },
        {
          heading: "ভৱিষ্যতৰ বাবে কেৰিয়াৰ প্ৰস্তুত কৰা",
          paragraphs: [
            "ভৱিষ্যতৰ বাবে সাজু হ'বলৈ কম্পিউটাৰে কৰিব নোৱাৰা দক্ষতাবোৰ বিকাশ কৰক: যেনে গভীৰ চিন্তন (critical thinking), আৱেগিক বুদ্ধিমত্তা (emotional intelligence), জটিল সমস্যা সমাধান আৰু সৃষ্টিশীলতা। AI ক সঁজুলি হিচাপে ব্যৱহাৰ কৰিব জনাটোৱেই হ'ল কেৰিয়াৰ সুৰক্ষিত কৰাৰ উত্তম উপায়।"
          ]
        }
      ],
      keyTakeaways: [
        "স্বয়ংক্ৰিয়কৰণে চাকৰি সম্পূৰ্ণৰূপে শেষ কৰাৰ পৰিৱৰ্তে কামৰ ধৰণহে সলনি কৰে।",
        "AI-য়ে মানুহৰ বুদ্ধিমত্তাক সহায় কৰে, যাৰ ফলত এজন শ্ৰমিকৰ উৎপাদনশীলতা বৃদ্ধি পায়।",
        "সহানুভূতি, জটিল সমস্যাৰ বিশ্লেষণ আৰু সঁজুলিৰ ব্যৱহাৰ সম্পৰ্কীয় দক্ষতাবোৰ ভৱিষ্যতেও সুৰক্ষিত হৈ থাকিব।"
      ],
      sources: [
        {
          title: "মেশিনৰ উত্থান - কিয় এইবাৰৰ স্বয়ংক্ৰিয়কৰণ পৃথক",
          authorOrPublisher: "Kurzgesagt (YouTube)",
          url: "https://www.youtube.com/watch?v=yqgY8dO4s8M",
          type: "video"
        },
        {
          title: "ভৱিষ্যতৰ চাকৰিৰ প্ৰতিবেদন ২০২৩",
          authorOrPublisher: "World Economic Forum (বিশ্ব অৰ্থনৈতিক মঞ্চ)",
          url: "https://www.weforum.org/publications/the-future-of-jobs-report-2023/",
          type: "article"
        }
      ],
      quiz: {
        question: "ভৱিষ্যতে কোনটো দক্ষতা স্বয়ংক্ৰিয়কৰণৰ দ্বাৰা প্ৰভাৱিত নোহোৱাকৈ সুৰক্ষিত হৈ থাকিব?",
        options: [
          "সাধাৰণ ডাটা এণ্ট্ৰি আৰু সহজ লিখনী প্ৰস্তুত কৰা।",
          "সহানুভূতি, জটিল আলোচনা কৰা আৰু নৈতিক চিন্তন।",
          "একটা ভাষাৰ পৰা আন এটা ভাষালৈ কৰা অনুবাদ।",
          "সাধাৰণ ডাটাবেচৰ কাম।"
        ],
        answerIndex: 1,
        explanation: "কম্পিউটাৰে মানুহৰ আৱেগ বুজি পোৱা, সহানুভূতিশীল হোৱা আৰু নৈতিক সিদ্ধান্ত লোৱাত অসুবিধা পায়, সেয়েহে এই মানৱীয় দক্ষতাবোৰ সদায় সুৰক্ষিত।"
      }
    },
    "exp-03": {
      id: "str-03", // Corrected id mapping mismatch key
      title: "AI নীতি আৰু নৈতিকতা",
      subtitle: "বুদ্ধিমান মেচিনৰ নিয়ন্ত্ৰণ আৰু বিকাশকারোৰ দায়িত্ব নিৰ্ধাৰণ",
      readTime: "১১ মিনিট পঢ়ক",
      author: "ৰকিবুল আৰু AI-ৰ দ্বাৰা সংকলিত",
      publishedDate: "জুন ২০২৬",
      introduction: "যেতিয়া এখন স্বয়ংক্ৰিয় গাড়ী দুৰ্ঘটনাত পতিত হয়, তাৰ বাবে কোন দায়ী হ'ব? চালকজন? প্ৰগ্ৰেমাৰজন? নে গাড়ী কোম্পানীটো? যিহেতু AI-য়ে মানুহৰ জীৱনৰ গুৰুত্বপূৰ্ণ সিদ্ধান্তবোৰ ল'বলৈ আৰম্ভ কৰিছে, সেয়েহে ইয়াৰ বাবে নৈতিক নিয়ম আৰু নীতি প্ৰস্তুত কৰাটো অতি প্ৰয়োজনীয় হৈ পৰিছে।",
      sections: [
        {
          heading: "AI নৈতিকতাৰ মূল প্ৰত্যাহ্বানসমূহ",
          paragraphs: [
            " must establish rules for transparency (understanding why a model made a decision), accountability (who is responsible for errors), and safety (preventing systems from causing harm).",
            "Without policy, systems can be deployed that violate privacy rights or generate dangerous content without consequences."
          ]
        },
        {
          heading: "বিশ্বৰ AI নীতি ফ্ৰেমৱৰ্ক",
          paragraphs: [
            "বিভিন্ন চৰকাৰে ইয়াৰ বাবে আইন প্ৰণয়ন কৰিছে যেনে EU AI Act। ইয়াৰ অধীনত AI ব্যৱস্থাবোৰক বিপদৰ বাবে শ্ৰেণীভুক্ত কৰা হৈছে। অতি বিপজ্জনক বুলি বিবেচিত হোৱা চিপ বা ছফ্টৱেৰবোৰ ব্যৱহাৰ কৰাৰ আগতে কঠোৰ সুৰক্ষা পৰীক্ষা কৰাটো বাধ্যতামূলক কৰা হৈছে।"
          ]
        }
      ],
      keyTakeaways: [
        "AI নৈতিকতাই প্ৰযুক্তি নিৰ্মাতাৰ নৈতিক দায়িত্ব আৰু ইয়াৰ সামাজিক প্ৰভাৱৰ বিষয়বোৰ চালি-জাৰি চায়।",
        "স্বচ্ছতা আৰু দায়বদ্ধতা হ'ল বিশ্বাসযোগ্য AI ব্যৱহাৰৰ মূল ভেটি।",
        "আজিকালি চৰকাৰসমূহে বিপদৰ সম্ভাৱনা চাই নিয়মসমূহ প্ৰয়োগ কৰাৰ নীতি লৈছে।"
      ],
      sources: [
        {
          title: "ইউৰোপীয় ইউনিয়নৰ AI আইন পোৰ্টেল",
          authorOrPublisher: "European Union",
          url: "https://www.artificialintelligenceact.eu/",
          type: "article"
        },
        {
          title: "AI নৈতিকতা আৰু শাসন প্ৰণালী",
          authorOrPublisher: "Harvard Berkman Klein Center",
          url: "https://cyber.harvard.edu/topics/artificial-intelligence",
          type: "article"
        }
      ],
      quiz: {
        question: "ইউৰোপীয় ইউনিয়নৰ EU AI Act দৰে আধুনিক নিয়ন্ত্ৰণ নীতিৰ মূল উদ্দেশ্য কি?",
        options: [
          "AI সম্পৰ্কীয় সকলো গৱেষণা নিষিদ্ধ কৰা।",
          "AI এপ্লিকেচনবোৰক বিপদৰ মাত্ৰা চাই ভাগ কৰা আৰু বিপজ্জনক ব্যৱস্থাবোৰৰ বাবে কঠোৰ সুৰক্ষা পৰীক্ষা কৰা।",
          "AI ছফ্টৱেৰবোৰ সকলোৰে বাবে বিনামূলীয়া কৰা।",
          "কম্পিউটাৰবোৰক টেক্স দিবলৈ বাধ্য কৰা।"
        ],
        answerIndex: 1,
        explanation: "আধুনিক AI নীতিৰ উদ্দেশ্য হ'ল ইয়াৰ ব্যৱহাৰ সুৰক্ষিত কৰা। ইয়াৰ বাবে ব্যৱস্থাবোৰক ভাগ কৰি সুৰক্ষা নিশ্চিত কৰা হয়।"
      }
    }
  }
};

// Fix the ID mapping key for str-03 in the Assamese dictionary
lessonsDetails.as["str-03"] = lessonsDetails.as["exp-03"]; // Remap
delete lessonsDetails.as["exp-03"];
// Restore original exp-03
lessonsDetails.as["exp-03"] = {
  id: "exp-03",
  title: "মৌলিক লজিক গেট",
  subtitle: "যন্ত্ৰৰ চিন্তা কৰাৰ মূল উপাদানসমূহ",
  readTime: "৮ মিনিট পঢ়ক",
  author: "ৰকিবুল আৰু AI-ৰ দ্বাৰা সংকলিত",
  publishedDate: "জুন ২০২৬",
  introduction: "প্ৰতিটো স্মাৰ্ট সঁজুলি, চুপাৰ কম্পিউটাৰ আৰু AI মডেলৰ একেবাৰে কেন্দ্ৰবিন্দুত এটা সৰল ধাৰণা থাকে: লজিক বা যুক্তি। লজিক গেট হৈছে কম্পিউটাৰ চিপৰ ভিতৰত থকা সৰু সৰু সিদ্ধান্ত গ্ৰহণকাৰী সঁজুলি। ইহঁতে বৈদুতিক সংকেত গ্ৰহণ কৰে আৰু সৰল নিয়মৰ আধাৰত সিদ্ধান্ত লয়।",
  sections: [
    {
      heading: "IF আৰু THEN ৰ নিয়মসমূহ",
      paragraphs: [
        "কম্পিউটাৰে বাইনাৰী ভাষা বুজি পায়—য'ত সকলো বস্তু হয় 'True' (১) নহয় 'False' (০)। আমি এই ইনপুটবোৰ মিলাই সিদ্ধান্ত লওঁ।",
        "এটা AND গেটে কেৱল তেতিয়াহে True আউটপুট দিয়ে যেতিয়া সকলো ইনপুট True হয়। ধৰি লওক: IF আপোনাৰ হাতত চাবি আছে AND চাবিটো ঘূৰাইছে, THEN গাড়ীখন ষ্টাৰ্ট হ'ব।",
        "আৰু এটা OR গেটে True আউটপুট দিয়ে যদি কমেও এটা ইনপুট True হয়: IF বৰষুণ দিছে OR আপুনি ফুলনিৰ পাইপডাল খুলি দিছে, THEN ঘাঁহখিনি তিতি যাব।"
      ]
    },
    {
      heading: "সৰল নিয়মৰ পৰা ডাঙৰ মগজুলৈ",
      paragraphs: [
        "এনেকুৱা লাখ লাখ লজিক গেট একেলগে মিলাই আমি কম্পিউটাৰ চিপবোৰ সাজোঁ। AI মডেলে প্ৰতি ছেকেণ্ডত লাখ লাখ গাণিতিক লজিক খোজ ব্যৱহাৰ কৰি আপোনাৰ পৰৱৰ্তী শব্দটো অনুমান কৰে বা ভাষা অনুবাদ কৰে।",
        "AI যিমানেই স্মাৰ্ট যেন নালাগক কিয়, ই কেৱল লাখ লাখ সৰু ছুইচৰ দ্বাৰা কৰা True/False পৰীক্ষাহে।"
      ]
    }
  ],
  keyTakeaways: [
    "কম্পিউটাৰে সম্পূৰ্ণৰূপে বাইনাৰী লজিক: ১ (True) আৰু ০ (False) ব্যৱহাৰ কৰে।",
    "লজিক গেট (যেনে AND, OR, NOT) হ'ল হাৰ্ডৱেৰৰ মূল সঁজুলি যিবোৰে হিচাপ-নিকাচ কৰে।",
    "AI মডেলবোৰ এনেকুৱা লাখ লাখ লজিক সিদ্ধান্তৰ ওপৰতে নিৰ্মাণ কৰা হয়।"
  ],
  sources: [
    {
      title: "লজিক গেট কেনেকৈ কাম কৰে",
      authorOrPublisher: "Computerphile (YouTube)",
      url: "https://www.youtube.com/watch?v=gI-qXk7XojA",
      type: "video"
    },
    {
      title: "ডিজিটেল ইলেক্ট্ৰনিক্সত লজিক গেট",
      authorOrPublisher: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/logic-gates-in-digital-electronics/",
      type: "article"
    }
  ],
  quiz: {
    question: "যদি এটা স্বয়ংক্ৰিয় দুৱাৰ কেৱল তেতিয়াহে খোল খায় যেতিয়া কোনোবা মানুহ সন্মুখত থিয় হয় AND সুৰক্ষা ক'ডটো শুদ্ধ হয়, তেন্তে তাত কোনটো লজিক গেট ব্যৱহাৰ হৈছে?",
    options: [
      "OR গেট",
      "NOT গেট",
      "AND গেট",
      "XOR গেট"
    ],
    answerIndex: 2,
    explanation: "যিহেতু দুয়োটা চৰ্ত পুৰণ হ'm লাগিব (মানুহ থকা AND ক'ড শুদ্ধ হোৱা) দুৱাৰখন খোল খাবলৈ, সেয়েহে ইয়াত AND গেট ব্যৱহাৰ কৰা হৈছে।"
  }
};

// ==========================================
// APPEND NEW LESSONS: TRADITIONAL VS AI PARADIGM
// ==========================================

// --- English Track 4 Lessons ---
lessonsDetails.en["exp-04"] = {
  id: "exp-04",
  title: "The Memory Helper",
  subtitle: "Why smart questioning beats memorizing facts",
  readTime: "5 min read",
  author: "Curated by Rakibul with AI",
  publishedDate: "June 2026",
  introduction: "Computers are excellent at remembering. A single tiny microchip can store thousands of libraries. This means humans no longer need to spend hours memorizing lists of dates and facts. Instead, we can use AI as a memory helper.",
  sections: [
    {
      heading: "From Memorizing to Questioning",
      paragraphs: [
        "In the past, learning meant memorizing capitals, formulas, and spelling lists. Today, you can ask an AI model for any factual information in seconds. The real skill is knowing what questions to ask to extract accurate info.",
        "When you learn how to query systems, you switch from being a passive recorder of information to an active investigator. This is the foundation of scientific inquiry."
      ]
    },
    {
      heading: "Freeing Up Your Brain",
      paragraphs: [
        "When you let computers hold the facts, your brain has more energy to do what humans do best: solve puzzles, design things, and create stories. This is called 'cognitive offloading'—letting machines remember so you can think."
      ]
    }
  ],
  keyTakeaways: [
    "AI retrieves facts instantly, reducing the need for rote memorization.",
    "The modern learner focuses on asking smart questions and connecting ideas.",
    "Freeing your memory allows you to focus on logic, creativity, and problem-solving."
  ],
  sources: [
    {
      title: "Cognitive Offloading",
      authorOrPublisher: "Association for Psychological Science (APS)",
      url: "https://www.psychologicalscience.org/observer/cognitive-offloading",
      type: "article"
    }
  ],
  quiz: {
    question: "Why is asking smart questions more important than memorizing facts today?",
    options: [
      "Because facts are no longer true.",
      "Because AI can hold and retrieve facts instantly, allowing humans to focus on problem-solving.",
      "Because writing prompts is easier than reading.",
      "Because computers do not understand questions."
    ],
    answerIndex: 1,
    explanation: "Since computers are perfect at storing and retrieving information, humans can offload memorization and focus their energy on critical thinking and creative inquiry."
  }
};

lessonsDetails.en["cre-04"] = {
  id: "cre-04",
  title: "AI as a Co-Pilot, Not a Copycat",
  subtitle: "Using generative systems for explanation and synthesis instead of shortcuts",
  readTime: "8 min read",
  author: "Curated by Rakibul with AI",
  publishedDate: "June 2026",
  introduction: "When you get a school assignment, it is tempting to ask an AI to write the whole thing for you. But copy-pasting code or essays doesn't teach you anything. The best way to learn is to treat AI as a co-pilot that explains concepts.",
  sections: [
    {
      heading: "The Copycat Trap",
      paragraphs: [
        "If you just copy and paste AI responses, you are acting as a passive consumer. In the future, copy-paste tasks will be fully automated. To stay valuable, you must learn to synthesize, verify, and edit.",
        "Copying a model's answers bypasses the struggle of thinking, which is how the human brain grows new neural connections. If you don't think, you don't learn."
      ]
    },
    {
      heading: "AI as a Personal Tutor",
      paragraphs: [
        "Instead of asking 'write my essay,' ask 'explain how photosynthesis works using a cooking analogy.' Use AI to test you, find errors in your code, or brainstorm ideas. This is how you use AI to accelerate your actual understanding."
      ]
    }
  ],
  keyTakeaways: [
    "Copying AI outputs without understanding is a career dead-end.",
    "AI is most powerful when used to explain complex topics and brainstorm structures.",
    "Active editing and validation are the core skills of a modern creator."
  ],
  sources: [
    {
      title: "Assigning AI: Seven Approaches for Students",
      authorOrPublisher: "Prof. Ethan Mollick (Wharton School / YouTube)",
      url: "https://www.youtube.com/watch?v=tA_zeNen-7c",
      type: "video"
    },
    {
      title: "How AI Tutors Will Transform Education",
      authorOrPublisher: "Sal Khan (TED Talks)",
      url: "https://www.ted.com/talks/sal_khan_how_ai_could_save_not_destroy_education",
      type: "video"
    }
  ],
  quiz: {
    question: "Which of the following is the best way to use AI to improve your learning?",
    options: [
      "Asking the AI to write your entire history essay and submitting it directly.",
      "Asking the AI to explain a hard concept in three different ways and testing you on the material.",
      "Copying and pasting code without reading how it functions.",
      "Ignoring AI completely and using only paper encyclopedias."
    ],
    answerIndex: 1,
    explanation: "Using AI to break down complex topics and query your own understanding turns the model into an active learning partner, which builds real cognitive skills."
  }
};

lessonsDetails.en["str-04"] = {
  id: "str-04",
  title: "The Death of Rote Memorization",
  subtitle: "How the modern workforce values critical curation over standard recall",
  readTime: "10 min read",
  author: "Curated by Rakibul with AI",
  publishedDate: "June 2026",
  introduction: "For generations, school exams tested one primary skill: memory. The student who could memorize the textbook won. In the era of AI, this model is dead. Rote memorization is no longer valuable because access to information is instantaneous.",
  sections: [
    {
      heading: "From Recall to Curation",
      paragraphs: [
        "In the modern economy, knowing the answer is less important than knowing how to verify the answer. AI models frequently make mistakes or hallucinate. The value of a worker lies in their ability to act as an editor—critically analyzing, filtering, and cross-referencing AI outputs.",
        "The shift from creator to curator means you must develop deep domain expertise. If you do not know the subject, you cannot evaluate if the AI output is correct or hallucinated."
      ]
    },
    {
      heading: "Orchestrating Tools",
      paragraphs: [
        "Success today is about tool orchestration. A programmer doesn't need to memorize every syntax rule; they need to understand design architecture, direct AI generators, audit the resulting code, and stitch services together. We are moving from being creators of raw data to curators of systems."
      ]
    }
  ],
  keyTakeaways: [
    "Rote recall is a commoditized task; verification and auditing are premium skills.",
    "AI systems require human supervision to ensure truthfulness and safety.",
    "Curation, systems thinking, and prompt orchestration are the pillars of modern career security."
  ],
  sources: [
    {
      title: "The Future of Jobs Report",
      authorOrPublisher: "World Economic Forum",
      url: "https://www.weforum.org/publications/the-future-of-jobs-report-2023/",
      type: "article"
    },
    {
      title: "Academically Adrift: Limited Learning on College Campuses",
      authorOrPublisher: "Richard Arum (University of Chicago Press)",
      url: "https://press.uchicago.edu/ucp/books/book/chicago/A/bo10327448.html",
      type: "article"
    }
  ],
  quiz: {
    question: "Why does the modern AI-driven workforce value 'curation' over 'recall'?",
    options: [
      "Because human memory has become weaker over time.",
      "Because AI models can hallucinate, requiring human experts to verify, filter, and orchestrate the information.",
      "Because companies no longer require reports or code.",
      "Because public databases have been closed."
    ],
    answerIndex: 1,
    explanation: "Since AI can instantly generate drafts but is prone to hallucinations and bias, human value lies in auditing, verifying, and curating those outputs."
  }
};


// --- Assamese Track 4 Lessons ---
lessonsDetails.as["exp-04"] = {
  id: "exp-04",
  title: "স্মৃতি সহায়ক",
  subtitle: "তথ্যাবলী মুখস্থ কৰাতকৈ স্মাৰ্ট প্ৰশ্ন সোধাটো কিয় বেছি গুৰুত্বপূৰ্ণ",
  readTime: "৫ মিনিট পঢ়ক",
  author: "ৰকিবুল আৰু AI-ৰ দ্বাৰা সংকলিত",
  publishedDate: "জুন ২০২৬",
  introduction: "কম্পিউটাৰসমূহ তথ্য মনত ৰখাত অতি পাকৈত। এটা সৰু চিপতে হেজাৰ হেজাৰ কিতাপ সাঁচি ৰাখিব পাৰি। ইয়াৰ অৰ্থ হ'ল মানুহে এতিয়া তথ্য মনত ৰাখিবলৈ ঘণ্টাৰ পিছত ঘণ্টা সময় খৰচ কৰাৰ প্ৰয়োজন নাই। বৰঞ্চ আমি AI ক এক স্মৃতি সহায়ক হিচাপে ব্যৱহাৰ কৰিব পাৰোঁ।",
  sections: [
    {
      heading: "মুখস্থ কৰাৰ পৰা প্ৰশ্ন সোধালৈ",
      paragraphs: [
        "অতীতত শিকাৰ অৰ্থ আছিল তাৰিখ, ৰাজধানী চহৰ আৰু সূত্ৰসমূহ মুখস্থ কৰা। আজি আপুনি কেইছেকেণ্ডমানৰ ভিতৰতে যিকোনো তথ্য ইণ্টাৰনেট বা AI ৰ পৰা পাব পাৰে। গতিকে প্ৰকৃত দক্ষতা হ'ল সঠিক প্ৰশ্নটো সোধা জানিব পৰাটো।",
        "যেতিয়া আপুনি কম্পিউটাৰক প্ৰশ্ন কৰিবলৈ শিকে, তেতিয়া আপুনি এক নিষ্ক্ৰিয় গ্ৰাহক হোৱাৰ পৰা সক্ৰিয় গৱেষকলৈ ৰূপান্তৰিত হয়। ইয়েই হ’ল বৈজ্ঞানিক অনুসন্ধানৰ মূল ভেটি।"
      ]
    },
    {
      heading: "মগজুক মুক্ত কৰা",
      paragraphs: [
        "যেতিয়া আপুনি কম্পিউটাৰক তথ্য মনত ৰাখিবলৈ দিয়ে, তেতিয়া আপোনাৰ মগজুৱে জটিল সাঁথৰ সমাধান কৰা, নতুন বস্তু ডিজাইন কৰা আৰু সৃষ্টিশীল গল্প লিখাত অধিক শক্তি খৰচ কৰিব পাৰে। ইয়াক 'কগনিটিভ অফলোডিং' (cognitive offloading) বুলি কোৱা হয়—যন্ত্ৰক মনত ৰাখিবলৈ দি নিজে চিন্তা কৰা।"
      ]
    }
  ],
  keyTakeaways: [
    "AI ৰ সহায়ত তথ্য লগে লগে বিচাৰি পোৱা যায়, যাৰ ফলত মুখস্থ কৰাৰ প্ৰয়োজনীয়তা হ্ৰাস পাইছে।",
    "আধুনিক শিক্ষাৰ্থীয়ে স্মাৰ্ট প্ৰশ্ন কৰা আৰু নতুন ধাৰণাসমূহ সংযোগ কৰাত গুৰুত্ব দিয়ে।",
    "মগজুক তথ্যৰ বোজাৰ পৰা মুক্ত কৰিলে যুক্তি আৰু সৃষ্টিশীলতাত মনোযোগ দিবলৈ সহজ হয়।"
  ],
  sources: [
    {
      title: "কগনিটিভ অফলোডিং",
      authorOrPublisher: "Association for Psychological Science (APS)",
      url: "https://www.psychologicalscience.org/observer/cognitive-offloading",
      type: "article"
    }
  ],
  quiz: {
    question: "আজিকালি তথ্য মুখস্থ কৰাতকৈ স্মাৰ্ট প্ৰশ্ন সোধাটো কিয় বেছি গুৰুত্বপূৰ্ণ?",
    options: [
      "কাৰণ তথ্যসমূহ আৰু সঁচা হৈ থকা নাই।",
      "কাৰণ AI-য়ে তথ্য মনত ৰাখিব পাৰে, যাৰ ফলত মানুহে জটিল সমস্যা সমাধানত মনোযোগ দিব পাৰে।",
      "কাৰণ কোড লিখাটো পঢ়াতকৈ সহজ।",
      "কাৰণ কম্পিউটাৰে প্ৰশ্ন বুজি নাপায়।"
    ],
    answerIndex: 1,
    explanation: "যিহেতু কম্পিউটাৰ তথ্য সংগ্ৰহ কৰাত অতি পাকৈত, সেয়েহে মানুহে মুখস্থ কৰাৰ পৰিৱৰ্তে নিজৰ মগজুটোক সমালোচনামূলক চিন্তন আৰু সৃষ্টিশীল কামত ব্যৱহাৰ কৰিব পাৰে।"
  }
};

lessonsDetails.as["cre-04"] = {
  id: "cre-04",
  title: "AI এক সহ-চালক, নকলনবীচ নহয়",
  subtitle: "কপি-পেষ্ট কৰাৰ পৰিৱৰ্তে বিষয়সমূহ বুজিবলৈ AI ব্যৱহাৰ কৰা",
  readTime: "৮ মিনিট পঢ়ক",
  author: "ৰকিবুল আৰু AI-ৰ দ্বাৰা সংকলিত",
  publishedDate: "জুন ২০২৬",
  introduction: "যেতিয়া আপোনাক স্কুলৰ গৃহকৰ্ম দিয়া হয়, তেতিয়া গোটেই কামটো AI ক কৰিবলৈ দিয়াটো সহজ হ'ব পাৰে। কিন্তু কোড বা ৰচনাবোৰ কেৱল কপি-পেষ্ট কৰিলে আপুনি একো শিকিব নোৱাৰিব। শিকাৰ সৰ্বোত্তম উপায় হ'ল AI ক এক সহ-চালক (co-pilot) হিচাপে লোৱা।",
  sections: [
    {
      heading: "নকল কৰাৰ ফান্দ",
      paragraphs: [
        "যদি আপুনি কেৱল AI ৰ উত্তৰবোৰ কপি আৰু পেষ্ট কৰে, তেন্তে আপুনি কেৱল এজন নিষ্ক্ৰিয় গ্ৰাহক হৈ পৰিছে। ভৱিষ্যতে এনেধৰণৰ কপি-পেষ্ট কাম সম্পূৰ্ণ স্বয়ংক্ৰিয় হৈ পৰিব। গতিকে নিজৰ মূল্য ধৰি ৰাখিবলৈ আপুনি তথ্য বিশ্লেষণ আৰু সংশোধন কৰিব শিকিব লাগিব।",
        "মডেলৰ উত্তৰসমূহ পোনপটীয়াকৈ নকল কৰিলে মগজুৰ চিন্তা কৰাৰ ক্ষমতা হ্ৰাস পায়। চিন্তন প্ৰক্ৰিয়া নহ’লে আমাৰ শিক্ষণ আধৰুৱা হৈ ৰয়।"
      ]
    },
    {
      heading: "AI এক ব্যক্তিগত শিক্ষক হিচাপে",
      paragraphs: [
        "'মোৰ ৰচনাখন লিখি দিয়া' বুলি কোৱাৰ পৰিৱৰ্তে কওক 'ৰান্ধনীশালৰ উদাহৰণেৰে সালোক-সংশ্লেষণ প্ৰক্ৰিয়াটো বুজাই দিয়া।' AI ক আপোনাৰ পৰীক্ষা ল'বলৈ দিয়ক, কোডৰ ভুল বিচাৰিবলৈ কওক বা নতুন আইডিয়া উলিওৱাত সহায় লওক। এইদৰেই আপুনি নিজৰ শিকাৰ গতি ক্ষিপ্ৰ কৰিব পাৰে।"
      ]
    }
  ],
  keyTakeaways: [
    "বুজি নোলোৱাকৈ AI ৰ কথা কপি কৰিলে ভৱিষ্যতে অসুবিধা হ'ব।",
    "জটিল বিষয় বুজি পোৱা আৰু নতুন আইডিয়া উলিওৱাত AI অতি শক্তিশালী।",
    "সক্ৰিয় সংশোধন আৰু সত্যতা নিৰূপণ কৰাটোৱেই এজন সৃষ্টিকৰ্তাৰ ঘাই দক্ষতা।"
  ],
  sources: [
    {
      title: "শিক্ষাৰ্থীৰ বাবে AI ব্যৱহাৰৰ সাতটা উপায়",
      authorOrPublisher: "Prof. Ethan Mollick (Wharton School)",
      url: "https://www.youtube.com/watch?v=tA_zeNen-7c",
      type: "video"
    },
    {
      title: "AI শিক্ষকে কেনেকৈ শিক্ষণ ব্যৱস্থা সলনি কৰিব",
      authorOrPublisher: "Sal Khan (TED Talks)",
      url: "https://www.ted.com/talks/sal_khan_how_ai_could_save_not_destroy_education",
      type: "video"
    }
  ],
  quiz: {
    question: "শিকাত সহায় কৰিবলৈ AI ব্যৱহাৰ কৰাৰ সৰ্বোত্তম উপায় কোনটো?",
    options: [
      "ইতিহাসৰ ৰচনাখন সম্পূৰ্ণৰূপে AI ক লিখিবলৈ দি সেইখন পোনপটীয়াকৈ জমা দিয়া।",
      "একটা কঠিন ধাৰণা তিনিটা বেলেগ ধৰণে বুজাবলৈ ক্ৰমান্বয়ে সোধা আৰু নিজৰ বুজাবুজি পৰীক্ষা কৰা।",
      "কোডটো নপঢ়াকৈ কেৱল কপি-পেষ্ট কৰা।",
      "AI ক সম্পূৰ্ণ উপেক্ষা কৰা।"
    ],
    answerIndex: 1,
    explanation: "জটিল বিষয়বোৰ সৰল কৰিবলৈ AI ক সোধা আৰু নিজৰ জ্ঞান পৰীক্ষা কৰিলে ই শিকাৰ এক সক্ৰিয় অংশীদাৰ হৈ পৰে।"
  }
};

lessonsDetails.as["str-04"] = {
  id: "str-04",
  title: "যান্ত্ৰিক মুখস্থ বিদ্যাৰ অৱসান",
  subtitle: "আধুনিক কৰ্মক্ষেত্ৰত তথ্য মনত ৰখাতকৈ সত্যতা নিৰূপণ কৰাৰ গুৰুত্ব",
  readTime: "১০ মিনিট পঢ়ক",
  author: "ৰকিবুল আৰু AI-ৰ দ্বাৰা সংকলিত",
  publishedDate: "জুন ২০২৬",
  introduction: "যুগ যুগ ধৰি স্কুলৰ পৰীক্ষাবোৰত কেৱল এটা দক্ষতাকে পৰীক্ষা কৰা হৈছিল: স্মৃতি শক্তি। যিয়ে কিতাপখন মুখস্থ কৰিব পাৰিছিল, তেৱেই জিকিছিল। AI ৰ যুগত এই আৰ্হিটো শেষ হৈ গৈছে। তথ্যৰ পয়োভৰ থকা এই যুগত যান্ত্ৰিক মুখস্থ বিদ্যাৰ কোনো মূল্য নাই।",
  sections: [
    {
      heading: "স্মৃতিশক্তিৰ পৰা কিউৰেচনলৈ",
      paragraphs: [
        "আধুনিক অৰ্থনীতিত উত্তৰটো জনাটোতকৈ উত্তৰটো কেনেকৈ পৰীক্ষা কৰিব লাগে সেইয়া জনাটো বেছি গুৰুত্বপূৰ্ণ। AI মডেলে প্ৰায়ে ভুল কৰিব পাৰে বা কাল্পনিক তথ্য (hallucinate) দিব পাৰে। সেয়েহে এজন কৰ্মীৰ প্ৰকৃত মূল্য হ'ল এজন সম্পাদকৰ দৰে কাম কৰা—তথ্যসমূহ বিশ্লেষণ কৰা, চেক কৰা আৰু সঠিকতা নিৰূপণ কৰা।",
        "সৃষ্টিকৰ্তাৰ পৰা কিউৰেটৰলৈ ৰূপান্তৰিত হোৱাৰ অৰ্থ হ’ল আপুনি নিজৰ জ্ঞান গভীৰ কৰিব লাগিব। বিষয়টো নজনাকৈ আপুনি AI ৰ উত্তৰ সঠিক নে ভুল সেইয়া ধৰিব নোৱাৰিব।"
      ]
    },
    {
      heading: "সঁজুলিসমূহৰ নিয়ন্ত্ৰণ",
      paragraphs: [
        "আজিকালি সফলতা নিৰ্ভৰ কৰে বিভিন্ন সঁজুলি কেনেকৈ ব্যৱহাৰ কৰিব পাৰি তাৰ ওপৰত। এজন প্ৰগ্ৰেমাৰে কোডৰ প্ৰতিটো নিয়ম মুখস্থ কৰাৰ প্ৰয়োজন নাই; তেওঁলোকৰ প্ৰয়োজন ডিজাইন স্থপতি বুজি পোৱা, AI ক নিৰ্দেশ দিয়া আৰু হোৱা কোডটো পৰীক্ষা কৰা। আমি কেৱল ডেটা সৃষ্টিকৰ্তা হোৱাৰ পৰা ছিষ্টেম কিউৰেটৰলৈ গতি কৰিছোঁ।"
      ]
    }
  ],
  keyTakeaways: [
    "তথ্য মনত ৰখাটো এতিয়া মেচিনৰ কাম; সত্যতা পৰীক্ষা কৰাটো হ'ল মানুহৰ প্ৰধান দক্ষতা।",
    "AI ব্যৱস্থা সঠিক আৰু সুৰক্ষিত কৰি ৰাখিবলৈ মানুহৰ তদাৰকীৰ প্ৰয়োজন।",
    "সঁজুলিৰ সঠিক ব্যৱহাৰ আৰু বিশ্লেষণ কৰিব পৰা দক্ষতাই ভৱিষ্যতৰ চাকৰি সুৰক্ষিত কৰিব।"
  ],
  sources: [
    {
      title: "ভৱিষ্যতৰ চাকৰিৰ প্ৰতিবেদন ২০২৩",
      authorOrPublisher: "World Economic Forum",
      url: "https://www.weforum.org/publications/the-future-of-jobs-report-2023/",
      type: "article"
    },
    {
      title: "Academically Adrift: বিশ্ববিদ্যালয়সমূহত শিকাৰ সীমা",
      authorOrPublisher: "Richard Arum",
      url: "https://press.uchicago.edu/ucp/books/book/chicago/A/bo10327448.html",
      type: "article"
    }
  ],
  quiz: {
    question: "আধুনিক AI-চালিত কৰ্মক্ষেত্ৰত তথ্য মনত ৰখাতকৈ 'কিউৰেচন' বা সত্যতা নিৰূপণত কিয় বেছি গুৰুত্ব দিয়া হয়?",
    options: [
      "কাৰণ মানুহৰ স্মৃতিশক্তি দিনক দিনে দুৰ্বল হৈ আহিছে।",
      "কাৰণ AI মডেলে প্ৰায়ে ভুল তথ্য দিব পাৰে, যাৰ বাবে মানুহে সেইয়া পৰীক্ষা আৰু বিশ্লেষণ কৰাটো প্ৰয়োজনীয়।",
      "কাৰণ কোম্পানীবোৰক আৰু কোড বা ৰিপৰ্টৰ প্ৰয়োজন নাই।",
      "কাৰণ পাব্লিক ডাটাবেচসমূহ বন্ধ হৈ গৈছে।"
    ],
    answerIndex: 1,
    explanation: "যিহেতু AI-য়ে খচৰা তৈয়াৰ কৰিব পাৰে কিন্তু ই ভুল তথ্যও দিব পাৰে, সেয়েহে মানুহৰ গুৰুত্ব হ'ল সেই তথ্যসমূহ অডিট কৰা আৰু সত্যতা নিৰূপণ কৰা।"
  }
};

