String.prototype.trim = function() {
    return this.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
};
Object.prototype.extend = function(e) {
    for (var t in e) {
        if (!this[t]) {
            this[t] = e[t]
        }
    }
    return this
};

var Pavan = function() {
    var e = this;
    this.resume = ["PAVAN RAVIPATI", "===============", "Software Engineer", "psravipati@gmail.com", "", "EXPERIENCE", "==========", "Web Developer", "Artsicle.com", "May 2013 - Present (1 yr 3 mts)", "", "Financial Analyst", "Student and Foundation Fund", "Jan 13 - May 13 (5 mts)", "", "Software Engineer", "UNC Information Management and Technology", "Sep 12 - May 13 (9 mts)", "", "Creator", "StrictlyPlatonic.net", "Aug 11 - May 13 (1 yr 10 mts)", "", "Drill Instructor", "Israel Defense Forces Israel", "Nov 08 - Nov 09 (1 yr 1 mth)", "", "LANGUAGES", "=========", "Hebrew", "", "SKILLS", "======", "Ruby on Rails", "PHP", "C#", "ASP.NET", "MySQL", "JavaScript", "jQuery", "CoffeeScript", "CSS3", "Financial Modeling", "", "EDUCATION", "=========", "University of Northern Colorado", "Bachelor's degree, Finance, 07 - 13"].join("<br/>");
    this.projects = [{name: "Example Project 1",url: "http://google.com",description: "founding intern."}];
    this.commandHeaders = {commands: "AVAILABLE COMMANDS",contact: "CONTACT INFO",about: "ABOUT",projects: "RECENT PROJECTS"};
    this.caretToEnd = function() {
        if (window.getSelection && document.createRange) {
            var e = document.createRange(), t = window.getSelection();
            e.selectNodeContents(inputField);
            e.collapse(false);
            t.removeAllRanges();
            t.addRange(e)
        } else if (document.body.createTextRange) {
            var n = document.body.createTextRange();
            n.moveToElementText(inputField);
            n.collapse(false);
            n.select()
        }
    };
    this.focus = function() {
        inputField.focus();
        return e.caretToEnd()
    };
    this.touchDevice = function() {
        return "ontouchstart" in window || "onmsgesturechange" in window
    };
    this.insertInput = function(e) {
        inputField.innerHTML = e;
        return this.caretToEnd()
    };
    this.readInput = function() {
        return inputField.innerHTML.toLowerCase().trim()
    };
    this.executeCommand = function() {
        var t = e.readInput().split(" "), n = "", r;
        if (e.commandSet[t[0]]) {
            if (r = e.commandHeaders[t[0]]) {
                n += r + "<br/>" + Array(r.length + 1).join("=") + "<br/>"
            }
            n += e.commandSet[t[0]].apply(e, t.slice(1)) || ""
        } else {
            n = "Unknown. Type 'commands' for a list of available commands."
        }
        return e.output(n)
    };
    this.customInput = function(n, r) {
        this.output(n);
        this.commandSet = r.extend(e.globalCommands);
        document.onkeydown = function(n) {
            if (t[n.keyCode]) {
                t[n.keyCode]();
                if (n.keyCode === 13) {
                    e.commandSet = e.globalCommands;
                    document.onkeydown = e.keyDown
                }
                return false
            }
        }
    };
    this.output = function(e) {
        var t = this.readInput();
        if (t.length > 0) {
            outputField.innerHTML += "<p class='old'> > " + t + "</p>"
        }
        outputField.innerHTML += "<p>" + e + "</p>";
        outputField.scrollTop = outputField.scrollHeight;
        return this.insertInput("")
    };
    this.insertBestMatch = function() {
        var t = Object.keys(e.commandSet).filter(function(t) {
            return t.match(new RegExp(e.readInput()))
        });
        if (t.length === 1) {
            return e.insertInput(t[0])
        }
    };
    this.globalCommands = {commands: function() {
            return Object.keys(this.globalCommands).sort().join("<br/>")
        },contact: function() {
            var t = "Pavan Ravipati<br/>Software Engineer<br/>psravipati@gmail.com<br/>San Francisco, CA<br/><br/>";
            e.customInput("", {y: function() {
                    window.open("mailto:psravipati@gmail.com", "_blank")
                },n: function() {
                }});
            return t + "Send Email? (y/n)"
        },clear: function() {
            return outputField.innerHTML = ""
        },linkedin: function() {
            e.customInput("Open LinkedIn profile? (y/n)", {y: function() {
                    window.open("http://www.linkedin.com/in/pravipati/en", "_blank")
                },n: function() {
                }})
        },github: function() {
            e.customInput("Open Github profile? (y/n)", {y: function() {
                    window.open("http://www.github.com/pravipati", "_blank")
                },n: function() {
                }})
        },about: function() {
            return "A recovering SaaS salesman and entreprenuer who loves building things with other people."
        },resume: function() {
            e.customInput(e.resume + "<br/><br/><br/>Download a copy? (y/n)", {y: function() {
                    window.open("./PavanRavipati.pdf", "_blank")
                },n: function() {
                }})
        },projects: function() {
            var t = "";
            for (var n = 0; n < e.projects.length; n++) {
                t += "<p>" + (n + 1) + ". " + e.projects[n].name + " - " + e.projects[n].description + "<p>"
            }
            e.customInput("", {open: function(t) {
                    if (e.projects[t - 1]) {
                        window.open(e.projects[t - 1].url, "_blank")
                    }
                }});
            return t + "<br/>Type 'open [number]' to open in new tab"
        },exit: function() {
            e.customInput("Are you sure? (y/n)", {y: function() {
                    window.open("", "_self", "").close()
                },n: function() {
                }})
        },song: function() {
            if (songField.innerHTML.length === 0) {
                e.output("Loading...");
                songField.innerHTML = '<iframe src="http://www.youtube.com/embed/-rkRSJpYEJ8?autoplay=1" style="display:none;" ></iframe>';
                songField.getElementsByTagName("iframe")[0].onload = function() {
                    e.output("Playing: Ghost Loft - Overflow ")
                }
            }
            e.customInput("Type 'stop' to abort.", {stop: function() {
                    songField.innerHTML = ""
                }})
        }};
    this.commandSet = this.globalCommands;
    var t = {37: true,38: true,39: true,40: true,13: this.executeCommand,9: this.insertBestMatch};
    this.keyDown = function(e) {
        e.preventDefault;
        if (t[e.keyCode]) {
            if (typeof t[e.keyCode] === "function") {
                t[e.keyCode]()
            }
            return false
        }
    };
    this.focus();
    document.onclick = this.focus;
    inputField.onmousedown = function(e) {
        e.preventDefault;
        return false
    };
    document.onkeydown = this.keyDown;
    if (this.touchDevice()) {
        this.output("This site works best with a real keyboard.<br/>Bookmark for later?")
    }
    this.output("<p class='old'>> Welcome! My name is Pavan.</p>")
}
