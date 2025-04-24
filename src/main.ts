import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { HomeComponent } from './app/pages/home/home.component';


bootstrapApplication(HomeComponent, {
  providers: [provideHttpClient()], // ✅ Cách mới thay cho HttpClientModule
}).catch((err) => console.error(err));
