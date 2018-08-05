import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const blogs = [
      {
        'approvers': [
        {
        'approvalNotes': 'I like the content, no comment',
        'approvalStatus': 'Approved',
        'name': 'Andrea'
        },
        {
        'approvalStatus': 'Approved',
        'name': 'Jim Garlick'
        }
        ],
        'blogId': 'b123',
        'blogDescription': 'please join us discussing developing serverless application on aws environment',
        'endTime': '2018-07-18T18:15:00Z',
        'blogHost': 'Sara',
        'note': 'This is a completely serverless session, will cover S3, API Gateway, Lambda and Dynamodb',
        'place': {
        'classRoom': 'Room-1',
        'skype': 'skypelink1.com'
        },
        'presenter': [
        'Anil',
        'Musema'
        ],
        'startTime': '2018-07-18T17:15:00Z'
        },
        {
          'approvers': [
          {
          'approvalNotes': 'I like the content, no comment',
          'approvalStatus': 'Approved',
          'name': 'Andrea'
          },
          {
          'approvalStatus': 'Approved',
          'name': 'Jim Garlick'
          }
          ],
          'blogId': 'b233',
          'blogDescription': 'join us discussing developing serverless application on aws environment',
          'endTime': '2018-07-18T18:15:00Z',
          'blogHost': 'Dave',
          'note': 'This is a completely serverless session, will cover S3, API Gateway, Lambda and Dynamodb',
          'place': {
          'classRoom': 'Room-1',
          'skype': 'skypelink1.com'
          },
          'presenter': [
          'Anil',
          'Musema'
          ],
          'startTime': '2018-07-18T17:15:00Z'
          }
    ];
    return {blogs};
  }
}
