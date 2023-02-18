import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-social-impact-cooperative-section',
  templateUrl: './social-impact-cooperative-section.component.html',
  styleUrls: ['./social-impact-cooperative-section.component.scss'],
})
export class SocialImpactCooperativeSectionComponent {
  @Input() imageURL = 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Images/gettyimages-525701055-2048x2048_g7nbt1.png'
  @Input() paragraphText = `Elewa's businesses have one common objective, to
                            unlock true potential of individuals, teams, and
                            communities. All our talents are enrolled in a personal
                            growth track. In turn, they contribute teir own growth
                            towards teh growth of others, the group and their
                            communities.`
  @Input() titleText = `A cooperative mindset`
  @Input() imagePlacement = 'right'
  @Input() backgroundColor = '#fffdd0'
}