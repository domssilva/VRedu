const categories = [
  {
    id: 0,
    name: "introductory",
    description: "Are you new to VR? start here!",
    videos: [
      {
        id: "rVn3H93Ysag",
        title: "virtual reality in 1991",
        tag: "history",
      }, 
      {
        id: "_X_E_Kg9roE",
        title: "The story of virtual reality",
        tag: "history",
      },
      {
        id: "NCBEYaC876A",
        title: "How Lenses for Virtual Reality Headsets Work",
        tag: "howitworks",
      },
      {
        id: "T0taTtOgqd8",
        title: "Which Headset Should You Buy?",
        tag: "",
      }
    ],
  },
  {
    id: 1,
    name: "careers",
    description: "",
    videos: [
      {
        id: "-jF4K4w14Ak",
        title: "Careers for VR in the 2020s",
        tag: "",
      },
      {
        id: "4uiHO3XNcj4",
        title: "How to Get Into Unity VR Development",
        tag: "unity",
      },
      {
        id: "zYVUndP37kA",
        title: "Job Landscape in Virtual & Augmented Reality For 2020",
        tag: "",
      },
      {
        id: "NqswOcwJBFE",
        title: "How To Become A Virtual Reality Developer",
        tag: "",
      },
    ],
  },
  {
    id: 2,
    name: "maths & physics foundations",
    description: "",
    videos: [
      {
        id: "DPfxjQ6sqrc",
        title: "Essential Mathematics For Aspiring Game Developers",
        tag: "maths",
      },
      {
        id: "yg6h4XQqPNQ",
        title: "Math for Game Dev - An Improvised Live Course",
        tag: "maths",
      },
      {
        id: "GpsKrAipXm8",
        title: "Math for Game Programmers: Interaction With 3D Geometry",
        tag: "maths",
      },
      {
        id: "1r7vCzJUoiM",
        title: "Remote Math class for Game Devs",
        tag: "maths",
      },
      {
        id: "SHinxAhv1ZE",
        title: "Physics for Game Programmers: Understanding Constraints",
        tag: "maths",
      },
      {
        id: "7_nKOET6zwI",
        title: "Physics for Game Programmers; Continuous Collision",
        tag: "physics",
      },
    ],
  },
  {
    id: 3,
    name: "computer graphics",
    description: "",
    videos: [
      {
        id: "QyjyWUrHsFc",
        title: "A Brief History of Graphics",
        tag: "history",
      },
      {
        id: "A9HrXzD04xI",
        title: "How 3D Software Works",
        tag: "howitworks",
      },
      {
        id: "T-HXmQAMhG0",
        title: "Shaders 101 - Intro to Shaders",
        tag: "graphics",
      },
      {
        id: "cvcAjgMUPUA",
        title: "How Rendering Graphics Works in Games!",
        tag: "howitworks",
      },
      {
        id: "Z9pnmnckcFs",
        title: "What Is OpenGL? - WebGL, OpenGL ES, 3D Programming",
        tag: "graphics",
      },
      {
        id: "4gyP94hsC14",
        title: "Game Graphics Pipeline Explained",
        tag: "howitworks",
      },
      {
        id: "DtfEVO9Oc3U",
        title: "What is Rendering? | Rasterization, Ray Tracing, Radiosity",
        tag: "graphics",
      },
    ],
  },
  {
    id: 4,
    name: "software development",
    description: "",
    videos: [
      {
        id: "DKrdLKetBZE",
        title: "How Game Engines Work!",
        tag: "howitworks",
      },
      {
        id: "afodIcU_vK4",
        title: "Getting Started in VR",
        tag: "unreal",
      },
      {
        id: "rbqjQmP0aVs",
        title: "Installing & Building to Android (VR/AR/Mobile)",
        tag: "unreal",
      },
      {
        id: "z4hlBuPjgXI",
        title: "Learn Unity & XR Development for Beginners",
        tag: "unity",
      },
      {
        id: "RkGHadlkjZQ",
        title: "Unity VR for beginners",
        tag: "unity",
      },
      {
        id: "dAI4u2DmYbk",
        title: "How to make VR on the Web",
        tag: "unity",
      },
      {
        id: "vSia7t_WlbQ",
        title: "HAND TRACKING with the Oculus Quest",
        tag: "unity",
      },
    ],
  },
  {
    id: 5,
    name: "science, tech talks and interviews",
    description: "Collection of the science/technology that will enhance the VR experience",
    videos: [
      {
        id: "ulzOE5gfzk4",
        title: "The Future of Neural Interfaces - CTRL-Labs",
        tag: "immersion",
      },
      {
        id: "m-GV7qzhONk",
        title: "VR in 2021: 4Kx4K pixels per eye, 140 degree FOV",
        tag: "",
      },
      {
        id: "E0QLVj9FJ0A",
        title: "XR - The Future of VR, AR & MR in One Extended Reality",
        tag: "xr",
      },
      {
        id: "pJxZUqJqn6c",
        title: "Full Immersion Virtual Reality",
        tag: "immersion",
      },
      {
        id: "lhcr2VGtYpM",
        title: "Consciousness and Alternate Realities in a VR",
        tag: "science",
      },
    ],
  },
  {
    id: 6,
    name: "hardware",
    description: "",
    videos: [
      {
        id: "IYf-QAW27ao",
        title: "Dexmo Haptic Gloves",
        tag: "",
      },
      {
        id: "fvu5FxKuqdQ",
        title: "The Infinadeck Omnidirectional Treadmill",
        tag: "",
      },
      {
        id: "mSCxcqTHgzM",
        title: "Early Version AgileVR - VR exoskeleton",
        tag: "",
      },
    ],
  },
  {
    id: 7,
    name: "Art",
    description: "3D art used to build simulations/game graphics",
    videos: [
      {
        id: "OVbIOHAI3iY",
        title: "6 key principles for 3D modeling",
        tag: "",
      },
      {
        id: "ouvf-4wciak",
        title: "3D MODELING CONCEPTS",
        tag: "",
      },
      {
        id: "cS_03N-e1h4",
        title: "3D Topology Explained",
        tag: "",
      },
      {
        id: "4vAqPaFv8QA",
        title: "Modeling For Animation",
        tag: "",
      },
    ],
  },
];

export default categories;
