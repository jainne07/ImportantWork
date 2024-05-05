import { TestBed, tick } from '@angular/core/testing';
import { CoursesService } from './course.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ICourse } from './course';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
const expectedUrl = "https://my-json-server.typicode.com/NehaJain07/api/videoList";
describe('CoursesService', () => {
    let service: CoursesService;
    let controller: HttpTestingController;
    let course: ICourse;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [CoursesService],
        });
        service = TestBed.inject(CoursesService);
        controller = TestBed.inject(HttpTestingController);
        course = {
            "id": 2,
            "thumb": "https://img.youtube.com/vi/k8Q8SFlBCks/maxresdefault.jpg",
            "title": "Rxjs #2  | Javascript Promise Explained  |  Asynchronous  | Rxjs Series in Hindi (2020)",
            "description": "In This Video You will Learn about Javascript Promise and Explanation of  Asynchronous . Follow this video to know more about."
        }

    });
    afterEach(() => {
        controller.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    it('get courses data', () => {
        var result: ICourse[] = [];
        let search: string = "rxjs";
        service.getCourses(search).subscribe((data) => {
            result = data;
        });
        const req = controller.expectOne(expectedUrl + '?q=' + search);
        expect(req.request.method).toEqual("GET");
        req.flush([course])
        expect(result[0]).toEqual(course);
        expect(result[0].title).toMatch(/Rxjs/);
    });
    it("should call delete courses", () => {
        let id = 2;
        service.deleteCourses(id).subscribe();
        const req = controller.expectOne(expectedUrl + '/' + id);
        expect(req.request.method).toEqual("DELETE")
        expect(req).toBeDefined();
    });
    it('post courses data', () => {
        service.addCourses(course).subscribe();
        const req = controller.expectOne(expectedUrl);
        expect(req.request.method).toEqual("POST");
        expect(req.request.body).toEqual(course)
    });
}); 
