var MODEL = (function(){
    var homeContent = ` <div class="home-home">
    <!--Hero/Landing-->
        <div class="home-hero">
            <section class="home-section-hero">
                <img class="home-hero-img" src="images/hero.jpg" alt="Plane in the clouds">
                <div class="landing-text">
                <h1 class="home-travel-fly">travel-fly</h1>
                <h2 class="home-lorem">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quisquam ratione eius adipisci reprehenderit ea Lorem ipsum dolor sit amet ipsum sit </h2>
                    <div class="read-more-box">
                        <a class="read-more" href="">READ MORE</a>
                    </div>
                </div>
            </section>
        </div>
    <!--Travel Deals-->
    <section class="home-trav-deals">
            <div class="home-travel-deals">
                <img class="home-td-img" src="images/tour-01.jpg" alt="Israel">
                <div class="deal-text">
                <h2>ISRAEL</h2>
                <h3>from $1000</h3>
                <div class="learn-more-box">
                    <a class="learn-more" id="israel" href="#">LEARN MORE</a>
                </div>
            </div>
            </div>
            <div class="home-travel-deals"> 
                <img class="home-td-img" src="images/tour-02.jpg" alt="U.S.A">
                <div class="deal-text">
                <h2>U.S.A</h2>
                <h3>from $1500</h3>
                <div class="learn-more-box">
                    <a class="learn-more" id="usa" href="#">LEARN MORE</a>
                </div>
                </div>
            </div>
            <div class="home-travel-deals">
                <img class="home-td-img" src="images/tour-03.jpg" alt="Australia">
                <div class="deal-text">
                <h2>AUSTRALIA</h2>
                <h3>from $1800</h3>
                <div class="learn-more-box">
                    <a class="learn-more" id="australia" href="#">LEARN MORE</a>
                </div>
            </div>
            </div> 
    </section>
    <!--Booking Form-->
            <section class="booking-form">
                <h1 class="booking-title">Booking form</h1>
                <div class="first-name">
                    <input class="first" type="text" name="name" placeholder="name...">
                    <input class="first" type="text" name="email" placeholder="email..."> 
                </div>
                <div class="country-hotel">
                    <input class="first" type="text" name="country" placeholder="country...">
                    <input class="first" type="text" name="hotel" placeholder="hotel...">  
                </div>
                <div class="check-in">
                    <label class="lable" for="">Check-in</label>
                    <input class="in" type="text" name="date" placeholder="05/10/2020">
                </div>
                <div class="check-out">
                    <label class="lable" for="">Check-out</label>
                    <input class="out" type="text" name="date" placeholder="05/10/2020">
                </div>
                <div class="six">
                    <label class="acr" for="">Adult</label>
                    <input class="three" type="text" name="adult" placeholder="2">
                    <label class="acr" for="">Children</label>
                    <input class="three" type="text" name="children" placeholder="0">
                    <label class="acr" for="">Rooms</label>
                    <input class="three" type="text" name="rooms" placeholder="1">
                </div>
                <div class="msg">
                    <textarea class="message" name="" placeholder="message..." cols="100" rows="10"></textarea>
                </div>
                <div class="submit">
                    <a class="submit-link" href="">SUBMIT</a>
                </div>
            </section>
        </div>`;
    var aboutContent = `<div id="about-about">
    <!--About-->
        <div class="about-box">
            <h1 class="about">ABOUT:</h1>
            <p class="about-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vero quas ratione voluptatibus perferendis? Vero dolorem, aliquid, sequi repellat ad expedita eos incidunt rerum fugit eveniet tempora optio minima suscipit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. At quisquam maiores culpa explicabo laboriosam ipsum officiis id nobis facere nostrum mollitia illum dignissimos quaerat, perspiciatis quis nulla iure. Praesentium, dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium placeat quia vero illo! Accusantium cupiditate cum rerum aperiam maxime assumenda necessitatibus sit mollitia eligendi magnam vero, alias ipsam, sunt quibusdam.</p>
        </div>
    <!--Client Quotes-->
            <h2 class="cq-main">CLIENT QUOTES:</h2>
        <div class="client-quotes">
            <div class="client-1">
                <img src="images/about-client-01 copy.jpg" alt="Client 1">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci nesciunt, repellat, distinctio odio sint voluptates quia, mollitia dolorum nisi officia ullam quos autem delectus at labore enim illum vel. Assumenda.</p>
            </div>
            <h6>-Miranda Brown</h6>
            <div class="client-2">
                <img src="images/about-client-02 copy.jpg" alt="Client 2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium consectetur accusantium ipsam autem dignissimos ratione mollitia sed atque sequi numquam, incidunt laboriosam! Atque, quidem rerum accusantium fugit eaque dolorum!</p>
            </div>
            <h6>-Johnathan Wes</h6>
        </div>
    </div>`;
    var toursContent = `<div id="tours-tours">
    <!--Hero-->
    <div class="tour-hero">
        <h1>TOURS:</h1>
        <img src="images/tours-header.jpg" alt="Scenic header">
    </div>
    <!--Tours-->
    <section class="tour-trav-deals">
        <div class="tour-travel-deals">
            <img class="tour-td-img" src="images/tour-01.jpg" alt="Israel">
            <div class="deal-text">
            <h2>ISRAEL</h2>
            <h3>from $1000</h3>
            <div class="learn-more-box">
                <a class="learn-more" href="#" id="israel">LEARN MORE</a>
            </div>
        </div>
        </div>
        <div class="tour-travel-deals"> 
            <img class="tour-td-img" src="images/tour-02.jpg" alt="U.S.A">
            <div class="deal-text">
            <h2>U.S.A</h2>
            <h3>from $1500</h3>
            <div class="learn-more-box">
                <a class="learn-more" href="#" id="usa">LEARN MORE</a>
            </div>
            </div>
        </div>
        <div class="tour-travel-deals">
            <img class="tour-td-img" src="images/tour-03.jpg" alt="Australia">
            <div class="deal-text">
            <h2>AUSTRALIA</h2>
            <h3>from $1800</h3>
            <div class="learn-more-box">
                <a class="learn-more" href="#" id="australia">LEARN MORE</a>
            </div>
        </div>
        </div> 
        <div class="tour-travel-deals">
            <img class="tour-td-img" src="images/tour-04.jpg" alt="New Zeland">
            <div class="deal-text">
            <h2>NEW <br> ZELAND</h2>
            <h3>from $1200</h3>
            <div class="learn-more-box">
                <a class="learn-more" href="#" id="newZeland">LEARN MORE</a>
            </div>
        </div> 
        </div>
        <div class="tour-travel-deals">
            <img class="tour-td-img" src="images/tour-05.jpg" alt="France">
            <div class="deal-text">
            <h2>FRANCE</h2>
            <h3>from $2500</h3>
            <div class="learn-more-box">
                <a class="learn-more" href="#" id="france">LEARN MORE</a>
            </div>
        </div> 
        </div>
        <div class="tour-travel-deals">
            <img class="tour-td-img" src="images/tour-06.jpg" alt="Egypt">
            <div class="deal-text">
            <h2>EGYPT</h2>
            <h3>from $900</h3>
            <div class="learn-more-box">
                <a class="learn-more" href="#" id="egypt">LEARN MORE</a>
            </div>
        </div> 
        </div>
        <div class="tour-travel-deals">
            <img class="tour-td-img" src="images/tour-07.jpg" alt="Japan">
            <div class="deal-text">
            <h2>JAPAN</h2>
            <h3>from $1300</h3>
            <div class="learn-more-box">
                <a class="learn-more" href="#" id="japan">LEARN MORE</a>
            </div>
        </div> 
        </div>
        <div class="tour-travel-deals">
            <img class="tour-td-img" src="images/tour-08.jpg" alt="Canada">
            <div class="deal-text">
            <h2>CANADA</h2>
            <h3>from $2000</h3>
            <div class="learn-more-box">
                <a class="learn-more" href="#" id="canada">LEARN MORE</a>
            </div>
        </div> 
        </div>
        <div class="tour-travel-deals">
            <img class="tour-td-img" src="images/tour-09.jpg" alt="U.A.E">
            <div class="deal-text">
            <h2>U.A.E</h2>
            <h3>from $3000</h3>
            <div class="learn-more-box">
                <a class="learn-more" href="#" id="uae">LEARN MORE</a>
            </div>
        </div> 
        </div>
    </section>
    </div>`;
    var specialOffersContent = `<div id="special-offers-special">
    <!--Special Offers-->
    <div class="special-offers">
        <h1>SPECIAL OFFER(S):</h1>
        <div class="barcelona">
            <img src="images/special-offer-01 copy.jpg" alt="Barcelona">
        <div class="words">
            <h2>BARCELONA, SPAIN</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque ut sunt dignissimos id magni consequuntur, quos suscipit doloremque ducimus possimus maxime! Ducimus, commodi magni eaque atque accusantium delectus itaque obcaecati.</p>
            <div class="learn-more-box">
                <a class="learn-more" href="">LEARN MORE</a>
            </div>
        </div>
        </div>
    </div>
    <div class="special-offers">
        <div class="barcelona">
            <img src="images/special-offer-02 copy.jpg" alt="Bangkok">
        <div class="words">
            <h2>BANGKOK, THAILAND</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque ut sunt dignissimos id magni consequuntur, quos suscipit doloremque ducimus possimus maxime! Ducimus, commodi magni eaque atque accusantium delectus itaque obcaecati.</p>
            <div class="learn-more-box">
                <a class="learn-more" href="">LEARN MORE</a>
            </div>
        </div>
        </div>
    </div>
    <div class="space"></div>
    </div>`;
    var blogContent = `  <div id="blog-blog">
    <!--Blog-->
    <h1 class="blog-header">BLOG:</h1>
    <div class="blog">
        <div class="box">
        <div class="date-box">
            <p class="date">06</p>
            <p class="date">JUN</p>
        </div>
        <div class="blog-photo">
        <img src="images/blog copy.jpg" alt="person writing">
        </div>
        </div>
        <div class="blog-text">
        <h4>Sed et persipiatis unde omnis iste natus</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum neque rem beatae deserunt, perspiciatis officia? Dolores, nam laudantium nostrum numquam temporibus vel nisi rerum alias magnam perspiciatis cum corrupti veritatis?</p>
        </div>
    </div>
    <div class="blog">
        <div class="box">
        <div class="date-box">
            <p class="date">06</p>
            <p class="date">JUN</p>
        </div>
        <div class="blog-photo">
        <img src="images/blog copy.jpg" alt="person writing">
        </div>
        </div>
        <div class="blog-text">
        <h4>Sed et persipiatis unde omnis iste natus</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum neque rem beatae deserunt, perspiciatis officia? Dolores, nam laudantium nostrum numquam temporibus vel nisi rerum alias magnam perspiciatis cum corrupti veritatis?</p>
        </div>
    </div>
    </div>`;
    var contactContent = `<div id="contact-contact">
    <!--Contact Us-->
<h1 class="contact">CONTACT US:</h1>
<div class="whole">
<div class="map">
    <div class="contact-photo">
    <img src="images/map copy.png" alt="map">
    </div>
    <div class="info">
        <h6>travel-fly Inc.</h6>
        <h6>8901 Marmora Road,</h6>
        <h6>Glasgow, D04 89GR</h6>
        <h6>Freephone:+1 800 559 6580</h6>
        <h6>Telephone:+1 800 603 6035</h6>
        <h6>FAX:+1 800 889 9898</h6>
        <h6>E-mail: mail@travelfly.org</h6>
    </div>
</div>
<div class="form">
    <div class="first-name">
        <input class="first" type="text" name="name" placeholder="Your name...">
        <input class="first" type="text" name="email" placeholder="Email Address..."> 
        <input class="first" type="text" name="company" placeholder="Company...">
    </div>
    <div class="msg">
        <textarea class="message" name="" placeholder="Message..." cols="100" rows="10"></textarea>
    </div>
    <div class="send-message-box">
        <a class="send-message" href="">SEND MESSAGE</a>
    </div>
  </div> 
  </div> 
</div>`;
    var canadaContent = ` <div id="canada-canada">
    <!--Hero-->
    <div class="individual-hero">
        <h1>Canada Tour Package</h1>
        <h4>STARTING FROM $2000</h4>
        <img src="images/tour-08 copy.jpg" alt="tour header">
    </div>
    <!--Pictures-->
    <div class="pictures">
        <img src="images/canada-tour-01.jpg" alt="Canada">
        <img src="images/canada-tour-02.jpg" alt="Canada">
        <img src="images/canada-tour-03.jpg" alt="Canada">
    </div>
    <!--Days-->
    <div class="days">
        <h2>Day   #1 :</h2>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        <h2>Day   #2 :</h2>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        <h2>Day   #3 :</h2>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    </div>
    <!--Button-->
    <div class="book">
    <div class="book-now-box">
        <a class="book-now" href="">BOOK NOW</a>
    </div>
    </div>
</div>`;
    var australiaContent = ` <div class="individual-hero">
    <h1>Australia Tour Package</h1>
    <h4>STARTING FROM $1800</h4>
    <img src="images/tour-03 copy.jpg" alt="tour header">
</div>
<!--Pictures-->
<div class="pictures">
    <img src="images/aus-tour-01.jpg" alt="Australia">
    <img src="images/aus-tour-02.jpg" alt="Australia">
    <img src="images/aus-tour-03.jpg" alt="Australia">
</div>
<!--Days-->
<div class="days">
    <h2>Day   #1 :</h2>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    <h2>Day   #2 :</h2>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    <h2>Day   #3 :</h2>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<!--Button-->
<div class="book">
<div class="book-now-box">
    <a class="book-now" href="">BOOK NOW</a>
</div>
</div>`;
    var egyptContent = ` <div class="individual-hero">
    <h1>Egypt Tour Package</h1>
    <h4>STARTING FROM $900</h4>
    <img src="images/tour-06 copy.jpg" alt="tour header">
</div>
<!--Pictures-->
<div class="pictures">
    <img src="images/egypt-tour-01.jpg" alt="Egypt">
    <img src="images/egypt-tour-02.jpg" alt="Egypt">
    <img src="images/egypt-tour-03.jpg" alt="Egypt">
</div>
<!--Days-->
<div class="days">
    <h2>Day   #1 :</h2>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    <h2>Day   #2 :</h2>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    <h2>Day   #3 :</h2>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<!--Button-->
<div class="book">
<div class="book-now-box">
    <a class="book-now" href="">BOOK NOW</a>
</div>
</div>`;
    var franceContent = `<div class="individual-hero">
    <h1>France Tour Package</h1>
    <h4>STARTING FROM $2500</h4>
    <img src="images/tour-05 copy.jpg" alt="tour header">
</div>
<!--Pictures-->
<div class="pictures">
    <img src="images/france-tour-01.jpg" alt="France">
    <img src="images/france-tour-02.jpg" alt="France">
    <img src="images/france-tour-03.jpg" alt="France">
</div>
<!--Days-->
<div class="days">
    <h2>Day   #1 :</h2>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    <h2>Day   #2 :</h2>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    <h2>Day   #3 :</h2>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<!--Button-->
<div class="book">
<div class="book-now-box">
    <a class="book-now" href="">BOOK NOW</a>
</div>
</div>`;
    var israelContent = `<div class="individual-hero">
    <h1>Israel Tour Package</h1>
    <h4>STARTING FROM $1000</h4>
    <img src="images/tour-01 copy.jpg" alt="tour header">
</div>
<!--Pictures-->
<div class="pictures">
    <img src="images/israel-tour-01.jpg" alt="Israel">
    <img src="images/israel-tour-02.jpg" alt="Israel">
    <img src="images/israel-tour-03.jpg" alt="Israel">
</div>
<!--Days-->
<div class="days">
    <h2>Day   #1 :</h2>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    <h2>Day   #2 :</h2>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    <h2>Day   #3 :</h2>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<!--Button-->
<div class="book">
<div class="book-now-box">
    <a class="book-now" href="">BOOK NOW</a>
</div>
</div>`;
    var japanContent = ` <div class="individual-hero">
    <h1>Japan Tour Package</h1>
    <h4>STARTING FROM $1300</h4>
    <img src="images/tour-07 copy.jpg" alt="tour header">
</div>
<!--Pictures-->
<div class="pictures">
    <img src="images/japan-tour-01.jpg" alt="Japan">
    <img src="images/japan-tour-02.jpg" alt="Japan">
    <img src="images/japan-tour-03.jpg" alt="Japan">
</div>
<!--Days-->
<div class="days">
    <h2>Day   #1 :</h2>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    <h2>Day   #2 :</h2>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    <h2>Day   #3 :</h2>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<!--Button-->
<div class="book">
<div class="book-now-box">
    <a class="book-now" href="">BOOK NOW</a>
</div>
</div>`;
    var newZelandContent = `<div class="individual-hero">
    <h1>New Zeland Tour Package</h1>
    <h4>STARTING FROM $1200</h4>
    <img src="images/tour-04 copy.jpg" alt="tour header">
</div>
<!--Pictures-->
<div class="pictures">
    <img src="images/nz-tour-01.jpg" alt="New Zeland">
    <img src="images/nz-tour-02.jpg" alt="New Zeland">
    <img src="images/nz-tour-03.jpg" alt="New Zeland">
</div>
<!--Days-->
<div class="days">
    <h2>Day   #1 :</h2>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    <h2>Day   #2 :</h2>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    <h2>Day   #3 :</h2>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<!--Button-->
<div class="book">
<div class="book-now-box">
    <a class="book-now" href="">BOOK NOW</a>
</div>
</div>`;
    var uaeContent = ` <div class="individual-hero">
    <h1>U.A.E Tour Package</h1>
    <h4>STARTING FROM $3000</h4>
    <img src="images/tour-09 copy.jpg" alt="tour header">
</div>
<!--Pictures-->
<div class="pictures">
    <img src="images/uae-tour-01.jpg" alt="U.A.E">
    <img src="images/uae-tour-02.jpg" alt="U.A.E">
    <img src="images/uae-tour-03.jpg" alt="U.A.E">
</div>
<!--Days-->
<div class="days">
    <h2>Day   #1 :</h2>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    <h2>Day   #2 :</h2>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    <h2>Day   #3 :</h2>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<!--Button-->
<div class="book">
<div class="book-now-box">
    <a class="book-now" href="">BOOK NOW</a>
</div>
</div>`;
    var usaContent = ` <div class="individual-hero">
    <h1>U.S.A Tour Package</h1>
    <h4>STARTING FROM $1500</h4>
    <img src="images/tour-02 copy.jpg" alt="tour header">
</div>
<!--Pictures-->
<div class="pictures">
    <img src="images/usa-tour-01.jpg" alt="U.S.A">
    <img src="images/usa-tour-02.jpg" alt="U.S.A">
    <img src="images/usa-tour-03.jpg" alt="U.S.A">
</div>
<!--Days-->
<div class="days">
    <h2>Day   #1 :</h2>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    <h2>Day   #2 :</h2>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    <h2>Day   #3 :</h2>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<!--Button-->
<div class="book">
<div class="book-now-box">
    <a class="book-now" href="">BOOK NOW</a>
</div>
</div>`;


function initListeners() {

    $("a").click(function(e) {
        let btnId = e.currentTarget.id;
        console.log("Current page is " + btnId);
        MODEL.changePageContent(btnId);
    })
}

var _changePageContent = function(pageName) {
    let contentName = pageName + "Content";
    console.log('Pagename is ' + pageName)
    $("#app").html(eval(contentName));

    if(pageName == "home"){
        $("nav").removeClass("dark").addClass("light");
    }else{
        $("nav").removeClass("light").addClass("dark");
    };

    initListeners();

}

return {
    changePageContent: _changePageContent,
}

})();
