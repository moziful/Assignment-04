const jobs = [
  {
    id: 1,
    company: "Mobile First Corp",
    position: "React Native Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    description: "Build and maintain cross-platform mobile applications with clean UI and optimized performance.",
    status: "all"
  },
  {
    id: 2,
    company: "TechNova Solutions",
    position: "Frontend Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$60,000 - $95,000",
    description: "Develop responsive web interfaces using modern JavaScript frameworks and component-based architecture.",
    status: "all"
  },
  {
    id: 3,
    company: "CloudCore Systems",
    position: "Backend Engineer",
    location: "New York, USA",
    type: "Full-time",
    salary: "$85,000 - $130,000",
    description: "Design scalable APIs, manage databases, and ensure system reliability for high-traffic applications.",
    status: "all"
  },
  {
    id: 4,
    company: "PixelCraft Studio",
    position: "UI/UX Designer",
    location: "Remote",
    type: "Contract",
    salary: "$40,000 - $65,000",
    description: "Create intuitive user experiences and visually appealing interfaces for digital products.",
    status: "all"
  },
  {
    id: 5,
    company: "DataBridge Analytics",
    position: "Data Analyst",
    location: "Toronto, Canada",
    type: "Full-time",
    salary: "$70,000 - $105,000",
    description: "Analyze complex datasets, generate insights, and support business decision-making processes.",
    status: "all"
  },
  {
    id: 6,
    company: "NextGen Robotics",
    position: "Software Engineer",
    location: "Berlin, Germany",
    type: "Full-time",
    salary: "$90,000 - $140,000",
    description: "Develop intelligent control systems and automation software for robotics platforms.",
    status: "all"
  },
  {
    id: 7,
    company: "FinTrust Solutions",
    position: "Cybersecurity Analyst",
    location: "London, UK",
    type: "Full-time",
    salary: "$85,000 - $125,000",
    description: "Monitor security systems, prevent cyber threats, and implement enterprise security strategies.",
    status: "all"
  },
  {
    id: 8,
    company: "GreenTech Innovations",
    position: "Cloud Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$95,000 - $150,000",
    description: "Design cloud infrastructure, manage deployments, and optimize performance in distributed systems.",
    status: "all"
  }
]; 

// Update total job count
let totalJobs = document.getElementById("totalCount");
totalJobs.innerText = jobs.length;
let totalJobsCount = document.getElementById("totalJobsCount");
totalJobsCount.innerText = jobs.length;

// Create Job Card Via Js
let container = document.getElementById("jobsContainer");
for(let job of jobs){
    if(job.status === "all"){
    container.innerHTML += `
    <div data-id="${job.id}" class="mb-4 grid p-6 gap-5 bg-white rounded-xl hover:bg-gray-100">
        <div class="flex justify-between items-center">
            <div class="grid gap-1">
                <p class="text-xl text-blue-900 font-bold">
                    ${job.company}
                </p>
                <p class="text-gray-600">
                    ${job.position}
                </p>
            </div>
            <i data-id="${job.id}" class="deleteBtn p-3 text-center items-center fa-regular fa-trash-can rounded-full border border-gray-200 cursor-pointer hover:bg-gray-200"></i>
        </div>
        <p class="text-gray-500">
            ${job.location} • ${job.type} • ${job.salary}
        </p>
        <div>
            <button class="bg-[#F8FAFC] min-w-20 px-3 py-2 text-lg text-blue-900 font-medium rounded-md">
                NOT APPLIED
            </button>
            <p>
                ${job.description}
            </p>
        </div>
        <div>
            <button class="min-w-20 px-3 py-2 text-green-500 text-lg font-medium rounded-md bg-white border border-green-500 cursor-pointer">
                INTERVIEW
            </button>
            <button class="min-w-20 px-3 py-2 text-red-400 text-lg font-medium rounded-md bg-white border border-red-400 cursor-pointer">
                REJECTED
            </button>
        </div>
    </div>
`;
}
}