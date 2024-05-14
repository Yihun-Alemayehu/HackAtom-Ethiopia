const questions = [
  {
    id: '1',
    questionText: 'What is the primary fuel used in most nuclear power plants?',
    description: 'Nuclear power plants primarily use a specific type of fuel to generate electricity. Understanding the primary fuel source is crucial for grasping the fundamental operation of nuclear power plants.',
    answerOptions: [
      { answerText: 'Uranium', isCorrect: true },
      { answerText: 'Coal', isCorrect: false },
      { answerText: 'Natural gas', isCorrect: false },
      { answerText: 'Solar energy', isCorrect: false }
    ]
  },
  {
    id: '2',
    questionText: 'Which of the following elements is commonly used as a moderator in nuclear reactors?',
    description: 'Moderators play a vital role in nuclear reactors by slowing down fast neutrons to speeds where they are more likely to cause further fission reactions. Identifying the commonly used moderator is essential for understanding reactor design and operation.',
    answerOptions: [
      { answerText: 'Carbon', isCorrect: false },
      { answerText: 'Lead', isCorrect: false },
      { answerText: 'Water', isCorrect: true },
      { answerText: 'Boron', isCorrect: false }
    ]
  },
  {
    id: '3',
    questionText: 'What is the purpose of control rods in a nuclear reactor?',
    description: 'Control rods are crucial safety mechanisms in nuclear reactors, regulating the rate of the nuclear reaction by absorbing excess neutrons. Understanding their function is essential for safe reactor operation.',
    answerOptions: [
      { answerText: 'To absorb excess neutrons', isCorrect: true },
      { answerText: 'To generate electricity', isCorrect: false },
      { answerText: 'To regulate temperature', isCorrect: false },
      { answerText: 'To shield against radiation', isCorrect: false }
    ]
  },
  {
    id: '4',
    questionText: 'Which nuclear reaction is primarily utilized in nuclear power plants?',
    description: 'Nuclear power plants rely on a specific type of nuclear reaction to generate heat, which is then converted into electricity. Understanding this primary reaction is essential for understanding the core process of nuclear power generation.',
    answerOptions: [
      { answerText: 'Nuclear fusion', isCorrect: false },
      { answerText: 'Nuclear fission', isCorrect: true },
      { answerText: 'Nuclear decay', isCorrect: false },
      { answerText: 'Nuclear transmutation', isCorrect: false }
    ]
  },
  {
    id: '5',
    questionText: 'What is the function of the coolant in a nuclear reactor?',
    description: 'Coolants play a crucial role in removing excess heat from nuclear reactors, preventing overheating and maintaining safe operating temperatures. Understanding the function of coolants is essential for reactor safety and efficiency.',
    answerOptions: [
      { answerText: 'To generate heat', isCorrect: false },
      { answerText: 'To absorb radiation', isCorrect: false },
      { answerText: 'To moderate neutrons', isCorrect: false },
      { answerText: 'To transfer heat away from the reactor core', isCorrect: true }
    ]
  },
  {
    id: '6',
    questionText: 'What is the main byproduct of nuclear fission reactions in power plants?',
    description: 'Nuclear fission reactions in power plants produce various byproducts, one of which is particularly significant due to its radioactive nature. Understanding this main byproduct is crucial for assessing the environmental and safety implications of nuclear power generation.',
    answerOptions: [
      { answerText: 'Carbon dioxide', isCorrect: false },
      { answerText: 'Water vapor', isCorrect: false },
      { answerText: 'Radioactive waste', isCorrect: true },
      { answerText: 'Oxygen', isCorrect: false }
    ]
  },
  {
    id: '7',
    questionText: 'Which type of nuclear reactor does not require water as a coolant?',
    description: 'Water is commonly used as a coolant in many nuclear reactor designs, but not all reactors rely on water for cooling. Understanding the different coolant options is essential for comprehending the diversity of nuclear reactor technologies.',
    answerOptions: [
      { answerText: 'Pressurized Water Reactor (PWR)', isCorrect: false },
      { answerText: 'Boiling Water Reactor (BWR)', isCorrect: false },
      { answerText: 'Gas-cooled Reactor (AGR)', isCorrect: true },
      { answerText: 'Liquid Metal-cooled Fast Breeder Reactor (LMFBR)', isCorrect: false }
    ]
  },
  {
    id: '8',
    questionText: 'What is the purpose of the containment building in a nuclear power plant?',
    description: 'Containment buildings are critical safety features of nuclear power plants, providing a physical barrier against the release of radioactive materials in the event of an accident. Understanding their purpose is crucial for assessing reactor safety measures.',
    answerOptions: [
      { answerText: 'To house the reactor core', isCorrect: false },
      { answerText: 'To store spent nuclear fuel', isCorrect: false },
      { answerText: 'To shield against radiation release', isCorrect: true },
      { answerText: 'To house control room personnel', isCorrect: false }
    ]
  },
  {
    id: '9',
    questionText: 'Which of the following isotopes of uranium is most commonly used in nuclear reactors?',
    description: 'Different isotopes of uranium have varying properties, but one isotope is particularly well-suited for nuclear power generation due to its ability to sustain a nuclear chain reaction. Understanding this key isotope is essential for understanding reactor fuel cycles.',
    answerOptions: [
      { answerText: 'Uranium-235', isCorrect: true },
      { answerText: 'Uranium-238', isCorrect: false },
      { answerText: 'Uranium-233', isCorrect: false },
      { answerText: 'Uranium-240', isCorrect: false }
    ]
  },
  {
    id: '10',
    questionText: 'What is the approximate percentage of global electricity produced by nuclear power plants?',
    description: 'Nuclear power is a significant contributor to global electricity generation, but its share relative to other sources varies by region and over time. Understanding the approximate contribution of nuclear power is crucial for assessing its importance in the global energy landscape.',
    answerOptions: [
      { answerText: 'Less than 5%', isCorrect: false },
      { answerText: 'Around 10%', isCorrect: true },
      { answerText: 'Approximately 20%', isCorrect: false },
      { answerText: 'Over 30%', isCorrect: false }
    ]
  },
  {
    id: '11',
    questionText: 'Which of the following is NOT a potential application of nuclear energy?',
    description: 'Nuclear energy has diverse potential applications beyond electricity generation, but not all proposed uses are currently feasible or practical. Understanding the limitations of nuclear energy applications is essential for informed decision-making.',
    answerOptions: [
      { answerText: 'Electricity generation', isCorrect: false },
      { answerText: 'Desalination of seawater', isCorrect: false },
      { answerText: 'Airplane propulsion', isCorrect: true },
      { answerText: 'Medical isotopes production', isCorrect: false }
    ]
  },
  {
    id: '12',
    questionText: 'What is the name of the process where two light atomic nuclei combine to form a heavier nucleus, releasing energy?',
    description: 'Nuclear fusion is a fundamental process that powers stars and holds potential for future energy generation on Earth. Understanding the basics of nuclear fusion is crucial for assessing its feasibility as a source of clean and abundant energy.',
    answerOptions: [
      { answerText: 'Nuclear fission', isCorrect: false },
      { answerText: 'Nuclear fusion', isCorrect: true },
      { answerText: 'Nuclear decay', isCorrect: false },
      { answerText: 'Nuclear transmutation', isCorrect: false }
    ]
  },
  {
    id: '13',
    questionText: 'Which country has the highest number of operational nuclear reactors?',
    description: 'The global distribution of nuclear power reactors varies by country, with some nations having a larger number of operational reactors than others. Understanding which country has the most reactors is essential for assessing global nuclear energy capacity.',
    answerOptions: [
      { answerText: 'United States', isCorrect: true },
      { answerText: 'Russia', isCorrect: false },
      { answerText: 'China', isCorrect: false },
      { answerText: 'France', isCorrect: false }
    ]
  },
  {
    id: '14',
    questionText: 'What is the purpose of the steam turbine in a nuclear power plant?',
    description: 'Steam turbines are key components of many power generation systems, including nuclear power plants. Understanding their role in converting thermal energy into mechanical energy is crucial for understanding the overall process of electricity generation.',
    answerOptions: [
      { answerText: 'To produce electricity', isCorrect: false },
      { answerText: 'To cool down the reactor core', isCorrect: false },
      { answerText: 'To convert kinetic energy into electrical energy', isCorrect: true },
      { answerText: 'To moderate neutron reactions', isCorrect: false }
    ]
  },
  {
    id: '15',
    questionText: 'Which of the following is NOT a safety feature of modern nuclear reactors?',
    description: 'Safety features are essential components of modern nuclear reactor designs, intended to prevent accidents and mitigate their consequences. Understanding the key safety features is crucial for assessing the overall safety of nuclear power plants.',
    answerOptions: [
      { answerText: 'Passive cooling systems', isCorrect: false },
      { answerText: 'Fail-safe mechanisms', isCorrect: false },
      { answerText: 'Emergency shutdown systems', isCorrect: false },
      { answerText: 'Open-air reactor cores', isCorrect: true }
    ]
  },
  {
    id: '16',
    questionText: 'What is the name of the process used to enrich uranium for use in nuclear reactors?',
    description: 'Enriching uranium is a critical step in preparing fuel for nuclear reactors, affecting the performance and characteristics of the reactor core. Understanding the enrichment process is essential for ensuring reactor fuel quality and efficiency.',
    answerOptions: [
      { answerText: 'Centrifugation', isCorrect: true },
      { answerText: 'Electrolysis', isCorrect: false },
      { answerText: 'Filtration', isCorrect: false },
      { answerText: 'Distillation', isCorrect: false }
    ]
  },
  {
    id: '17',
    questionText: 'Which of the following nuclear disasters occurred in 1986 in Ukraine?',
    description: 'Nuclear disasters have occurred at various times and places, each with its unique causes and consequences. Understanding the historical context of nuclear accidents is essential for assessing their impacts on society and the environment.',
    answerOptions: [
      { answerText: 'Chernobyl', isCorrect: true },
      { answerText: 'Three Mile Island', isCorrect: false },
      { answerText: 'Fukushima Daiichi', isCorrect: false },
      { answerText: 'Windscale', isCorrect: false }
    ]
  },
  {
    id: '18',
    questionText: 'What is the approximate half-life of Uranium-235?',
    description: 'Uranium-235 is a radioactive isotope with a characteristic half-life, which affects its decay rate and radiological properties. Understanding the half-life of Uranium-235 is essential for assessing its environmental and health impacts.',
    answerOptions: [
      { answerText: '4.5 billion years', isCorrect: false },
      { answerText: '700 million years', isCorrect: false },
      { answerText: '704 million years', isCorrect: true },
      { answerText: '24,000 years', isCorrect: false }
    ]
  },
  {
    id: '19',
    questionText: 'Which element is commonly used as a fuel in some types of nuclear reactors as an alternative to uranium?',
    description: 'Uranium is the most commonly used fuel in nuclear reactors, but alternative fuels exist that offer different advantages and challenges. Understanding alternative fuel options is essential for exploring the diversity of nuclear reactor technologies.',
    answerOptions: [
      { answerText: 'Thorium', isCorrect: true },
      { answerText: 'Plutonium', isCorrect: false },
      { answerText: 'Neptunium', isCorrect: false },
      { answerText: 'Americium', isCorrect: false }
    ]
  },
  {
    id: '20',
    questionText: 'What is the name of the process where a neutron collides with a nucleus, causing it to split and release more neutrons?',
    description: 'Nuclear fission is a fundamental process in nuclear reactors, driving the chain reaction that sustains power generation. Understanding the basics of nuclear fission is essential for comprehending reactor operation and safety.',
    answerOptions: [
      { answerText: 'Nuclear decay', isCorrect: false },
      { answerText: 'Nuclear transmutation', isCorrect: false },
      { answerText: 'Nuclear fission', isCorrect: true },
      { answerText: 'Nuclear fusion', isCorrect: false }
    ]
  },
  {
    id: '21',
    questionText: 'What is the main advantage of breeder reactors compared to traditional nuclear reactors?',
    description: 'Breeder reactors offer unique advantages and challenges compared to traditional nuclear reactor designs, influencing their potential role in future energy systems. Understanding the advantages of breeder reactors is essential for evaluating their feasibility and impact.',
    answerOptions: [
      { answerText: 'Breeder reactors produce less radioactive waste', isCorrect: false },
      { answerText: 'Breeder reactors are cheaper to build', isCorrect: false },
      { answerText: 'Breeder reactors do not require coolant', isCorrect: false },
      { answerText: 'Breeder reactors can produce more fuel than they consume', isCorrect: true }
    ]
  },
  {
    id: '22',
    questionText: 'Which of the following is a potential environmental concern associated with nuclear power plants?',
    description: 'Nuclear power plants, like all industrial facilities, have potential environmental impacts that must be carefully managed and mitigated. Understanding these environmental concerns is essential for evaluating the overall sustainability of nuclear energy.',
    answerOptions: [
      { answerText: 'Air pollution', isCorrect: false },
      { answerText: 'Acid rain', isCorrect: false },
      { answerText: 'Greenhouse gas emissions', isCorrect: false },
      { answerText: 'Radioactive contamination', isCorrect: true }
    ]
  },
  {
    id: '23',
    questionText: 'What is the name of the process used to extract uranium from its ore?',
    description: 'Uranium extraction is a critical step in the nuclear fuel cycle, affecting the availability and purity of uranium for reactor use. Understanding the extraction process is essential for evaluating the environmental and social impacts of uranium mining.',
    answerOptions: [
      { answerText: 'Smelting', isCorrect: false },
      { answerText: 'Leaching', isCorrect: true },
      { answerText: 'Distillation', isCorrect: false },
      { answerText: 'Crystallization', isCorrect: false }
    ]
  },
  {
    id: '24',
    questionText: 'Which type of nuclear reactor uses liquid sodium as a coolant?',
    description: 'Coolant selection is a key design consideration for nuclear reactors, with different coolants offering unique advantages and challenges. Understanding the use of liquid sodium as a coolant is essential for evaluating the characteristics of sodium-cooled reactor designs.',
    answerOptions: [
      { answerText: 'Pressurized Water Reactor (PWR)', isCorrect: false },
      { answerText: 'Boiling Water Reactor (BWR)', isCorrect: false },
      { answerText: 'High-Temperature Gas-Cooled Reactor (HTGR)', isCorrect: false },
      { answerText: 'Liquid Metal-cooled Fast Breeder Reactor (LMFBR)', isCorrect: true }
    ]
  },
  {
    id: '25',
    questionText: 'What is the main advantage of nuclear energy compared to renewable energy sources like wind and solar?',
    description: 'Nuclear energy is one of several low-carbon energy sources available to mitigate climate change and meet growing energy demand. Understanding the advantages of nuclear energy compared to renewables is essential for evaluating its role in future energy systems.',
    answerOptions: [
      { answerText: 'Nuclear energy produces fewer greenhouse gas emissions', isCorrect: true },
      { answerText: 'Nuclear energy is cheaper to generate', isCorrect: false },
      { answerText: 'Nuclear energy is more scalable', isCorrect: false },
      { answerText: 'Nuclear energy is more readily available', isCorrect: false }
    ]
  },
  {
    id: '26',
    questionText: 'Which of the following is NOT a type of radiation emitted by radioactive materials?',
    description: 'Radioactive materials emit various types of radiation, each with its unique properties and effects on living organisms. Understanding the different types of radiation is essential for assessing radiation exposure risks and implementing appropriate safety measures.',
    answerOptions: [
      { answerText: 'Alpha particles', isCorrect: false },
      { answerText: 'Beta particles', isCorrect: false },
      { answerText: 'Gamma rays', isCorrect: false },
      { answerText: 'X-rays', isCorrect: true }
    ]
  },
  {
    id: '27',
    questionText: 'Which organization is responsible for regulating nuclear energy in the United States?',
    description: 'Nuclear energy is subject to stringent regulatory oversight to ensure safety, security, and environmental protection. Understanding the role of regulatory agencies is essential for evaluating the overall safety and reliability of nuclear power plants.',
    answerOptions: [
      { answerText: 'Environmental Protection Agency (EPA)', isCorrect: false },
      { answerText: 'Nuclear Regulatory Commission (NRC)', isCorrect: true },
      { answerText: 'Department of Energy (DOE)', isCorrect: false },
      { answerText: 'Federal Emergency Management Agency (FEMA)', isCorrect: false }
    ]
  },
  {
    id: '28',
    questionText: 'What is the name of the process used to convert uranium oxide into uranium hexafluoride for enrichment?',
    description: 'Uranium enrichment is a critical step in nuclear fuel preparation, affecting reactor performance and fuel cycle efficiency. Understanding the conversion process is essential for evaluating the environmental and safety implications of uranium enrichment facilities.',
    answerOptions: [
      { answerText: 'Conversion', isCorrect: false },
      { answerText: 'Isotopic separation', isCorrect: false },
      { answerText: 'Fluoridation', isCorrect: true },
      { answerText: 'Purification', isCorrect: false }
    ]
  },
  {
    id: '29',
    questionText: 'Which country was the first to use nuclear energy to generate electricity on a commercial scale?',
    description: 'The development of commercial nuclear power marked a significant milestone in the history of energy production, with several countries pioneering its use. Understanding the first country to achieve this milestone is essential for understanding the early history of nuclear energy.',
    answerOptions: [
      { answerText: 'United States', isCorrect: true },
      { answerText: 'United Kingdom', isCorrect: false },
      { answerText: 'France', isCorrect: false },
      { answerText: 'Soviet Union (Russia)', isCorrect: false }
    ]
  },
  {
    id: '30',
    questionText: 'What is the primary purpose of the containment dome in a nuclear power plant?',
    description: 'Containment structures are essential safety features of nuclear power plants, providing a physical barrier against the release of radioactive materials in the event of an accident. Understanding the purpose of containment domes is crucial for assessing reactor safety measures.',
    answerOptions: [
      { answerText: 'To house the reactor core', isCorrect: false },
      { answerText: 'To regulate coolant flow', isCorrect: false },
      { answerText: 'To provide structural support', isCorrect: false },
      { answerText: 'To prevent the release of radioactive materials', isCorrect: true }
    ]
  },
  {
    id: '31',
    questionText: 'What is the name of the phenomenon where a nuclear chain reaction becomes uncontrollable and releases a large amount of heat?',
    description: 'Nuclear meltdown is a catastrophic failure of a nuclear reactor, resulting in the uncontrolled release of large amounts of heat and radioactive material.',
    answerOptions: [
      { answerText: 'Nuclear decay', isCorrect: false },
      { answerText: 'Nuclear fusion', isCorrect: false },
      { answerText: 'Nuclear meltdown', isCorrect: true },
      { answerText: 'Nuclear transmutation', isCorrect: false }
    ]
  },
  {
    id: '32',
    questionText: 'Which of the following isotopes is commonly used as a fuel in nuclear fusion reactions?',
    description: 'Hydrogen-1 (Deuterium) is commonly used as a fuel in nuclear fusion reactions, where it fuses with another hydrogen isotope to form helium, releasing large amounts of energy in the process.',
    answerOptions: [
      { answerText: 'Uranium-235', isCorrect: false },
      { answerText: 'Hydrogen-1 (Deuterium)', isCorrect: true },
      { answerText: 'Plutonium-239', isCorrect: false },
      { answerText: 'Thorium-232', isCorrect: false }
    ]
  },
  {
    id: '33',
    questionText: 'What is the main disadvantage of nuclear fusion as an energy source compared to nuclear fission?',
    description: 'The main disadvantage of nuclear fusion as an energy source compared to nuclear fission is the difficulty in controlling fusion reactions. Achieving and sustaining the extreme conditions required for fusion is a significant technological challenge.',
    answerOptions: [
      { answerText: 'Lack of fuel availability', isCorrect: false },
      { answerText: 'Production of radioactive waste', isCorrect: false },
      { answerText: 'Difficulty in controlling reactions', isCorrect: true },
      { answerText: 'High cost of reactor construction', isCorrect: false }
    ]
  },
  {
    id: '34',
    questionText: 'Which of the following is NOT a component of a nuclear power plant\'s secondary loop?',
    description: 'The reactor core is not part of the secondary loop of a nuclear power plant. The secondary loop typically consists of components such as the steam turbine, generator, and condenser.',
    answerOptions: [
      { answerText: 'Steam turbine', isCorrect: false },
      { answerText: 'Generator', isCorrect: false },
      { answerText: 'Condenser', isCorrect: false },
      { answerText: 'Reactor core', isCorrect: true }
    ]
  },
  {
    id: '35',
    questionText: 'What is the name of the process where a neutron is captured by a nucleus, resulting in the formation of a heavier isotope?',
    description: 'Nuclear transmutation is the process where a nucleus captures a neutron, leading to the formation of a heavier isotope of the same element. This process can occur in nuclear reactors and other nuclear processes.',
    answerOptions: [
      { answerText: 'Nuclear decay', isCorrect: false },
      { answerText: 'Nuclear transmutation', isCorrect: true },
      { answerText: 'Nuclear fusion', isCorrect: false },
      { answerText: 'Nuclear fission', isCorrect: false }
    ]
  },
  {
    id: '36',
    questionText: 'Which of the following materials is commonly used as a moderator in fast breeder reactors?',
    description: 'Graphite is commonly used as a moderator in fast breeder reactors. It slows down fast neutrons produced by nuclear fission, increasing the probability of additional fission events.',
    answerOptions: [
      { answerText: 'Graphite', isCorrect: true },
      { answerText: 'Water', isCorrect: false },
      { answerText: 'Lead', isCorrect: false },
      { answerText: 'Boron', isCorrect: false }
    ]
  },
  {
    id: '37',
    questionText: 'In a nuclear power plant, what is the purpose of the turbine hall?',
    description: 'The turbine hall in a nuclear power plant houses the turbines that convert steam energy into mechanical energy. This mechanical energy is then used to generate electricity.',
    answerOptions: [
      { answerText: 'To house the control room', isCorrect: false },
      { answerText: 'To store spent nuclear fuel', isCorrect: false },
      { answerText: 'To convert steam energy into mechanical energy', isCorrect: true },
      { answerText: 'To cool down the reactor core', isCorrect: false }
    ]
  },
  {
    id: '38',
    questionText: 'What is the primary source of energy released in a nuclear power plant?',
    description: 'Nuclear reactions are the primary source of energy released in a nuclear power plant. These reactions involve the splitting of atomic nuclei (nuclear fission), releasing large amounts of energy.',
    answerOptions: [
      { answerText: 'Chemical reactions', isCorrect: false },
      { answerText: 'Gravitational energy', isCorrect: false },
      { answerText: 'Nuclear reactions', isCorrect: true },
      { answerText: 'Magnetic fields', isCorrect: false }
    ]
  },
  {
    id: '39',
    questionText: 'Which of the following is NOT a potential risk associated with nuclear power plants?',
    description: 'Air pollution is not a potential risk associated with nuclear power plants. However, other risks such as radioactive contamination, nuclear proliferation, and accidental release of radiation are concerns.',
    answerOptions: [
      { answerText: 'Radioactive contamination', isCorrect: false },
      { answerText: 'Air pollution', isCorrect: true },
      { answerText: 'Nuclear proliferation', isCorrect: false },
      { answerText: 'Accidental release of radiation', isCorrect: false }
    ]
  },
  {
    id: '40',
    questionText: 'Which of the following countries has the highest installed nuclear power capacity?',
    description: 'Russia has the highest installed nuclear power capacity among the listed countries. It has a significant number of nuclear reactors generating electricity.',
    answerOptions: [
      { answerText: 'China', isCorrect: false },
      { answerText: 'United States', isCorrect: false },
      { answerText: 'France', isCorrect: false },
      { answerText: 'Russia', isCorrect: true }
    ]
  },
  {
    id: '41',
    questionText: 'What is the primary purpose of a nuclear reactor\'s containment building?',
    description: 'The primary purpose of a nuclear reactor\'s containment building is to shield against radiation releases. It is designed to contain any accidental release of radioactive materials from the reactor core.',
    answerOptions: [
      { answerText: 'To regulate the flow of coolant', isCorrect: false },
      { answerText: 'To house control rods', isCorrect: false },
      { answerText: 'To shield against radiation releases', isCorrect: true },
      { answerText: 'To store spent nuclear fuel', isCorrect: false }
    ]
  },
  {
    id: '42',
    questionText: 'Which of the following isotopes is commonly used in nuclear medicine for diagnostic imaging?',
    description: 'Iodine-131 is commonly used in nuclear medicine for diagnostic imaging, particularly in thyroid scans. It emits gamma rays, which can be detected by imaging devices.',
    answerOptions: [
      { answerText: 'Iodine-131', isCorrect: true },
      { answerText: 'Carbon-14', isCorrect: false },
      { answerText: 'Uranium-235', isCorrect: false },
      { answerText: 'Hydrogen-1 (Protium)', isCorrect: false }
    ]
  },
  {
    id: '43',
    questionText: 'What is the name of the process by which a nuclear reactor is shut down in case of emergency?',
    description: 'Scramming is the process by which a nuclear reactor is shut down in case of an emergency. Control rods are rapidly inserted into the reactor core to halt the nuclear chain reaction.',
    answerOptions: [
      { answerText: 'Emergency cooling', isCorrect: false },
      { answerText: 'Scramming', isCorrect: true },
      { answerText: 'Shutdown sequence', isCorrect: false },
      { answerText: 'Control rod insertion', isCorrect: false }
    ]
  },
  {
    id: '44',
    questionText: 'Which of the following materials is commonly used to shield against radiation?',
    description: 'Lead is commonly used to shield against radiation due to its high density and ability to absorb gamma rays and other forms of ionizing radiation.',
    answerOptions: [
      { answerText: 'Lead', isCorrect: true },
      { answerText: 'Aluminum', isCorrect: false },
      { answerText: 'Copper', isCorrect: false },
      { answerText: 'Iron', isCorrect: false }
    ]
  },
  {
    id: '45',
    questionText: 'In which layer of the Earth\'s atmosphere do cosmic rays interact, contributing to natural background radiation?',
    description: 'Cosmic rays interact with the stratosphere of the Earth\'s atmosphere, contributing to natural background radiation levels. This interaction produces secondary particles that reach the Earth\'s surface.',
    answerOptions: [
      { answerText: 'Troposphere', isCorrect: false },
      { answerText: 'Stratosphere', isCorrect: true },
      { answerText: 'Mesosphere', isCorrect: false },
      { answerText: 'Exosphere', isCorrect: false }
    ]
  },
  {
    id: '46',
    questionText: 'What is the name of the process where a neutron is emitted from a nucleus, resulting in a change of the nucleus to a different isotope?',
    description: 'Nuclear decay is the process where a neutron is emitted from a nucleus, resulting in a change of the nucleus to a different isotope of the same or a different element. This process can occur spontaneously in radioactive materials.',
    answerOptions: [
      { answerText: 'Nuclear fusion', isCorrect: false },
      { answerText: 'Nuclear decay', isCorrect: true },
      { answerText: 'Nuclear transmutation', isCorrect: false },
      { answerText: 'Nuclear fission', isCorrect: false }
    ]
  },
  {
    id: '47',
    questionText: 'Which of the following countries has the largest number of operational nuclear reactors?',
    description: 'South Korea has the largest number of operational nuclear reactors among the listed countries. It has a significant reliance on nuclear power for electricity generation.',
    answerOptions: [
      { answerText: 'Japan', isCorrect: false },
      { answerText: 'Germany', isCorrect: false },
      { answerText: 'Canada', isCorrect: false },
      { answerText: 'South Korea', isCorrect: true }
    ]
  },
  {
    id: '48',
    questionText: 'Which of the following is a potential application of nuclear energy other than electricity generation?',
    description: 'Water desalination is a potential application of nuclear energy, where nuclear reactors can provide the heat and power needed to desalinate seawater, producing fresh water for agricultural and domestic use.',
    answerOptions: [
      { answerText: 'Water desalination', isCorrect: true },
      { answerText: 'Air conditioning', isCorrect: false },
      { answerText: 'Soil irrigation', isCorrect: false },
      { answerText: 'Road construction', isCorrect: false }
    ]
  },
  {
    id: '49',
    questionText: 'What is the main advantage of molten salt reactors compared to traditional water-cooled reactors?',
    description: 'The main advantage of molten salt reactors compared to traditional water-cooled reactors is higher efficiency in converting heat to electricity. Molten salt reactors operate at higher temperatures, allowing for more efficient energy conversion.',
    answerOptions: [
      { answerText: 'Higher efficiency in converting heat to electricity', isCorrect: true },
      { answerText: 'Lower risk of radioactive contamination', isCorrect: false },
      { answerText: 'Smaller reactor size', isCorrect: false },
      { answerText: 'Simpler reactor design', isCorrect: false }
    ]
  },
  {
    id: '50',
    questionText: 'Which of the following elements is commonly used as fuel in some types of nuclear reactors as an alternative to uranium and thorium?',
    description: 'Plutonium is commonly used as fuel in some types of nuclear reactors as an alternative to uranium and thorium. It can be obtained from spent nuclear fuel and recycled for use in reactors.',
    answerOptions: [
      { answerText: 'Plutonium', isCorrect: true },
      { answerText: 'Neptunium', isCorrect: false },
      { answerText: 'Americium', isCorrect: false },
      { answerText: 'Berkelium', isCorrect: false }
    ]
  },
  {
    id: '51',
    questionText: 'Nuclear power plants emit greenhouse gases during operation.',
    description: 'False. Nuclear power plants do not emit greenhouse gases during their operation. The generation of electricity from nuclear energy involves nuclear reactions, which do not produce carbon dioxide or other greenhouse gases as byproducts.',
    answerOptions: [
      { answerText: 'True', isCorrect: false },
      { answerText: 'False', isCorrect: true }
    ]
  },
  {
    id: '52',
    questionText: 'Nuclear energy and nuclear weapons are the same thing.',
    description: 'False. Nuclear energy and nuclear weapons are not the same thing. Nuclear energy refers to the energy released from nuclear reactions used for peaceful purposes such as electricity generation. Nuclear weapons, on the other hand, are designed to release energy rapidly in an uncontrolled manner for destructive purposes.',
    answerOptions: [
      { answerText: 'True', isCorrect: false },
      { answerText: 'False', isCorrect: true }
    ]
  },
  {
    id: '53',
    questionText: 'Nuclear reactors can explode like atomic bombs.',
    description: 'False. Nuclear reactors cannot explode like atomic bombs. While nuclear reactors can experience accidents, such as a meltdown, these accidents do not result in explosions on the scale of atomic bombs. Reactor designs incorporate safety features to prevent such catastrophic events.',
    answerOptions: [
      { answerText: 'True', isCorrect: false },
      { answerText: 'False', isCorrect: true }
    ]
  },
  {
    id: '54',
    questionText: 'Nuclear energy is completely clean and has no environmental impacts.',
    description: 'False. While nuclear energy itself does not produce greenhouse gases during operation, it is not completely clean and has environmental impacts. Mining and processing uranium ore, constructing and decommissioning nuclear plants, and managing radioactive waste all have environmental implications.',
    answerOptions: [
      { answerText: 'True', isCorrect: false },
      { answerText: 'False', isCorrect: true }
    ]
  },
  {
    id: '55',
    questionText: 'Nuclear waste remains radioactive forever.',
    description: 'False. While nuclear waste can remain radioactive for a long time, it does not remain radioactive forever. The radioactivity of nuclear waste decreases over time through a process called radioactive decay. However, some radioactive isotopes in nuclear waste can remain hazardous for thousands of years.',
    answerOptions: [
      { answerText: 'True', isCorrect: false },
      { answerText: 'False', isCorrect: true }
    ]
  },
  {
    id: '56',
    questionText: 'Nuclear accidents are always catastrophic and result in widespread immediate fatalities.',
    description: 'False. While nuclear accidents can be serious and have potential long-term consequences, they do not always result in widespread immediate fatalities. The severity of a nuclear accident depends on factors such as the type of accident, reactor design, and effectiveness of safety measures.',
    answerOptions: [
      { answerText: 'True', isCorrect: false },
      { answerText: 'False', isCorrect: true }
    ]
  },
  {
    id: '57',
    questionText: 'Nuclear energy is only used for electricity generation.',
    description: 'False. Nuclear energy is not only used for electricity generation. It also has various other applications, including propulsion for naval vessels, heat for industrial processes, and medical purposes such as diagnostic imaging and cancer treatment.',
    answerOptions: [
      { answerText: 'True', isCorrect: false },
      { answerText: 'False', isCorrect: true }
    ]
  },
  {
    id: '58',
    questionText: 'Nuclear energy is not renewable.',
    description: 'True. Nuclear energy is not considered renewable because it relies on the extraction and consumption of finite resources, such as uranium and plutonium. While these resources are abundant, they are not renewable on human timescales.',
    answerOptions: [
      { answerText: 'True', isCorrect: true },
      { answerText: 'False', isCorrect: false }
    ]
  },
  {
    id: '59',
    questionText: 'Nuclear power plants are a prime target for terrorist attacks.',
    description: 'True. Nuclear power plants are considered potential targets for terrorist attacks due to the potential for catastrophic consequences if safety systems are compromised. However, these facilities are heavily guarded and designed with security measures to mitigate such threats.',
    answerOptions: [
      { answerText: 'True', isCorrect: true },
      { answerText: 'False', isCorrect: false }
    ]
  },
  {
    id: '60',
    questionText: 'Nuclear energy is too expensive to be competitive with other forms of energy.',
    description: 'False. While nuclear energy has high initial construction costs and costs associated with waste management and decommissioning, it can be competitive with other forms of energy, especially in regions with limited access to fossil fuels or renewable resources. Advances in reactor technology and regulatory frameworks can also impact its competitiveness.',
    answerOptions: [
      { answerText: 'True', isCorrect: false },
      { answerText: 'False', isCorrect: true }
    ]
  }
  ];
  