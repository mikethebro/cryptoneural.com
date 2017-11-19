var neo_norm = {
	x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116],
	y: [-0.00372892, -0.00371815, -0.00397437, -0.00418439, -0.00376167, -0.00408877, -0.00423498, -0.00408951, -0.00408000, -0.00413821, -0.00412450, -0.00433287, -0.00404075, -0.00405587, -0.00453816, -0.00394610, -0.00389105, -0.00371816, -0.00407743, -0.00405063, -0.00373667, -0.00393543, -0.00417764, -0.00388131, -0.00343432, -0.00357772, -0.00406671, -0.00443063, -0.00436784, -0.00392842, -0.00408981, -0.00396139, -0.00416286, -0.00419731, -0.00408002, -0.00398468, -0.00411143, -0.00412947, -0.00444561, -0.00407764, -0.00413499, -0.00417577, -0.00399398, -0.00378855, -0.00391801, -0.00368518, -0.00386190, -0.00375339, -0.00407171, -0.00413180, -0.00449815, -0.00403164, -0.00428541, -0.00431005, -0.00421757, -0.00413013, -0.00432727, -0.00416585, -0.00410872, -0.00399230, -0.00365175, -0.00421853, -0.00406478, -0.00417162, -0.00407458, -0.00415222, -0.00410741, -0.00396167, -0.00415357, -0.00414979, -0.00401766, -0.00409351, -0.00414446, -0.00379575, -0.00407452, -0.00427172, -0.00423173, -0.00405066, -0.00420152, -0.00422946, -0.00413533, -0.00399328, -0.00410559, -0.00410897, -0.00419372, -0.00408892, -0.00403864, -0.00403162, -0.00411765, -0.00398318, -0.00407838, -0.00407135, -0.00395653, -0.00415002, -0.00411122, -0.00411973, -0.00416560, -0.00404600, -0.00414594, -0.00399439, -0.00416426, -0.00423182, -0.00409042, -0.00397639, -0.00396872, -0.00416762, -0.00403909, -0.00401606, -0.00403214, -0.00400198, -0.00404196, -0.00404277, -0.00407008, -0.00412340, -0.00392555, -0.00398546, -0.00396179, -0.00411631, -0.00396089, -0.00422259, -0.00426757, -0.00410445, -0.00433490, -0.00412444, -0.00413148, -0.00404886, -0.00394047, -0.00420735, -0.00420205, -0.00400618, -0.00397306, -0.00407465, -0.00394274, -0.00390822, -0.00383637, -0.00415864, -0.00408549, -0.00413290, -0.00410839, -0.00408848, -0.00403439, -0.00397078, -0.00412715, -0.00396518, -0.00385302, -0.00393064, -0.00388143, -0.00403040, -0.00396533, -0.00396531, -0.00402979, -0.00389595, -0.00395272, -0.00410720, -0.00425235, -0.00414786, -0.00407339, -0.00419512, -0.00419082, -0.00404114, -0.00410614, -0.00418250, -0.00415881, -0.00394120, -0.00404426, -0.00411350, -0.00406773, -0.00405042, -0.00403426, -0.00402685, -0.00404090, -0.00399082, -0.00395344, -0.00405797, -0.00409645, -0.00409836, -0.00418257, -0.00413882, -0.00420011, -0.00422666, -0.00422726, -0.00405930, -0.00426713, -0.00384288, -0.00394274, -0.00392611, -0.00409932, -0.00408585, -0.00378304, -0.00400985, -0.00397866, -0.00411857, -0.00400126, -0.00398778, -0.00411918, -0.00403477, -0.00401570, -0.00404217, -0.00397246, -0.00411383, -0.00390980, -0.00399633, -0.00411091, -0.00421285, -0.00398759, -0.00407661, -0.00414010, -0.00415182, -0.00411988, -0.00422446, -0.00415829, -0.00415010, -0.00409842, -0.00429677, -0.00405134, -0.00415913, -0.00391350, -0.00373472, -0.00398070, -0.00411289, -0.00406666, -0.00396650, -0.00416931, -0.00411198, -0.00380688, -0.00376544, -0.00402731, -0.00406762, -0.00396109, -0.00412446, -0.00405896, -0.00412520, -0.00425131, -0.00426682, -0.00413765, -0.00421760, -0.00406868, -0.00400176, -0.00409383, -0.00394257, -0.00410280, -0.00403776, -0.00400943, -0.00412083, -0.00397217, -0.00401992, -0.00393132, -0.00403215, -0.00416615, -0.00421447, -0.00434304, -0.00452991, -0.00434703, -0.00425423, -0.00423666, -0.00419670, -0.00400273, -0.00385059, -0.00407355, -0.00424597, -0.00430963, -0.00419152, -0.00416709, -0.00421114, -0.00428312, -0.00413229, -0.00402707, -0.00407531, -0.00397565, -0.00400272, -0.00395615, -0.00406142, -0.00394645, -0.00396620, -0.00394767, -0.00400076, -0.00391825, -0.00397589, -0.00412390, -0.00393336, -0.00390004, -0.00401185, -0.00394949, -0.00397822, -0.00384514, -0.00404387, -0.00412910, -0.00434380, -0.00422125, -0.00422458, -0.00434589, -0.00417972, -0.00409572, -0.00410981, -0.00396631, -0.00399105, -0.00403280, -0.00415214, -0.00430278, -0.00426837, -0.00420848, -0.00418346, -0.00400846, -0.00393182, -0.00392362, -0.00398133, -0.00399297, -0.00377676, -0.00404153, -0.00414761, -0.00400994, -0.00410440, -0.00403363, -0.00420796, -0.00395133, -0.00414681, -0.00417192, -0.00417998, -0.00417124, -0.00421023, -0.00414681, -0.00404419, -0.00413379, -0.00417046, -0.00415984, -0.00400691, -0.00400149, -0.00399806, -0.00412156, -0.00418905, -0.00421358, -0.00407804, -0.00411710, -0.00406460, -0.00407178, -0.00426754, -0.00400670, -0.00396604, -0.00396650, -0.00397310, -0.00396787, -0.00411177, -0.00406680, -0.00407696, -0.00404533, -0.00408584, -0.00408037, -0.00418956, -0.00415779, -0.00414851, -0.00399746, -0.00392172, -0.00398967, -0.00403693, -0.00382597, -0.00390370, -0.00404436, -0.00402462, -0.00403301, -0.00389056, -0.00404723, -0.00400911, -0.00411365, -0.00410073, -0.00412614, -0.00400925, -0.00404660, -0.00425313, -0.00421088, -0.00420477, -0.00412691, -0.00410384, -0.00386761, -0.00420336, -0.00422370, -0.00407038, -0.00410242, -0.00408956, -0.00410569, -0.00397613, -0.00403601, -0.00400735, -0.00394294, -0.00392188, -0.00389262, -0.00383029, -0.00401621, -0.00402790, -0.00408065, -0.00407071, -0.00407682, -0.00401022, -0.00394387, -0.00407942, -0.00419108, -0.00436392, -0.00418175, -0.00410189, -0.00406446, -0.00429227, -0.00411753, -0.00417050, -0.00402799, -0.00414528, -0.00403190, -0.00387199, -0.00403600, -0.00411052, -0.00395399, -0.00395966, -0.00403147, -0.00404959, -0.00425056, -0.00430872, -0.00415054, -0.00411294, -0.00404423, -0.00408138, -0.00405505, -0.00396448, -0.00391461, -0.00391713, -0.00403406, -0.00402597, -0.00412174, -0.00416697, -0.00404328, -0.00388966, -0.00401054, -0.00403900, -0.00405636, -0.00416996, -0.00414339, -0.00416026, -0.00417484, -0.00415047, -0.00400684, -0.00415087, -0.00407915, -0.00409431, -0.00414807, -0.00411523, -0.00414047, -0.00401656, -0.00423387, -0.00419067, -0.00423264, -0.00426000, -0.00421470, -0.00410175, -0.00409467, -0.00414879, -0.00405540, -0.00421989, -0.00399417, -0.00390088, -0.00409451, -0.00396120, -0.00395413, -0.00404973, -0.00405780, -0.00405034, -0.00398345, -0.00394499, -0.00396027, -0.00405938, -0.00394083, -0.00398096, -0.00398684, -0.00397407, -0.00395984, -0.00411292, -0.00401530, -0.00397786, -0.00401250, -0.00413064, -0.00402578, -0.00399370, -0.00410690, -0.00415933, -0.00412687, -0.00412770, -0.00410765, -0.00413340, -0.00421690, -0.00403571, -0.00403650, -0.00389206, -0.00401840, -0.00404640, -0.00404322, -0.00397394, -0.00406394, -0.00402036, -0.00402116, -0.00409993, -0.00405008, -0.00403889, -0.00406558, -0.00406390, -0.00407866, -0.00395969, -0.00408152, -0.00411368, -0.00420725, -0.00407369, -0.00416677, -0.00407127, -0.00413782, -0.00415055, -0.00430305, -0.00389712, -0.00392368, -0.00387243, -0.00395004, -0.00397787, -0.00425621, -0.00384349, -0.00400411, -0.00387848, -0.00405043, -0.00414520, -0.00401673, -0.00394667, -0.00392400, -0.00392542, -0.00404099, -0.00393486, -0.00404716, -0.00384703, -0.00381750, -0.00390965, -0.00392301, -0.00407488, -0.00399794, -0.00414449, -0.00424507, -0.00436655, -0.00423460, -0.00419033, -0.00410582, -0.00389150, -0.00397996, -0.00386811, -0.00384308, -0.00391407, -0.00380338, -0.00403159, -0.00410075, -0.00400355, -0.00400018, -0.00411061, -0.00416058, -0.00424909, -0.00402041, -0.00402304, -0.00368499, -0.00379730, -0.00387553, -0.00393208, -0.00375479, -0.00371129, -0.00382299, -0.00405663, -0.00404609, -0.00422562, -0.00416766, -0.00428204, -0.00421620, -0.00422733, -0.00433049, -0.00413211, -0.00395009, -0.00406525, -0.00410045, -0.00408813, -0.00401819, -0.00412871, -0.00404004, -0.00406618, -0.00403280, -0.00416115, -0.00413626, -0.00421077, -0.00416484, -0.00420697, -0.00404813, -0.00404730, -0.00413183, -0.00397850, -0.00423887, -0.00414436, -0.00409204, -0.00414688, -0.00414979, -0.00428263, -0.00412522, -0.00410446, -0.00401995, -0.00411873, -0.00400451, -0.00403782, -0.00432541, -0.00408384, -0.00391445, -0.00400398, -0.00392077, -0.00371986, -0.00396346, -0.00384786, -0.00412691, -0.00408765, -0.00402660, -0.00416576, -0.00407249, -0.00418303, -0.00408075, -0.00404888, -0.00400197, -0.00394388, -0.00381795, -0.00405193, -0.00423593, -0.00411398, -0.00406105, -0.00404844, -0.00401862, -0.00400140, -0.00410520, -0.00411635, -0.00409192, -0.00402214, -0.00399819, -0.00406855, -0.00400484, -0.00397440, -0.00403857, -0.00387558, -0.00404021, -0.00399205, -0.00407817, -0.00413359, -0.00422110, -0.00410924, -0.00426919, -0.00398145, -0.00416875, -0.00412770, -0.00418047, -0.00421817, -0.00425339, -0.00416077, -0.00410342, -0.00393672, -0.00427904, -0.00402712, -0.00403113, -0.00412486, -0.00397800, -0.00422875, -0.00401169, -0.00397101, -0.00399442, -0.00399923, -0.00395765, -0.00405697, -0.00399852, -0.00401682, -0.00413365, -0.00394057, -0.00403365, -0.00385121, -0.00404477, -0.00410948, -0.00399285, -0.00406028, -0.00425292, -0.00427491, -0.00418364, -0.00410073, -0.00422747, -0.00412007, -0.00411030, -0.00410356, -0.00405440, -0.00396803, -0.00403326, -0.00401999, -0.00403179, -0.00404137, -0.00403049, -0.00398119, -0.00403892, -0.00402948, -0.00409185, -0.00402025, -0.00403170, -0.00406516, -0.00408127, -0.00395807, -0.00400590, -0.00424875, -0.00423811, -0.00405053, -0.00400649, -0.00400457, -0.00402855, -0.00412914, -0.00416496, -0.00397035, -0.00419634, -0.00427105, -0.00437991, -0.00417396, -0.00415546, -0.00415166, -0.00408760, -0.00399631, -0.00393878, -0.00398497, -0.00402629, -0.00405952, -0.00400033, -0.00414625, -0.00403728, -0.00393285, -0.00406168, -0.00396503, -0.00403462, -0.00417231, -0.00401756, -0.00402649, -0.00394624, -0.00401804, -0.00395975, -0.00407440, -0.00417604, -0.00421541, -0.00409750, -0.00413781, -0.00399320, -0.00399559, -0.00403912, -0.00399263, -0.00407719, -0.00400300, -0.00397769, -0.00398731, -0.00404032, -0.00407586, -0.00422774, -0.00404274, -0.00397494, -0.00388745, -0.00374967, -0.00354428, -0.00395600, -0.00394083, -0.00393643, -0.00412203, -0.00423799, -0.00425915, -0.00393871, -0.00407945, -0.00396910, -0.00387327, -0.00393862, -0.00396078, -0.00410201, -0.00405244, -0.00409418, -0.00401087, -0.00412654, -0.00385840, -0.00403882, -0.00405440, -0.00352599, -0.00420598, -0.00440574, -0.00420449, -0.00422730, -0.00423657, -0.00412305, -0.00410502, -0.00384500, -0.00407309, -0.00408410, -0.00411726, -0.00415409, -0.00428617, -0.00414297, -0.00413492, -0.00408531, -0.00399872, -0.00412185, -0.00405528, -0.00415797, -0.00399213, -0.00413350, -0.00424135, -0.00433206, -0.00411613, -0.00418771, -0.00404590, -0.00404853, -0.00395343, -0.00400596, -0.00391308, -0.00411799, -0.00412647, -0.00413708, -0.00399294, -0.00399675, -0.00397167, -0.00410994, -0.00385190, -0.00410042, -0.00407974, -0.00393432, -0.00388099, -0.00402456, -0.00395152, -0.00401638, -0.00390320, -0.00408217, -0.00391605, -0.00398878, -0.00393371, -0.00402376, -0.00406105, -0.00400580, -0.00406326, -0.00424287, -0.00412030, -0.00401277, -0.00393116, -0.00405884, -0.00414097, -0.00397853, -0.00399569, -0.00372048, -0.00394274, -0.00411248, -0.00407384, -0.00403193, -0.00414620, -0.00423098, -0.00417710, -0.00415646, -0.00418193, -0.00418225, -0.00415863, -0.00414176, -0.00407032, -0.00412337, -0.00393926, -0.00412006, -0.00411339, -0.00418633, -0.00416393, -0.00424714, -0.00408933, -0.00417411, -0.00429489, -0.00403628, -0.00395241, -0.00408796, -0.00391533, -0.00404441, -0.00371384, -0.00405760, -0.00427256, -0.00408449, -0.00423896, -0.00421765, -0.00401230, -0.00394816, -0.00399105, -0.00398868, -0.00387599, -0.00423101, -0.00398047, -0.00389283, -0.00388348, -0.00401039, -0.00393314, -0.00404128, -0.00418787, -0.00395474, -0.00420105, -0.00404070, -0.00419043, -0.00417658, -0.00407310, -0.00414963, -0.00403120, -0.00399679, -0.00398970, -0.00393151, -0.00398318, -0.00394693, -0.00413722, -0.00410622, -0.00408615, -0.00425103, -0.00409397, -0.00421569, -0.00407542, -0.00383333, -0.00402970, -0.00390809, -0.00398286, -0.00406866, -0.00421842, -0.00413778, -0.00413250, -0.00423966, -0.00391608, -0.00415122, -0.00410330, -0.00433815, -0.00388335, -0.00406530, -0.00405432, -0.00431322, -0.00412788, -0.00396997, -0.00380995, -0.00408386, -0.00371981, -0.00391331, -0.00414892, -0.00417919, -0.00403952, -0.00399458, -0.00422425, -0.00383001, -0.00406290, -0.00409039, -0.00400556, -0.00401609, -0.00398981, -0.00410946, -0.00411393, -0.00400540, -0.00400963, -0.00403213, -0.00374239, -0.00430575, -0.00403600, -0.00405364, -0.00393314, -0.00399212, -0.00392835, -0.00394249, -0.00411989, -0.00406415, -0.00406153, -0.00408754, -0.00417425, -0.00385975, -0.00405288, -0.00402138, -0.00401459, -0.00410020, -0.00403845, -0.00403671, -0.00415786, -0.00413505, -0.00387186, -0.00423834, -0.00436947, -0.00427753, -0.00423366, -0.00417289, -0.00407149, -0.00406472, -0.00402807, -0.00397478, -0.00396420, -0.00422954, -0.00401336, -0.00394525, -0.00413669, -0.00412185, -0.00396283, -0.00395972, -0.00379422, -0.00397065, -0.00404543, -0.00394662, -0.00416491, -0.00397452, -0.00403156, -0.00412371, -0.00399707, -0.00393071, -0.00402066, -0.00401264, -0.00418708, -0.00405050, -0.00414681, -0.00408703, -0.00409918, -0.00407112, -0.00395771, -0.00406119, -0.00408963, -0.00409982, -0.00409039, -0.00409073, -0.00409471, -0.00415922, -0.00407723, -0.00403131, -0.00409845, -0.00405957, -0.00410216, -0.00400274, -0.00408933, -0.00398638, -0.00402813, -0.00397638, -0.00407812, -0.00406516, -0.00403602, -0.00420877, -0.00412082, -0.00405926, -0.00413843, -0.00412837, -0.00384314, -0.00433540, -0.00400252, -0.00384410, -0.00443371, -0.00384950, -0.00441206, -0.00409247, -0.00404943, -0.00375774, -0.00402421, -0.00394071, -0.00389271, -0.00379301, -0.00422236, -0.00415861, -0.00411455, -0.00409833, -0.00416825, -0.00381573, -0.00408597, -0.00406197, -0.00419726, -0.00416049, -0.00400808, -0.00410993, -0.00413749, -0.00407564, -0.00411661, -0.00405686, -0.00419402, -0.00404052, -0.00413757, -0.00421845, -0.00388638, -0.00405809, -0.00406790, -0.00412013, -0.00413278, -0.00402280, -0.00395489, -0.00403724, -0.00407183, -0.00405761, -0.00396823, -0.00408451, -0.00412030, -0.00406153, -0.00419102, -0.00423871, -0.00395055, -0.00400174, -0.00399178, -0.00397884, -0.00406796, -0.00407948, -0.00399124, -0.00411879, -0.00409635, -0.00410114, -0.00404093, -0.00406138, -0.00390071, -0.00404534, -0.00450402, -0.00418477, -0.00416898, -0.00430629, -0.00407707, -0.00411687, -0.00404933, -0.00413973, -0.00405187, -0.00421075, -0.00413803, -0.00399084, -0.00389921, -0.00403640, -0.00396251, -0.00408418, -0.00408564, -0.00409723, -0.00409400, -0.00401163, -0.00402990, -0.00412101],
	type: 'scatter'
};
var predict = {
	x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116],
	y: [0.00606136, 0.00015612, -0.00479997, 0.00865523, 0.00000000, -0.00352710, 0.00102854, 0.00134281, -0.00036444, 0.00000000, -0.00664024, 0.00118299, 0.00000000, -0.01548175, 0.00024582, 0.00028913, 0.00486679, -0.00563424, -0.00490320, 0.00426239, -0.00140753, -0.00846432, 0.00000000, 0.01365998, 0.01149670, 0.00000000, -0.00876421, -0.00675622, 0.00556048, 0.00035641, 0.00432936, -0.00127207, -0.00219577, 0.00110030, 0.00385400, 0.00030055, 0.00000000, -0.00977934, 0.00000000, -0.00300179, -0.00553253, -0.00142453, 0.00389294, 0.00000000, 0.00768663, 0.00394203, 0.00928291, 0.00217836, 0.00239028, -0.00750806, 0.00639746, -0.00129477, -0.00239399, -0.00034536, 0.00148878, -0.00521365, -0.00155156, -0.00104195, 0.00155917, 0.01178475, -0.00413480, 0.00118628, -0.00169926, 0.00117978, -0.00123518, -0.00012438, 0.00413709, -0.00143706, -0.00130443, 0.00251999, 0.00026553, -0.00124942, 0.00940538, 0.00200117, -0.00301328, -0.00168340, 0.00347457, -0.00121031, -0.00239545, -0.00022181, 0.00354626, 0.00009475, 0.00000000, -0.00269829, 0.00000000, 0.00110475, 0.00117734, -0.00139359, 0.00264344, 0.00000000, 0.00038565, 0.00411089, -0.00121809, 0.00020268, 0.00000000, -0.00150932, 0.00183351, -0.00133071, 0.00308464, -0.00195596, -0.00426195, -0.00074377, 0.00206796, 0.00216880, -0.00368842, 0.00000000, 0.00052285, 0.00000000, 0.00099255, 0.00000000, 0.00018920, -0.00047292, -0.00207832, 0.00378249, 0.00233372, 0.00375597, 0.00000000, 0.00544595, -0.00156683, -0.00265012, 0.00198679, -0.00539045, 0.00000000, -0.00111182, 0.00063154, 0.00357068, -0.00441967, -0.00472548, 0.00030157, 0.00068007, -0.00267640, 0.00105025, 0.00218251, 0.00495422, -0.00379751, -0.00119955, -0.00267160, -0.00235927, -0.00237189, -0.00140747, 0.00000000, -0.00508321, -0.00080952, 0.00224218, 0.00011700, 0.00213056, -0.00164847, 0.00083977, 0.00136657, 0.00000000, 0.00466688, 0.00398362, 0.00053278, -0.00308287, 0.00009137, 0.00216800, -0.00160232, -0.00181911, 0.00220240, 0.00000000, -0.00255211, -0.00238267, 0.00357725, 0.00039371, -0.00164451, -0.00037309, -0.00001761, 0.00036971, 0.00061596, 0.00032362, 0.00205713, 0.00366365, 0.00129018, 0.00084854, 0.00131185, -0.00090594, 0.00040804, -0.00163151, -0.00295758, -0.00390844, 0.00000000, -0.00735884, 0.00416184, 0.00071252, 0.00133237, -0.00355883, -0.00325713, 0.00567431, -0.00068370, 0.00082876, -0.00292116, 0.00070327, 0.00126430, -0.00248308, 0.00003536, 0.00059047, -0.00012721, 0.00215228, -0.00179500, 0.00459273, 0.00265161, 0.00000000, -0.00262706, 0.00418482, 0.00180003, 0.00026567, 0.00012232, 0.00110072, -0.00216761, -0.00062266, -0.00094857, 0.00000000, -0.00664632, -0.00041266, -0.00476347, 0.00155288, 0.00666206, 0.00000000, -0.00323866, -0.00164399, 0.00131807, -0.00482420, -0.00359225, 0.00505725, 0.00671733, 0.00009145, 0.00000000, 0.00405871, 0.00000000, 0.00263415, 0.00124025, -0.00222968, -0.00297256, 0.00019292, -0.00300890, 0.00058742, 0.00203541, -0.00091916, 0.00361332, -0.00090970, 0.00127124, 0.00242732, -0.00054081, 0.00428695, 0.00351433, 0.00721189, 0.00571238, 0.00329990, 0.00313567, 0.00006456, -0.00562960, -0.00129835, 0.00000000, -0.00082792, -0.00082860, 0.00408134, 0.00860389, 0.00283560, -0.00140030, -0.00309173, -0.00004745, 0.00000000, -0.00202358, -0.00513204, -0.00193572, 0.00000000, -0.00232600, 0.00000000, -0.00119314, 0.00000000, -0.00325760, 0.00000000, -0.00065434, 0.00000000, -0.00139224, 0.00132171, 0.00000000, -0.00414256, 0.00156425, 0.00279190, 0.00000000, 0.00253603, 0.00249181, 0.00759742, 0.00322565, 0.00219440, -0.00328269, 0.00045158, 0.00000000, -0.00430678, -0.00039880, 0.00111162, 0.00000000, 0.00397490, 0.00347742, 0.00287710, 0.00000000, -0.00428810, -0.00384950, -0.00321861, -0.00388708, 0.00000000, 0.00145136, 0.00149711, 0.00000000, 0.00000000, 0.00707847, 0.00026773, -0.00196508, 0.00267844, 0.00027762, 0.00280255, -0.00205554, 0.00586477, 0.00051110, 0.00015124, 0.00001008, 0.00012769, -0.00137416, 0.00000000, 0.00265117, -0.00018455, -0.00146664, -0.00155618, 0.00257187, 0.00266936, 0.00313778, 0.00000000, -0.00172255, -0.00265516, 0.00087176, -0.00076045, 0.00044589, 0.00000000, -0.00625310, 0.00075874, 0.00143208, 0.00133245, 0.00142141, 0.00210728, -0.00164410, -0.00001342, -0.00022137, 0.00078166, -0.00036203, -0.00018444, -0.00362902, -0.00327532, -0.00394465, -0.00045774, 0.00115674, -0.00107070, -0.00256429, 0.00376790, 0.00196835, -0.00149111, -0.00036233, -0.00029471, 0.00434743, 0.00035088, 0.00222594, -0.00024566, 0.00055202, 0.00000000, 0.00366016, 0.00299320, -0.00273697, -0.00155152, -0.00190633, -0.00032281, -0.00031619, 0.00648057, -0.00331303, -0.00403849, -0.00004715, -0.00165368, -0.00189932, -0.00305889, 0.00013900, -0.00212207, -0.00165099, 0.00000000, 0.00061249, 0.00182274, 0.00445691, 0.00000000, 0.00062519, -0.00025330, 0.00047969, 0.00058414, 0.00288860, 0.00549811, 0.00243954, 0.00000000, -0.00490726, 0.00000000, 0.00170085, 0.00245150, -0.00461371, 0.00000000, -0.00232930, 0.00122456, -0.00283589, 0.00000000, 0.00457593, 0.00000000, -0.00187168, 0.00302114, 0.00332028, 0.00193014, 0.00221639, -0.00321912, -0.00515789, -0.00132466, -0.00121896, 0.00000000, -0.00170123, -0.00143134, 0.00089039, 0.00236552, 0.00275662, 0.00000000, 0.00089847, -0.00152066, -0.00284804, 0.00056518, 0.00512408, 0.00205725, 0.00198626, 0.00226218, -0.00050859, 0.00058534, 0.00012631, -0.00044866, 0.00000000, 0.00410297, -0.00010265, 0.00219896, 0.00197935, 0.00061671, 0.00177317, 0.00115151, 0.00509696, -0.00098741, 0.00043856, -0.00100104, -0.00237085, -0.00190053, 0.00051961, 0.00000000, -0.00220227, 0.00000000, -0.00558702, 0.00027164, 0.00251700, -0.00339933, 0.00048064, 0.00072559, -0.00198648, -0.00222928, -0.00223759, -0.00054982, 0.00045344, 0.00010664, -0.00268577, 0.00093888, -0.00008011, 0.00002671, 0.00076112, 0.00165117, -0.00246435, 0.00066769, 0.00202841, 0.00141502, -0.00169229, 0.00166186, 0.00292587, 0.00000000, -0.00127965, -0.00034522, -0.00060434, -0.00031564, -0.00145906, -0.00454668, 0.00003009, -0.00069212, 0.00333250, -0.00024677, -0.00080388, -0.00055082, 0.00165336, -0.00080364, 0.00071084, 0.00093378, -0.00119612, 0.00039362, 0.00081361, 0.00014993, 0.00033646, 0.00000000, 0.00374642, 0.00055074, 0.00000000, -0.00269914, 0.00103736, -0.00207589, 0.00036612, -0.00203619, -0.00299384, -0.00858048, 0.00217212, 0.00055195, 0.00195430, 0.00000000, -0.00034243, -0.00856024, 0.00333985, -0.00164749, 0.00222169, -0.00257104, -0.00538536, -0.00202024, -0.00044644, 0.00000000, 0.00004773, -0.00322522, 0.00000000, -0.00335879, 0.00263226, 0.00402530, 0.00233868, 0.00325835, 0.00000000, 0.00332913, -0.00017570, -0.00277795, -0.00682188, -0.00417652, -0.00455724, -0.00381394, 0.00117482, -0.00227096, 0.00071259, 0.00158317, -0.00002416, 0.00407601, -0.00171178, -0.00311610, 0.00000000, 0.00020033, -0.00305615, -0.00487019, -0.00849319, -0.00319468, -0.00479328, 0.00430324, 0.00097958, -0.00072165, -0.00169446, 0.00436860, 0.00702681, 0.00577412, 0.00104760, 0.00320187, -0.00086700, 0.00153153, -0.00169487, 0.00001037, -0.00084022, -0.00476181, 0.00000000, 0.00457596, 0.00095187, 0.00000000, 0.00043226, 0.00262352, -0.00047920, 0.00235232, 0.00186850, 0.00331787, 0.00000000, 0.00106122, -0.00110797, 0.00004108, -0.00164661, 0.00264030, 0.00252049, 0.00010575, 0.00494590, -0.00245060, 0.00042531, 0.00189100, 0.00018671, 0.00000000, -0.00435113, -0.00043292, -0.00063091, 0.00130357, -0.00200052, 0.00111325, 0.00000000, -0.00895065, -0.00281890, 0.00113558, -0.00218239, 0.00000000, 0.00624361, -0.00010645, 0.00452622, -0.00262897, -0.00079865, 0.00134473, -0.00267215, 0.00000000, -0.00362737, -0.00115147, -0.00079039, 0.00018307, 0.00182004, 0.00602246, 0.00000000, -0.00482476, -0.00125336, -0.00005516, 0.00000000, 0.00076196, 0.00136084, -0.00156542, -0.00194348, -0.00151224, 0.00020401, 0.00071217, -0.00142678, 0.00045667, 0.00146966, -0.00017955, 0.00517689, 0.00108571, 0.00345951, 0.00183324, 0.00096615, -0.00121079, 0.00220596, -0.00268835, 0.00568842, 0.00019703, 0.00157596, 0.00007460, -0.00121393, -0.00278050, -0.00085792, 0.00000000, 0.00451479, -0.00587507, 0.00120448, 0.00072591, -0.00231577, 0.00185350, -0.00589775, 0.00000000, 0.00075744, -0.00008219, -0.00016098, 0.00128459, -0.00139585, 0.00056186, 0.00024996, -0.00312537, 0.00262008, 0.00000000, 0.00592859, 0.00106229, 0.00000000, 0.00417321, 0.00296364, -0.00212414, -0.00273782, -0.00054635, 0.00129023, -0.00307900, -0.00058505, -0.00101082, -0.00147177, -0.00061755, 0.00158410, -0.00043971, 0.00000000, -0.00026599, -0.00049801, -0.00012627, 0.00146765, 0.00000000, 0.00056575, -0.00107636, 0.00117641, 0.00102176, 0.00027559, 0.00000000, 0.00395930, 0.00313056, -0.00352609, -0.00327419, 0.00181590, 0.00285469, 0.00311734, 0.00297269, 0.00063247, 0.00000000, 0.00618288, 0.00000000, -0.00194805, -0.00565134, -0.00063973, -0.00130049, -0.00228388, -0.00137955, 0.00055868, 0.00192551, 0.00064173, -0.00031391, -0.00109396, 0.00078757, -0.00355984, -0.00055588, 0.00240790, -0.00132962, 0.00176164, 0.00000000, -0.00396348, 0.00046515, 0.00000000, 0.00243327, 0.00063985, 0.00291639, 0.00014168, -0.00249599, -0.00384466, -0.00096403, -0.00292884, 0.00066450, 0.00018049, -0.00130065, 0.00000000, -0.00262173, -0.00061186, 0.00000000, -0.00027363, -0.00178932, -0.00295441, -0.00807136, -0.00372543, -0.00295323, -0.00129434, 0.00249422, 0.00938754, -0.00119791, 0.00089865, 0.00238619, -0.00210835, -0.00518881, -0.00637495, 0.00219683, -0.00272172, 0.00010483, 0.00288609, 0.00133786, 0.00135347, -0.00224462, -0.00049451, -0.00172119, 0.00066314, -0.00292633, 0.00502680, 0.00000696, 0.00000000, 0.01680084, -0.00149589, -0.00608851, 0.00000000, -0.00123482, -0.00230347, 0.00020076, 0.00000000, 0.00754445, 0.00127433, 0.00164663, 0.00123979, 0.00050967, -0.00345304, 0.00033621, 0.00000000, 0.00104601, 0.00349791, 0.00000000, 0.00222935, -0.00062338, 0.00452996, 0.00069899, -0.00230575, -0.00544123, 0.00000000, -0.00322929, 0.00000000, -0.00082965, 0.00158863, 0.00000000, 0.00300778, -0.00272894, -0.00292819, -0.00366154, 0.00000000, -0.00056194, 0.00000000, -0.00425312, 0.00328747, -0.00410191, -0.00370277, 0.00024011, 0.00170474, -0.00238257, 0.00000000, -0.00176857, 0.00180658, -0.00328288, 0.00184768, -0.00002092, 0.00209185, 0.00000000, -0.00062276, 0.00137859, 0.00000348, -0.00531904, -0.00218792, 0.00032926, 0.00242310, -0.00133787, -0.00383710, 0.00070577, 0.00000000, 0.00857202, 0.00316240, -0.00051327, 0.00163775, 0.00365119, 0.00098368, -0.00109995, 0.00053505, 0.00098327, 0.00000000, -0.00033433, -0.00004827, 0.00000000, 0.00177918, 0.00000000, 0.00556898, 0.00062638, 0.00129302, -0.00062518, 0.00000000, -0.00282702, 0.00130268, -0.00179399, -0.00621821, 0.00035548, 0.00202861, -0.00240669, 0.00258506, -0.00116355, 0.00922272, 0.00016050, -0.00536746, 0.00032612, -0.00468773, -0.00497185, 0.00000000, 0.00110884, -0.00046727, -0.00042594, 0.00314911, -0.00722125, 0.00000000, 0.00243503, 0.00305374, 0.00000000, 0.00313439, 0.00077943, -0.00299811, 0.00424108, -0.00285675, 0.00198820, -0.00252165, -0.00248658, 0.00000000, -0.00290478, 0.00000000, 0.00059723, 0.00069404, 0.00263900, 0.00164979, 0.00349787, -0.00139014, 0.00000000, 0.00079252, -0.00421768, 0.00000000, -0.00431507, -0.00101746, 0.00567996, 0.00000000, 0.00418579, 0.00285347, 0.00128024, -0.00251950, 0.00000000, 0.00000000, -0.00358432, 0.00565276, -0.00138896, 0.00002747, -0.00737665, 0.00543867, -0.00030281, 0.00000000, -0.00803029, -0.00353237, 0.00000000, 0.00419258, -0.00393581, 0.00728651, 0.00251956, -0.00344061, -0.00395064, 0.00000000, 0.00110098, -0.00599843, 0.00543431, -0.00144062, -0.00214841, 0.00033445, 0.00000000, 0.00089157, -0.00255751, -0.00286408, 0.00000000, -0.00040583, -0.00123549, 0.00766039, -0.00862806, -0.00067001, -0.00160069, 0.00171224, 0.00000000, 0.00221825, 0.00239195, -0.00225348, -0.00025562, -0.00005604, -0.00083365, -0.00361435, 0.00554498, 0.00000000, 0.00135411, 0.00205812, 0.00000000, 0.00224917, 0.00280428, -0.00030879, 0.00065594, 0.00894827, -0.00114815, -0.00471143, -0.00254840, -0.00237465, -0.00183822, 0.00005222, -0.00057090, 0.00000000, 0.00132706, 0.00174272, -0.00609758, 0.00000000, 0.00172940, -0.00412246, -0.00410100, 0.00000000, -0.00033407, 0.00469617, 0.00009804, -0.00143189, 0.00207203, -0.00407950, 0.00167221, 0.00008067, -0.00260913, 0.00110053, 0.00321718, 0.00101177, 0.00187461, -0.00284505, 0.00133731, -0.00159075, 0.00000000, -0.00059879, 0.00000000, 0.00334264, 0.00052731, 0.00000000, -0.00011867, 0.00020944, 0.00016752, 0.00000000, -0.00208666, 0.00001748, 0.00110843, -0.00103037, 0.00000000, -0.00143351, 0.00135854, -0.00130425, 0.00175760, 0.00066406, 0.00255669, 0.00000000, 0.00078386, 0.00201904, -0.00289392, -0.00039720, 0.00119206, -0.00138560, -0.00139101, 0.00701361, -0.00752985, 0.00214825, 0.00691542, -0.01046805, 0.00670270, -0.01049446, -0.00203687, -0.00196713, 0.00605052, -0.00175938, 0.00111998, 0.00313875, 0.00718081, -0.00433192, -0.00180933, -0.00049244, -0.00023062, -0.00265273, 0.00772355, 0.00012867, 0.00146383, -0.00218733, -0.00116565, 0.00317706, 0.00013196, -0.00067012, 0.00111183, -0.00019088, 0.00154124, -0.00262370, 0.00170277, -0.00140500, -0.00424176, 0.00514599, 0.00000000, -0.00014925, -0.00165242, -0.00226366, 0.00065171, 0.00253202, 0.00028140, -0.00047234, 0.00013204, 0.00300174, -0.00009006, -0.00087643, 0.00097775, -0.00296502, -0.00490196, 0.00292564, 0.00103039, 0.00138750, 0.00213567, -0.00003119, 0.00000000, 0.00295940, -0.00045608, 0.00048048, 0.00048025, 0.00241391, 0.00211526, 0.00757344, 0.00444918, -0.00834601, 0.00093171, 0.00076316, -0.00408987, 0.00186448, 0.00000000, 0.00161767, -0.00130026, 0.00110666, -0.00393235, -0.00239484, 0.00129845, 0.00379399, 0.00000000, 0.00270709, -0.00036225, 0.00000000, -0.00014700, 0.00000000, 0.00253704, 0.00229870, 0.00000000, -0.00361368],
	type: 'scatter'
};