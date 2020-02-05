// DocSection: schedule_unpublishing_add_filter
// Tip: Find more about JS/TS SDKs at https://docs.kontent.ai/javascript
import { ContentItem, DeliveryClient, Elements, TypeResolver } from '@kentico/kontent-delivery';
import * as _ from 'underscore';

// Create strongly typed models according to https://docs.kontent.ai/strongly-typed-models
export class Article extends ContentItem {
    public title: Elements.TextElement;
    public summary: Elements.TextElement;
    public post_date: Elements.DateTimeElement;
    public teaser_image: Elements.AssetsElement;
    public related_articles: Article[];
}

const deliveryClient = new DeliveryClient({
    projectId: '8d20758c-d74c-4f59-ae04-ee928c0816b7',
    typeResolvers: [
      new TypeResolver('article', (rawData) => new Article)
    ]
});

const d = new Date();
const now = d.toISOString();

deliveryClient.items<Article>()
    .type('article')
    .toObservable()
    .subscribe(response => console.log(_.filter(response.items, function (i) { 
        return ((i.PublishUntil > now || i.PublishUntil === undefined || i.PublishUntil === null))
    })));
// EndDocSection