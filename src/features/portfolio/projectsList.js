export const projectsList = [
  {
    name: "task-specific chatbot",
    description:
      "task-specific chatbot capable of handling audio input. It utilizes a pipeline involving audio preprocessing with tools like Whisper, speech-to-text conversion, text preprocessing, and semantic analysis with NLTK. Subsequently, the chatbot generates natural language responses using OpenAI, Hugging Face, GPT-3, and text-to-speech tools. This enables the chatbot to understand and respond to spoken instructions and questions, making it ideal for applications requiring natural language interaction through audio input.",
    techStack:
      "Python, Whisper, NLTK, OpenAI, Hugging Face, GPT-3, Text-to-Speech",
  },
  {
    name: "Medication Recommendations System",
    description:
      "The 'Medication Recommendations System' is a project aimed at providing personalized and reliable medication suggestions to patients and healthcare professionals. This system utilizes various input sources including medical history, symptoms, existing medications, and drug interactions to generate tailored recommendations. By leveraging data analysis and machine learning algorithms, the system can identify the most effective and safe medications for individual patients, potentially improving treatment outcomes and reducing adverse effects. This project has the potential to revolutionize medication management, empowering patients with informed decision-making and assisting healthcare professionals in delivering optimal care.",
    techStack: "Machine Learning, Data Analysis, Python",
  },
  {
    name: "Facial Recognition and Tracking System",
    description:
      "Facial Recognition and Tracking System using Python, Yolov5, resnet100, and FastApi. This system utilizes the powerful Yolov5 object detection framework with a resnet100 backbone for accurate face recognition. It's deployed using FastApi, enabling real-time facial detection and tracking within an API interface. This project demonstrates expertise in computer vision, deep learning, and application development, showcasing the potential for facial recognition in various applications like security, surveillance, and access control.",
    techStack:
      "Python, Yolov5, resnet100, FastApi, Computer Vision, Deep Learning",
  },
  {
    name: "Automating MS Word Editing with ChatGPT",
    description:
      "This project tackles the tedious task of manually editing MS Word documents by leveraging Python, ChatGPT API, LLM, and CSV files. It utilizes a CSV file containing user information like names, addresses, and personal details. The program then leverages the ChatGPT API to comprehend the information and seamlessly update the designated Word document with all user data, eliminating the need for manual entry. This automation streamlines the process, ensuring accuracy and saving valuable time.",
    techStack: "Python, ChatGPT API, LLM, CSV",
  },
  {
    name: "OpenSea Map creation",
    description:
      "The project focuses on extracting and analyzing data from OpenSea, a popular NFT marketplace. It involves data scraping through OpenSea's API, followed by data cleaning and transformation (ETL process). The analyzed data will then be used to create a map, visualizing various aspects of the NFT ecosystem, such as the geographical distribution of NFT creators and collectors. By leveraging MongoDB as the data storage solution, the project ensures efficient data retrieval and manipulation for further analysis and visualization. Overall, this project aims to provide valuable insights into the NFT landscape through data-driven analysis and interactive map creation.",
    techStack: "Python, OpenSea API, MongoDB, ETL",
  },
  {
    name: "Anomaly Detection Project: A Multifaceted Approach",
    description:
      "This project addresses several anomaly detection challenges, encompassing human body pose estimation, gesture recognition, fight detection, and weapon identification. It employs diverse techniques depending on the specific task...",
    techStack:
      "Movenet, MediaPipe, CNNs (efficientnet, densenet, VGG19), Yolov5, Video Scraping",
  },
  {
    name: "Grocery Product Information Detection",
    description:
      "Grocery Product Information detection is a project that aims to automatically extract relevant information from grocery products using a combination of technologies. It utilizes Optical Character Recognition (OCR) to extract text from images captured by a Canon camera connected to a Raspberry Pi. This text is then analyzed using YoloV5 for object detection, Regex for structured data extraction, and Natural Language Processing (NLP) for unstructured data extraction. This allows the project to gather information such as product name, brand, price, ingredients, and nutritional information, creating a comprehensive database of grocery products.",
    techStack: "OCR, YoloV5, Regex, NLP, Python, Raspberry Pi",
  },
];
