document.addEventListener("DOMContentLoaded", function () {

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

    const container = document.getElementById("jobsContainer");
    const totalCount = document.getElementById("totalCount");
    const totalJobsCount = document.getElementById("totalJobsCount");
    const interviewCount = document.getElementById("interviewCount");
    const rejectedCount = document.getElementById("rejectedCount");

    let currentTab = "all";

    function statusCount() {
        let interviewCounter = 0;
        let rejectedCounter = 0;

        jobs.forEach(job => {
            if (job.status === "interview") interviewCounter++;
            if (job.status === "rejected") rejectedCounter++;
        });

        interviewCount.innerText = interviewCounter;
        rejectedCount.innerText = rejectedCounter;
        totalCount.innerText = jobs.length;
        totalJobsCount.innerText = jobs.length;
    }

    function renderJobs(filter = "all") {
        container.innerHTML = "";
        const filteredJobs =
            filter === "all"
                ? jobs
                : jobs.filter(job => job.status === filter);
                // No job screen 
        if (filteredJobs.length === 0) {
            container.innerHTML = `
                <div class="flex flex-col items-center gap-6 justify-center text-center py-10">
                    <img class="h-20 w-20" src="./images/jobs.png">
                    <p class="text-xl font-bold text-blue-900">No jobs available</p>
                    <p class="text-gray-500">Check back soon</p>
                </div>
            `;
            return;
        }

        filteredJobs.forEach(job => {
            container.innerHTML += `
                <div class="mb-4 p-6 bg-white rounded-xl shadow">
                    <div class="flex justify-between">
                        <div>
                            <p class="text-xl font-bold text-blue-900">${job.company}</p>
                            <p class="text-gray-600">${job.position}</p>
                        </div>
                        <button onclick="deleteJob(${job.id})" class="text-gray-500">
                            <i class="deleteBtn p-3 text-center items-center fa-regular fa-trash-can rounded-full border border-gray-200 cursor-pointer hover:bg-gray-200"></i>
                        </button>
                    </div>
                    <p class="text-gray-500 mt-2">
                        ${job.location} • ${job.type} • ${job.salary}
                    </p>
                    <button class="mt-3 px-3 py-1 rounded 
                        ${job.status === "interview" ? "bg-green-400 text-white"
                        : job.status === "rejected" ? "bg-red-400 text-white"
                        : "bg-gray-200"}">
                        ${job.status === "all" ? "NOT APPLIED" : job.status.toUpperCase()}
                    </button>
                    <p class="mt-2">${job.description}</p>
                    <div class="mt-4 flex gap-3">
                        <button onclick="updateJobStatus(${job.id}, 'interview')" 
                            class="px-3 py-1 border border-green-400 text-green-400 rounded">
                            INTERVIEW
                        </button>
                        <button onclick="updateJobStatus(${job.id}, 'rejected')" 
                            class="px-3 py-1 border border-red-400 text-red-400 rounded">
                            REJECTED
                        </button>
                    </div>
                </div>
            `;
        });
    }
 
    window.updateJobStatus = function (id, status) {
        const job = jobs.find(j => j.id === id);
        if (job) {
            job.status = status;
            statusCount();
            renderJobs(currentTab);
        }
    };
 
    window.deleteJob = function (id) {
        const index = jobs.findIndex(j => j.id === id);
        if (index !== -1) {
            jobs.splice(index, 1);
            statusCount();
            renderJobs(currentTab);
        }
    };

    function activeTabBg() {
    allTabBtn.classList.remove("bg-blue-400", "bg-white", "text-white");
    interviewTabBtn.classList.remove("bg-blue-400", "bg-white", "text-white");
    rejectedTabBtn.classList.remove("bg-blue-400", "bg-white", "text-white");
    if (currentTab === "all") {
        allTabBtn.classList.add("bg-blue-400", "text-white");
        interviewTabBtn.classList.add("bg-white", "text-gray-500");
        rejectedTabBtn.classList.add("bg-white", "text-gray-500");
    }
    if (currentTab === "interview") {
        interviewTabBtn.classList.add("bg-blue-400", "text-white");
        allTabBtn.classList.add("bg-white", "text-gray-500");
        rejectedTabBtn.classList.add("bg-white", "text-gray-500");
    }
    if (currentTab === "rejected") {
        rejectedTabBtn.classList.add("bg-blue-400", "text-white");
        allTabBtn.classList.add("bg-white", "text-gray-500");
        interviewTabBtn.classList.add("bg-white", "text-gray-500");
    }
    }

    document.getElementById("allTabBtn").addEventListener("click", () => {
        currentTab = "all";
        renderJobs("all");
        activeTabBg();
    });

    document.getElementById("interviewTabBtn").addEventListener("click", () => {
        currentTab = "interview";
        renderJobs("interview");
        activeTabBg();
    });

    document.getElementById("rejectedTabBtn").addEventListener("click", () => {
        currentTab = "rejected";
        renderJobs("rejected");
        activeTabBg();
    });

 
    statusCount();
    renderJobs("all");
    activeTabBg();

});