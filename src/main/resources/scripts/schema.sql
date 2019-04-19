CREATE TABLESPACE tbs_perm_demong
    DATAFILE 'tbs_perm_demong.dat'
    SIZE 20M
    ONLINE;

CREATE TEMPORARY TABLESPACE tbs_temp_demong
    TEMPFILE 'tbs_temp_01.dbf'
    SIZE 5M
    AUTOEXTEND ON;

CREATE USER demong
  IDENTIFIED BY demong
  DEFAULT TABLESPACE tbs_perm_demong
  TEMPORARY TABLESPACE tbs_temp_demong
  QUOTA 20M on tbs_perm_demong;

GRANT create session TO demong;
GRANT create table TO demong;
GRANT create view TO demong;
GRANT create any trigger TO demong;
GRANT create any procedure TO demong;
GRANT create sequence TO demong;
GRANT create synonym TO demong;
