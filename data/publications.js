// 논문·특허 목록. 새 항목은 각 배열의 맨 위에 추가하세요.
// 형식: [키, 연도, '저자(교신저자는 * 표시)', '제목', '학술지/학회 정보', '상태(선택: under review 등)']
var J=[
 ['J28',2025,'Lee, H., Kim, D., Park, H. C., Kim, S. K., & Kim, Y.*','Disturbance observer based multiloop proportional feedback system for output voltage regulation in three phase AC to DC converters','Scientific Reports, 15(1), 42605'],
 ['J27',2025,'Kim, S. K., Kim, Y.*, Zheng, W. X., & Ahn, C. K.*','LPF-based Adaptive Observer for Speed and Acceleration Estimations of Electric Motor Drive Applications Without System Model Dependence','IEEE Transactions on Instrumentation and Measurement'],
 ['J26',2025,'Kim, Y., Zheng, W. X., Kim, S. K.*, & Ahn, C. K.*','Output-Feedback Critical Damping Double Integral Angular Velocity Control with Model-Free Observer for Quadcopter Applications','IEEE Transactions on Circuits and Systems I: Regular Papers'],
 ['J25',2025,'Kim, S. K., Kim, Y.*, Agarwal, R. K., & Ahn, C. K.*','Adaptive Output-Feedback Synchronizer for Servo Drive Positioning Applications via Decentralized Feedback Loop Intelligence','IEEE Transactions on Industrial Electronics'],
 ['J24',2025,'Kim, Y., Kim, S. K., Liu, J., Qiu, J., & Ahn, C. K.','Intelligent Inner Loop-Based Output-Feedback System for DC/DC Power Converters With Model-Free Observer','IEEE Transactions on Power Electronics'],
 ['J23',2024,'Park, J. K., Kim, D., Kim, S. K., & Kim, Y.*','Order Reduction Adaptive Current Tracking Control with Proportional-Integral-Type Filter for MAGLEV Applications','Machines','under review'],
 ['J22',2024,'Lim, S., Kim, S. K., Kim, Y.*, Zheng, W. X., & Ahn, C. K.*','Pole-Zero Cancellation Speed and Acceleration Filtering Technique with Disturbance Observer for Servo Drive Applications without Model Information','IEEE Transactions on Circuits and Systems I: Regular Papers'],
 ['J21',2024,'Lee, H.*, Oh, S., Kim, K. S., Kim, S. K., & Kim, Y.*','Model-Free Filter-Based Trajectory Tracking Controller for Two-Wheeled Vehicles through PZC Technique','Vehicles'],
 ['J20',2024,'Kim, S. K., Ahn, C. K.*, & Kim, Y.*','Second-Order Order-Reduction Speed and Acceleration Estimators for Servo Systems via Model-Free Adaptive Observer Design Technique','IEEE Transactions on Industrial Electronics'],
 ['J19',2024,'Choi, H. S., Kim, Y.*, & Kim, S. K.','Variable Bandwidth Technique-Based Current Control for Permanent Magnet Synchronous Motors','Scientific Reports'],
 ['J18',2024,'Kim, Y., Lim, S., Kang, H., Kim, S. K.*, Ahn, C. K.*, & Agarwal, R. K.','Observer-Based Pole-Zero Cancellation Trajectory-Tracking Control for Two-Wheeled Vehicles With Performance Recovery Property','IEEE Transactions on Intelligent Vehicles'],
 ['J17',2024,'Lee, H. S., Kim, Y.*, & Kim, S. K.*','Current Sensorless Pole-Zero Cancellation Output Voltage Control for Uninterruptible Power Supply Systems with a Three-Phase Inverter','Energies'],
 ['J16',2023,'Kim, Y., Ye, H., Lim, S., & Kim, S. K.*','Observer-Based Nonlinear Proportional–Integral–Integral Speed Control for Servo Drive Applications via Order Reduction Technique','Actuators'],
 ['J15',2022,'Lee, H. C., Lee, H., Lee, J. K., Choi, H. D., Choi, K., Kim, Y.*, & Kim, S. K.*','Output-Feedback Multi-Loop Positioning Technique via Dual Motor Synchronization Approach for Elevator System Applications','Energies'],
 ['J14',2021,'Lim, S., Kim, S. K., & Kim, Y.*','Active Damping Injection Output Voltage Control with Dynamic Current Cut-off Frequency for DC/DC Buck Converters','Energies'],
 ['J13',2021,'Choi, K., Kim, Y., Kim, S. K., & Kim, K. S.','Computationally Efficient Model Predictive Torque Control of Permanent Magnet Synchronous Machines Using Numerical Techniques','IEEE Transactions on Control Systems Technology'],
 ['J12',2020,'Kim, Y., Kim, S. K., & Ahn, C. K.','Variable-performance Proportional-type Angle-filtering System for Motor Drives','IEEE Transactions on Circuits and Systems II: Express Briefs'],
 ['J11',2020,'Kim, Y., Kim, K. S., & Kim, S. K.','Velocity-Sensorless Decentralized Tension Control for Roll-to-Roll Printing Machines','IEEE Access, 8, 93682–93691'],
 ['J10',2020,'Kim, Y., Kim, S. K., & Ahn, C. K.','Variable Cut-off Frequency Observer-based Position Tracking Control for Ball-Beam Systems without Velocity and Current Feedback Considering Actuator Dynamics','IEEE Transactions on Circuits and Systems I'],
 ['J9',2020,'Choi, K., Kim, Y., Kim, S. K., & Kim, K. S.','Current and Position Sensor Fault Diagnosis Algorithm for PMSM Drives Based on Robust State Observer','IEEE Transactions on Industrial Electronics'],
 ['J8',2020,'Choi, K., Kim, Y., Kim, K. S., & Kim, S. K.','Real-Time Optimal Torque Control of Interior Permanent Magnet Synchronous Motors Based on a Numerical Optimization Technique','IEEE Transactions on Control Systems Technology'],
 ['J7',2020,'Kim, S. K., Kim, Y., & Ahn, C. K.','Energy-Shaping Speed Controller with Time-Varying Damping Injection for Permanent-Magnet Synchronous Motors','IEEE Transactions on Circuits and Systems II: Express Briefs'],
 ['J6',2020,'Choi, K., Kim, Y., Kim, S. K., & Kim, K. S.','Auto-calibration of position offset for PMSM drives with uncertain parameters','Electronics Letters'],
 ['J5',2019,'Choi, K., Kim, Y., Kim, K. S., & Kim, S. K.','Output voltage tracking controller embedding auto-tuning algorithm for DC/DC boost converters','IET Power Electronics, 12(14), 3767–3773'],
 ['J4',2019,'Choi, K., Kim, Y., Kim, K. S., & Kim, S. K.','Using the stator current ripple model for real-time estimation of full parameters of a permanent magnet synchronous motor','IEEE Access, 7, 33369–33379'],
 ['J3',2018,'Kim, Y., Seo, H. T., Kim, S. K., & Kim, K. S.','A robust current controller for uncertain permanent magnet synchronous motors with a performance recovery property for electric power steering applications','Energies, 11(5), 1224'],
 ['J2',2014,'Kim, Y. K., Jang, I. G., Kim, Y., Kim, K. S., & Kim, S.','Structural optimization of a novel 6-DOF pose sensor system for enhancing noise robustness at a long distance','IEEE Transactions on Industrial Electronics, 61(10), 5622–5631'],
 ['J1',2013,'Kim, Y. K., Kim, Y., Jung, Y. S., Jang, I. G., Kim, K. S., Kim, S., & Kwak, B. M.','Developing accurate long-distance 6-DOF motion detection with one-dimensional laser sensors: Three-beam detection system','IEEE Transactions on Industrial Electronics, 60(8), 3386–3395']
];

var JREVIEW=[
 ['R2',2024,'Kim, S. K., Lim, S., Peng, S., Kim, Y.*, & Ahn, C. K.*','Observer-Based Adaptive Speed Tracking System for Permanent Magnet Synchronous Motor with Variable Critical Damping Performance','IEEE Transactions on Power Electronics','under review'],
 ['R1',2024,'Kim, Y.*, Lee, H. S., & Kim, S. K.*','Disturbance Observer-Based Multi-Loop Proportional-Type Feedback System for Output Voltage Regulation Applications of Three-Phase AC/DC Power Converters','Scientific Reports','under review']
];

var IC=[
 ['C5',2019,'Kim, Y. H., Choi, K., Kim, S. K., & Kim, K. S.','A disturbance observer based approach to current control of PMSM drives for torque ripple reduction','IFAC CSGRES 2019, pp. 206–209'],
 ['C4',2015,'Kim, Y., Kim, S., & Kim, K. S.','A Novel Disturbance Observer Based Robust Current-Control for a PMSM Drive System','IEEE 54th Conference on Decision and Control (CDC), Japan'],
 ['C3',2014,'Kim, Y., Kim, S., & Kim, K. S.','A DOB based Robust Current Control of Permanent Magnet Synchronous Motor','14th International Conference on Control, Automation and Systems (ICCAS), Korea'],
 ['C2',2014,'Kim, Y., Kim, P., Cho, K., Hong, Y. S., Kim, S., Kim, K. S., et al.','Remote position detection of steel coils using 2D laser scanners: Two-line-tracker','14th International Conference on Control, Automation and Systems (ICCAS), Korea'],
 ['C1',2012,'Kim, Y., Kim, Y. K., Kim, K. S., Kim, S., Kwak, B. M., Jung, Y. S., et al.','Structure optimization of 1-D laser sensors assembly for robust 6-DOF measurement','IEEE International Systems Conference (SysCon), Canada']
];

var DC=[
 ['D1',2024,'김동빈, 서민규, 함준식, 유강록, 김용훈','자동 파라미터 튜닝 및 외란 관측기를 적용한 EPS 모터 제어 시스템 개발 및 성능 향상 분석','2024 한국정밀공학회 추계학술대회'],
 ['D2',2024,'예현호, 유강록, 이현일, 김경록, 김현창, 김용훈','모델오차와 외란에 강인한 Linear Motor Track 시스템의 외란 관측 기반 위치 제어기법','2024 한국정밀공학회 추계학술대회'],
 ['D3',2024,'남기현, 임성준, 김경수, 김용훈','Electric Power Steering 시스템의 토크 추종 방법 및 시뮬레이터','2024 한국자동차공학회 춘계학술대회'],
 ['D4',2024,'이현일, 예현호, 이현철, 성한별, 오상윤, 김용훈','자율주행 제초로봇 시스템의 설계 및 구동','제19회 한국로봇종합학술대회 (KRoC 2024)'],
 ['D5',2022,'이현철, 오상윤, 이현일, 예현호, 김경수, 김용훈','자율주행기술 적용 제초로봇','2022 ICROS 대전충청지부 공동학술대회'],
 ['D6',2017,'김용훈, 김수현, 김경수','A Novel Disturbance Observer Based Robust Current-Control for a PMSM Drive System','제32회 제어로봇시스템학회 학술대회 (ICROS 2017)'],
 ['D7',2016,'김용훈, 김수현, 김경수, 한민우','외란 관측기를 이용한 전자 파워 스티어링의 중앙 복원 로직','제31회 제어로봇시스템학회 학술대회 (ICROS 2016)'],
 ['D8',2015,'김용훈, 김수현, 김경수','외란 관측기 기반 PMSM의 역기전력 보상을 통한 강인 전류 제어','제30회 제어로봇시스템학회 학술대회 (ICROS 2015) · Best Student Award'],
 ['D9',2011,'김용훈, 김영근, 정윤섭, 김경수, 김수현','2D 레이져 센서를 이용한 원거리 자세 변화 측정 알고리즘','2011 한국정밀공학회']
];

var PT=[
 ['P6',2017,'Min Woo Han, Woo Je Sung, Jong Ho Lee, Sung Jun Kim, Kyung Soo Kim, Yong Hun Kim','System for Compensating for Disturbance of Motor for Motor Driven Power Steering','Registered 2017-07-07 · US, China, Germany'],
 ['P5',2017,'Min Woo Han, Woo Je Sung, Jong Ho Lee, Kyung Soo Kim, Yong Hun Kim','Motor Control System and Method for Compensating Disturbance','Registered 2017-04-20 · US, China'],
 ['P4',2017,'한민우, 성우제, 이종호, 김성준, 김경수, 김용훈','전동식 파워 스티어링용 모터의 외란 보상 시스템','Registered 2017-05-11 · Korea'],
 ['P3',2014,'김영근, 김경수, 김수현, 김용훈','레이저 센서 기반 비접촉식 6-자유도 운동 측정 방법','Registered 2014-08-25 · Korea'],
 ['P2',2014,'김경수, 김영근, 김용훈, 장인권','2차원 레이저 센서를 이용한 대상 물체의 6 자유도 운동 산출 방법','Registered 2014-05-28 · Korea'],
 ['P1',2014,'김경수, 김영근, 김용훈, 장인권','최적화 설계를 통한 레이저 센서 기반 6자유도 운동 측정 장치','Registered 2014-02-11 · Korea']
];

