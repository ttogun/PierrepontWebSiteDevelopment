$(document).ready( $(".sidebarLink").hover(function(){
                                           
                                           
                                           if($(this).hasClass("activeLink")){}
                                              else{
                                                //$(".activeLink").animate({"padding-left": "0"});
                                                $(this).animate({"padding-left": "1.5em"});
                                              }
                                           
                                           
                                           },
                                           function(){
                                              if($(this).hasClass("activeLink")){}
                                                 else{
                                                 //$(".activeLink").animate({"padding-left": "1.5em"});
                                                 $(this).animate({"padding-left": "0"});
                                                 }
                                    
                                           }));
