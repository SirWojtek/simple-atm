import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { mock, instance, when, verify, anyString } from 'ts-mockito';
import { AtmModule } from './atm.module';
import { AtmComponent } from './atm.component';
import { AtmService, IWithdrawResponse } from './atm.service';
import { of, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('AtmComponent', () => {
  let fixture: ComponentFixture<AtmComponent>;
  let atmServiceMock: AtmService;
  let snackbarMock: MatSnackBar;

  beforeEach(async(() => {
    atmServiceMock = mock(AtmService);
    snackbarMock = mock(MatSnackBar);

    TestBed.configureTestingModule({
      imports: [AtmModule],
      providers: [
        { provide: AtmService, useValue: instance(atmServiceMock) },
        { provide: MatSnackBar, useValue: instance(snackbarMock) }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AtmComponent);
  }));

  it('should create component', () => {
    const atmComponent = fixture.debugElement.componentInstance;
    expect(atmComponent).toBeTruthy();
  });

  it('should push response', () => {
    const withdrawValue = 130;
    const component = fixture.componentInstance;
    const response: IWithdrawResponse = {
      amount: withdrawValue,
      notes: [100, 20, 10]
    };

    when(atmServiceMock.withdrawCash(withdrawValue)).thenReturn(of(response));

    expect(component.responses.length).toEqual(0);

    component.cashInputControl.setValue(withdrawValue);
    component.onWithdrawClick();

    expect(component.responses.length).toEqual(1);
    expect(component.responses[0]).toEqual(response);

    verify(atmServiceMock.withdrawCash(withdrawValue)).once();
  });

  it('should show snackbar on error', () => {
    const withdrawValue = 133;
    const component = fixture.componentInstance;
    const err = {
      error: 'Test Error'
    };

    when(atmServiceMock.withdrawCash(withdrawValue)).thenReturn(
      throwError(err)
    );

    expect(component.responses.length).toEqual(0);

    component.cashInputControl.setValue(withdrawValue);
    component.onWithdrawClick();

    expect(component.responses.length).toEqual(0);

    verify(atmServiceMock.withdrawCash(withdrawValue)).once();
    verify(snackbarMock.open(err.error, anyString())).once();
  });
});
