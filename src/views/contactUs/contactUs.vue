<style src="./contactUs.css"></style>

<script lang="ts" src="./contactUs.ts"></script>

<template>
    <div>
        <header>
            <Header />
        </header>

        <div id="movieDetailsHeader">
            <nav class="navHeader"
                style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
                aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                    <li class="breadcrumb-item active" aria-current="page">All Movies</li>
                </ol>
            </nav>
            <h1 class="movieName">All Movies</h1>
        </div>
        <body>
            <section>
                <div class="section-header">
                    <div class="container">
                        <h2>Contact Us</h2>
                        <p>Feel Free to Write us Anytime</p>
                    </div>
                </div>
                
                    <div class="container">
                        <div class="row">
                    
                            <div class="contact-form">
                            <form action="" id="contact-form">
                                <h2>Send Message</h2>
                                <div class="input-box">
                                <input type="text" required="true" name="">
                                <span>Full Name</span>
                                </div>
                        
                                <div class="input-box">
                                <input type="email" required="true" name="">
                                <span>Email</span>
                                </div>
                        
                                <div class="input-box">
                                <textarea required="true" name=""></textarea>
                                <span>Type your Message...</span>
                                </div>
                        
                                <div class="input-box">
                                <input type="submit" value="Send" name="">
                                </div>
                            </form>
                            </div>

                            <div class="contact-info">
                                <div class="contact-info-item">
                                    <div class="contact-info-icon">
                                    <i class="fas fa-home"></i>
                                    </div>
                            
                                    <div class="contact-info-content">
                                        <h4>Address</h4>
                                        <p>4671 Sugar Camp Road,<br/> Owatonna, Minnesota, <br/>55060</p>
                                    </div>
                                </div>
                        
                                <div class="contact-info-item">
                                    <div class="contact-info-icon">
                                    <i class="fas fa-phone"></i>
                                    </div>
                            
                                    <div class="contact-info-content">
                                        <h4>Phone</h4>
                                        <p>571-457-2321</p>
                                    </div>
                                </div>
                        
                                <div class="contact-info-item">
                                    <div class="contact-info-icon">
                                    <i class="fas fa-envelope"></i>
                                    </div>
                            
                                    <div class="contact-info-content">
                                        <h4>Email</h4>
                                        <p>ntamerrwael@mfano.ga</p>
                                    </div>
                                </div>
                            </div>
                    
                    </div>
                </div>
            </section>
        </body>
        
    </div>
</template>