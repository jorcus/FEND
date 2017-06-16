var bio = {
    "name": "Jorcus",
    "role": "Full-stack developer",
    "welcomeMessage": "Welcome to Jorcus Online Resume",
    "biopic": "https://scontent-kul1-1.xx.fbcdn.net/v/t1.0-9/13516488_10206342151465151_2592101150438034884_n.jpg?oh=7b725af03e8450a8a28bd20f626fbec1&oe=5824F71A",
    "contacts": {
        "mobile": "+6010-7888792",
        "email": "kiang.ng@hotmail.com",
        "github": "https://github.com/jorcus",
        "location": "Malaysia"
    },
    "age": 20,
    "skills": ["HTML", "CSS", "Javascript", "PYTHON", "SQL", "PHP"]
};

bio.display = function() {


    var Name = HTMLheaderName.replace("%data%", bio.name);
    var Role = HTMLheaderRole.replace("%data%", bio.role);
    var WelMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var Pic = HTMLbioPic.replace("%data%", bio.biopic);

    $("#header").prepend(Name, Role, WelMsg, Pic, HTMLskillsStart);

    var Email = HTMLemail.replace("%data%", bio.contacts.email);
    var Mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var Github = HTMLgithub.replace("%data%", bio.contacts.github);
    var Location = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts, #footerContacts").append(Email, Mobile, Github, Location);

    for (a = 0; a < bio.skills.length; a++) {
        var Skills = HTMLskills.replace("%data%", bio.skills[a]);
        $("#skills").append(Skills);

    }
};

bio.display();




var education = {
    "schools": [{
        "name": "ALC COLLEGE",
        "location": "Klang, Malaysia",
        "degree": "Diploma In Business Admin",
        "majors": ["Business Administration"],
        "dates": "2013",
        "url": "http://www.alc.edu.my"
    }],
    "onlineCourses": [{
        "school": "Udacity",
        "title": "Front-End Web Developer Nanodegree",
        "dates": "In-Progress",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }, {
        "school": "Udacity",
        "title": "Intro To Programming Nanodegree",
        "dates": "July 2016",
        "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    }]

};

education.display = function() {
    if (education.schools.length > 0) {
        for (x = 0; x < education.schools.length; x++) {

            var schoolName = HTMLschoolName.replace("%data%", education.schools[x].name).replace("#", "http://www.alc.edu.my");
            var schoolDates = HTMLschoolDates.replace("%data%", education.schools[x].dates);
            var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[x].degree);
            var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[x].location);
            var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[x].majors);

            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(schoolName + schoolDegree, schoolDates, schoolLocation, schoolMajor);

        }

        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for (x = 0; x < education.onlineCourses.length; x++) {

                var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[x].title).replace("#", education.onlineCourses[x].url);
                var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[x].school);
                var onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[x].dates);
                var onlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[x].url).replace("#", education.onlineCourses[x].url);

                $("#education").append(HTMLschoolStart);
                $(".education-entry:last").append(onlineTitle + onlineSchool, onlineDates, onlineURL);

            }
        }
    }
};
education.display();


var work = {
    "jobs": [{
        "employer": "Genre",
        "title": "Software Developer",
        "location": "Kuala Lumpur, Malaysia",
        "dates": "March 2014 - December 2015",
        "description": "I was hired to work on Genre which involved knowledge in C# development, jQuery, knockoutJS, SQL Server, Razor templates and Wordpress. "
    }, {
        "employer": "Tenocian",
        "title": "Web Developer",
        "location": "Petaling Jaya, Malaysia",
        "dates": "September 2012 - March 2014",
        "description": "My primary responsibilities involve all of developing, maintaining, expanding, and scaling website to create website layout/user interface by using standard HTML/CSS practices "
    }]
};


work.display = function() {

    if (work.jobs.length > 0) {

        $("#workExperience").append(HTMLworkStart);

        for (i = 0; i < work.jobs.length; i++) {

            var Employer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var WorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var WorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var WorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var WorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            $(".work-entry:last").append(Employer + WorkTitle, WorkLocation, WorkDates, WorkDescription);

        }

    }

};

work.display();




var projects = {
    "projects": [{
        "title": "Python Word Quiz Game",
        "dates": "June 2016",
        "description": "This is a game that i completed on intro to programming Nanodegree program. ",
        "images": ["images/197x148.gif"],
        "url": "#"
    }, {
        "title": "Online Portfolio",
        "dates": "July 2016",
        "description": "This is a part of the project of front-end web developer Nanodegree program ",
        "images": ["images/197x148.gif"],
        "url": "#"
    }]
};

projects.display = function() {
    if (projects.projects.length > 0) {
        for (i = 0; i < projects.projects.length; i++) {

            $("#projects").append(HTMLprojectStart);

            var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
            var projectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            var projectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images);

            $(".project-entry:last").append(projectTitle, projectDates, projectDescription, projectImage);

        }
    }
};

projects.display();

$("#mapDiv").append(googleMap);