import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EmbedVideo } from 'ngx-embed-video';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { trigger, style, transition, animate, group } from '@angular/animations';
import * as vanillatilt from 'vanilla-tilt';
import {AppRouter} from './routes';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
// import the form wizard library
import { FormWizardModule } from 'angular2-wizard';
import $ from 'jquery/dist/jquery';


import { MdButtonModule, MdSnackBarModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdTabsModule } from '@angular/material';
import { NgXCookies } from 'ngx-cookies';
// getCookie(cookieName: string): string
//setCookie(cookieName: string, value: string, validity?: number, validityType?: string, domain?: string, path?: string, needsSecureConnection?: boolean)
// Import the routiers
import { RouterModule, Routes, NavigationExtras } from '@angular/router';
import {UserService} from './user.service';
   import { HashLocationStrategy, LocationStrategy } from '@angular/common';
// d3 and nvd3 should be included somewhere


// Import your library
import { SlickModule } from 'ngx-slick';

// Import your library
import { AmexioWidgetModule } from 'amexio-ng-extensions';


// Import HttpClientModule from @angular/common/http
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ArtistPostsComponent } from './artist-posts/artist-posts.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { BannerComponent } from './banner/banner.component';
import { BodyComponent } from './body/body.component';
import { MainComponent } from './main/main.component';
import { BackgroundComponent } from './background/background.component';
import { BottomBannerComponent } from './bottom-banner/bottom-banner.component';
import { ArtistNameComponent } from './artist-name/artist-name.component';
import { AvatarComponent } from './avatar/avatar.component';
import { BannerTextComponent } from './banner-text/banner-text.component';
import { LoginComponent } from './login/login.component';
import { BannerTextFromWroneComponent } from './banner-text-from-wrone/banner-text-from-wrone.component';
import { TextLogoComponent } from './text-logo/text-logo.component';
import { VipAccessCampaignComponent } from './vip-access-campaign/vip-access-campaign.component';
import { BehindTheScenesPageSectionComponent } from './behind-the-scenes-page-section/behind-the-scenes-page-section.component';
import { PagesComponent } from './pages/pages.component';
import { BehindTheScenesContentComponent } from './behind-the-scenes-content/behind-the-scenes-content.component';
import { GetVipButtonComponent } from './get-vip-button/get-vip-button.component';
import { FollowOnSocialSectionPageComponent } from './follow-on-social-section-page/follow-on-social-section-page.component';
import { SocialContentComponent } from './social-content/social-content.component';
import { HttpTestComponent } from './http-test/http-test.component';
import { TourPageComponent } from './tour-page/tour-page.component';
import { TicketsComponent } from './tickets/tickets.component';
import { CommentsModalComponent } from './comments-modal/comments-modal.component';
import { LoggedInContentComponent } from './logged-in-content/logged-in-content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OpenDashBoardButtonComponent } from './open-dash-board-button/open-dash-board-button.component';
import { AdminAppComponent } from './admin-app/admin-app.component';
import { HeadersComponent } from './headers/headers.component';
import { AnalyticsWidgetComponent } from './analytics-widget/analytics-widget.component';
import { SocialButtonsComponent } from './social-buttons/social-buttons.component';
import { VideosPageComponent } from './videos-page/videos-page.component';
import { VideoCoverSliderComponent } from './video-cover-slider/video-cover-slider.component';
import { DetailedAnalyticsComponent } from './detailed-analytics/detailed-analytics.component';
import { AplicationHeaderComponent } from './aplication-header/aplication-header.component';
import { ClubChooserComponent } from './club-chooser/club-chooser.component';
import { BubbleMenuComponent } from './bubble-menu/bubble-menu.component';
import { BubbleMenuBubblePeiceComponent } from './bubble-menu-bubble-peice/bubble-menu-bubble-peice.component';
import { RegisterComponent } from './register/register.component';
import { SubscriptionPackagesComponent } from './subscription-packages/subscription-packages.component';
import { DashboardSystemComponent } from './dashboard-system/dashboard-system.component';
import { AnimationsComponent } from './animations/animations.component';
import { AccountComponent } from './account/account.component';
import { AccountWidgetComponent } from './account-widget/account-widget.component';
import { LoginAndRegisterCompComponent } from './login-and-register-comp/login-and-register-comp.component';
import { StripeQuickSignUpComponent } from './stripe-quick-sign-up/stripe-quick-sign-up.component';
import { SignupComponent } from './signup/signup.component';
import { ChosenPackageStripeSignupComponent } from './chosen-package-stripe-signup/chosen-package-stripe-signup.component';
import { ChosenPackageSuccessSignupFormComponent } from './chosen-package-success-signup-form/chosen-package-success-signup-form.component';
import { FormPackageChooserSignupComponent } from './form-package-chooser-signup/form-package-chooser-signup.component';
import { SmallAvatarComponent } from './small-avatar/small-avatar.component';
import { ChooseAVipPackageComponent } from './choose-avip-package/choose-avip-package.component';
import { VipFormManagerComponent } from './vip-form-manager/vip-form-manager.component';
import { jqxBarGaugeComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxbargauge';
import { AnalyticsGraphComponent } from './analytics-graph/analytics-graph.component';
import { DetailAnalyticsGraphLinesComponent } from './detail-analytics-graph-lines/detail-analytics-graph-lines.component';
import { DetailedAccountComponent } from './detailed-account/detailed-account.component';
import { StripeAPIComponent } from './stripe-api/stripe-api.component';
import { UserAppComponent } from './user-app/user-app.component';
import { AuthguardGuard } from "app/authguard.guard";
import { ExistingUserPaymentMethodComponent } from './existing-user-payment-method/existing-user-payment-method.component';
import { NvD3Component } from 'ng2-nvd3';
import { ClubJumperComponent } from './club-jumper/club-jumper.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { DisplayAllPostsByIdComponent } from './display-all-posts-by-id/display-all-posts-by-id.component';
import { MobileMenueComponent } from './mobile-menue/mobile-menue.component';
import { MenuServiceService } from "./menu-service.service";
import { DataTiltDirective } from './data-tilt.directive';
import { CallToActionQuickLinksComponent } from './call-to-action-quick-links/call-to-action-quick-links.component';
import { PackageDescriptionBlockComponent } from './package-description-block/package-description-block.component';
import { StepOneDescriptionVIPPackageJoinComponent } from './step-one-description-vippackage-join/step-one-description-vippackage-join.component';
import { SecretStripeKeysComponent } from './secret-stripe-keys/secret-stripe-keys.component';
import { LockContentButonttoVipComponent } from './lock-content-butontto-vip/lock-content-butontto-vip.component';
import { PreLoaderComponent } from './pre-loader/pre-loader.component';
import { MainBodySliderComponent } from './main-body-slider/main-body-slider.component';
import { CallToActionMainBodyButtonsComponent } from './call-to-action-main-body-buttons/call-to-action-main-body-buttons.component';
import { HomeMainPageContentComponent } from './home-main-page-content/home-main-page-content.component';
import { UserLoggedInInforUsingTokenComponent } from './user-logged-in-infor-using-token/user-logged-in-infor-using-token.component';
import { ProfileComponent } from './profile/profile.component';
import { EditPageWidgetComponent } from './edit-page-widget/edit-page-widget.component';
import { CmsPageEditorArtistComponent } from './cms-page-editor-artist/cms-page-editor-artist.component';
import { ForgotPasswordFromComponent } from './forgot-password-from/forgot-password-from.component';
import { VipJoinDirective } from './vip-join.directive';
import { RegisterSuccessComponent } from './register-success/register-success.component';
import { GetVipLinkFromMobileIncomingComponent } from './get-vip-link-from-mobile-incoming/get-vip-link-from-mobile-incoming.component';
import { BuyTicketsURLPopUpComponent } from './buy-tickets-urlpop-up/buy-tickets-urlpop-up.component';
import { InstagramImportComponent } from './instagram-import/instagram-import.component';



// add the app routes
const appRoutes:Routes = [
  /*  {
    path: 'login',
  component: LoginComponent 
  },
  
   {
    path: 'vip',
    component: GetVipLinkFromMobileIncomingComponent,
 

    
  },
  

  @RouteConfig([
  { path: '/vip', component: GetVipLinkFromMobileIncomingComponent, as: 'getVipLinkFromMobileIncomingComponent' },
])
  */
  {
    path: '#vip',
    component: VipAccessCampaignComponent 

    
  },
 

  {
    path: '',
    component: UserAppComponent
  },
 
  {
    path: '',
    canActivate: [AuthguardGuard],
    component: AdminAppComponent
  },
  {

    path: '**',
    component: NotFoundComponentComponent

  }

]


@NgModule({
  declarations: [
    AppComponent,
    ArtistPostsComponent,
    HeaderComponent,
    LogoComponent,
    MenuComponent,
    BannerComponent,
    BodyComponent,
    MainComponent,
    BackgroundComponent,
    BottomBannerComponent,
    ArtistNameComponent,
    AvatarComponent,
    BannerTextComponent,
    LoginComponent,
    BannerTextFromWroneComponent,
    TextLogoComponent,
    VipAccessCampaignComponent,
    BehindTheScenesPageSectionComponent,
    PagesComponent,
    BehindTheScenesContentComponent,
    GetVipButtonComponent,
    FollowOnSocialSectionPageComponent,
    SocialContentComponent,
    HttpTestComponent,
    TourPageComponent,
    TicketsComponent,
    CommentsModalComponent,
    LoggedInContentComponent,
    DashboardComponent,
    OpenDashBoardButtonComponent,
    AdminAppComponent,
    HeadersComponent,
    AnalyticsWidgetComponent,
    SocialButtonsComponent,
    VideosPageComponent,
    VideoCoverSliderComponent,
    DetailedAnalyticsComponent,
    AplicationHeaderComponent,
    ClubChooserComponent,
    BubbleMenuComponent,
    BubbleMenuBubblePeiceComponent,
    RegisterComponent,
    SubscriptionPackagesComponent,
    DashboardSystemComponent,
    AnimationsComponent,
    AccountComponent,
    AccountWidgetComponent,
    LoginAndRegisterCompComponent,
    StripeQuickSignUpComponent,
    SignupComponent,
    ChosenPackageStripeSignupComponent,
    ChosenPackageSuccessSignupFormComponent,
    FormPackageChooserSignupComponent,
    SmallAvatarComponent,
    ChooseAVipPackageComponent,
    VipFormManagerComponent,
    jqxBarGaugeComponent,
    AnalyticsGraphComponent,
    DetailAnalyticsGraphLinesComponent,
    DetailedAccountComponent,
    StripeAPIComponent,
    UserAppComponent,
    ExistingUserPaymentMethodComponent,
    ClubJumperComponent,
    NotFoundComponentComponent,
    DisplayAllPostsByIdComponent,
    MobileMenueComponent,
    DataTiltDirective,
    CallToActionQuickLinksComponent,
  
    PackageDescriptionBlockComponent,
  
    StepOneDescriptionVIPPackageJoinComponent,
  
    SecretStripeKeysComponent,
  
    LockContentButonttoVipComponent,
  
    PreLoaderComponent,
  
    MainBodySliderComponent,
  
    CallToActionMainBodyButtonsComponent,
  
    HomeMainPageContentComponent,
  
    UserLoggedInInforUsingTokenComponent,
  
    ProfileComponent,
  
    EditPageWidgetComponent,
  
    CmsPageEditorArtistComponent,
  
    ForgotPasswordFromComponent,
  
    VipJoinDirective,
  
    RegisterSuccessComponent,
  
    GetVipLinkFromMobileIncomingComponent,
  
    BuyTicketsURLPopUpComponent,
  
    InstagramImportComponent,

    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    EmbedVideo.forRoot(),
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MdTabsModule, 
    MdButtonModule,
     MdCardModule, 
     MdMenuModule, 
     MdSnackBarModule,
     MdToolbarModule, 
     MdIconModule,
     RouterModule.forRoot(appRoutes),
     AppRouter,

    ReactiveFormsModule,
       // Specify the library as an import
    FormWizardModule,
      HttpClientModule,
        // Specify your library as an import
    SlickModule.forRoot(),
        AmexioWidgetModule,
  

        

    
 
    

  ],
  providers: [MenuServiceService, UserService, AuthguardGuard, NvD3Component, SecretStripeKeysComponent, UserLoggedInInforUsingTokenComponent, ChooseAVipPackageComponent, ChosenPackageStripeSignupComponent, ChosenPackageSuccessSignupFormComponent, ClubChooserComponent, SubscriptionPackagesComponent],
  bootstrap: [AppComponent]
})



export class AppModule { }
