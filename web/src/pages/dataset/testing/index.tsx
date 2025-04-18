import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import TestingForm from './testing-form';

const list = new Array(15).fill({
  content: `Lorem ipsum odor amet, consectetuer adipiscing elit. Ullamcorper vulputate id laoreet malesuada commodo molestie. Lectus convallis class euismod; consequat in curabitur. Ablandit praesent inceptos nibh placerat lectus fringilla finibus. Hac vivamus id scelerisque et gravida nec ligula et non. Consectetur eu himenaeos eget felis quis habitant tellus. Tellus commodo inceptos litora habitant per himenaeos faucibus pretium. Gravida velit pretium amet purus rhoncus taciti. `,
});

const SimilarityList = [
  { label: '混合相似度', value: 45.88 },
  { label: '关键词似度', value: 45.88 },
  { label: '向量相似度', value: 45.88 },
];

export default function RetrievalTesting() {
  return (
    <section className="flex divide-x h-full">
      <div className="p-4">
        <TestingForm></TestingForm>
      </div>
      <div className="p-4 flex-1 ">
        <h2 className="text-4xl font-bold mb-8 px-[10%]">
          15 Results from 3 files
        </h2>
        <section className="flex flex-col gap-4 overflow-auto h-[83vh] px-[10%]">
          {list.map((x, idx) => (
            <Card
              key={idx}
              className="bg-colors-background-neutral-weak border-colors-outline-neutral-strong"
            >
              <CardHeader>
                <CardTitle>
                  <div className="flex gap-2 flex-wrap">
                    {SimilarityList.map((x, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="bg-colors-background-inverse-strong p-1.5 rounded-xl text-colors-text-inverse-weak text-base"
                      >
                        {x.label}
                        <span className="text-colors-text-inverse-strong ml-1 text-lg leading-none">
                          {x.value}
                        </span>
                      </Badge>
                    ))}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-colors-text-neutral-strong">{x.content}</p>
              </CardContent>
            </Card>
          ))}
        </section>
      </div>
    </section>
  );
}
