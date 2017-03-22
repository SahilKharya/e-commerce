        function openNav() {
            document.getElementById("mySidenav").style.width = "250px";
        }

        /* Set the width of the side navigation to 0 */
        function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
        }

        function myFunction(x) {
            x.classList.toggle("change");
        }

        $(document).ready(function(){
            $("#addCart").click(function(){
                $("#myCart").modal();
            });
        });
        
        $(document).ready(function(){
            $("#myBtn").click(function(){
                $("#myModal").modal();
            });
        });

        <!-- chose file -->
        function chooseFile() {
            $("#fileInput").click();
        }
        
        <!-- Payment -->
        $(document).ready(function() {
            $("#payID").click(function() {
                function validation() {
                    var Name = $("#Name").val();
                    var Email = $("#Email").val();
                    var Number = $("#Number").val();
                    var Address = $("#Add").val();
                    
                    if (Name === '' || Email === '' || Number === '' || Address === '') {
                        alert("Please fill all fields...!!!!!!");
                        return false;
                        } else {
                        return true;
                        }
                }                
                $('#Number').keypress(function(e) {
                    if(e.charCode<48 || e.charCode>57) {
                        e.preventDefault();
                    }
                })
                if (validation()) {
                    $("#formID").submit();
                    alert("Your Order has been Placed Successfully.");
                }
                
            });
        });

        <!-- SOLD product -->
        $(document).ready(function() {
            $("#sellID").click(function() {
                function validation() {
                    var prodName = $("#prodName").val();
                    var brandName = $("#brandName").val();
                    var category = $("#prodCat").val();
                    var price = $("#price").val();
                    var discount = $("discount").val();
                    var description = $("#describe").val();
                    var seller = $("#sellName").val();
                    
                    if (prodName === '' || brandName === '' || category === '' || price === '' || discount === '' || description === '' || seller === '') {
                        alert("Please fill all fields...!!!!!!");
                        return false;
                        } else {
                        return true;
                        }
                }
                
                if (validation()) {
                    $("#formID").submit();
                    alert("Product Listed Successfully.");
                }
            });
        });

        /*slide*/
        var slideIndex = 0;
        showSlides();

        function showSlides() {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none"; 
            }
            slideIndex++;
            if (slideIndex> slides.length) {slideIndex = 1} 
            slides[slideIndex-1].style.display = "block"; 
            setTimeout(showSlides, 5000);
        }
           

        $(document).ready(function() {
            $.ajax({
                url: 'http://acadprojects.com/py/fabricKart/sort/items',
                type: 'GET',
                data: {
                    "sort_by": "relevance",
                    "page": 0
                },
                success: function(response) {
                    console.log(response);
                    var data = response["data"];
                    data.forEach(function(product, index) {
                        var element = "<div class='product-container'></div>";
                        var productDiv = $("<div class= 'product-name'></div>").text(product["item_name"])
                        var img = $("<img>").attr("src", product["image"]);
                        var brandName = $("<div class='brand-name'></div>").text(product["brand"]);
                        var cost = $("<div class= 'cost'></div>").text(product["price"]);
                        var brandCostDiv = $("<div></div>").append(brandName, cost);
                        element = $(element).append(productDiv, img, brandCostDiv);
                        $('.container2').append(element); 
                    });
                }
            });
        });